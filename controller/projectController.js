const fs = require('fs');
const path = require('path');
const config = require('../config');

const facultyData = {
    presenceStatus: false,
 };

const usersFilePath = path.join(__dirname, '../data/users.json');

function readUsersFile() {
  const data = fs.readFileSync(usersFilePath, 'utf-8');
  return JSON.parse(data);
}

function writeUsersFile(users) {
  const data = JSON.stringify(users, null, 2);
  fs.writeFileSync(usersFilePath, data, 'utf-8');
}

const addingData = async (req, res, next) => {
  try {
      console.log("hi!");
      const data = req.body;
      await firestore.collection('presence').doc().set(data);
      res.send('Record saved successfuly');
  } catch (error) {
      console.log(error);
      res.status(400).send(error);
      
  }
}



function loginStudent(req, res) {
  const { enrollmentNumber, password } = req.body;

  // Read existing users from the JSON file
  const users = readUsersFile();

  // Check if the user exists
  const user = users.find((u) => u.enrollmentNumber === enrollmentNumber && u.password === password);

  if (user) {
    console.log("logined successfully");
    res.status(200).redirect('/faculty-presence'); 
  } else {
    const msg  = "Try checking your Enrollment number and password again!!"
    console.log("bad credentials");
    res.render("studentLogin.ejs", {msg:msg})

  }
}

function loginTeacher(req, res) {
  const { teacherid, password } = req.body;

  // Read existing users from the JSON file
  const users = readUsersFile();

  // Check if the user exists
  const user = users.find((u) => u.teacherid === teacherid && u.password === password);

  if (user) {
    console.log("logined successfully");
    res.status(200).redirect('/faculty-presence'); 
  } else {
    const msg  = "Try checking your Teacher id and password again!!"
    console.log("bad credentials");
    res.render("teacherLogin.ejs", {msg:msg})

  }
}









function registerStudent(req, res) {
    const { name, year, branch, enrollmentNumber, password, confirmPassword } = req.body;
  
    // // Validate password and confirmPassword
    // if (password !== confirmPassword) {
    //   return res.render('registration', { errorMessage: 'Passwords do not match.' });
    // }
  
    // Read existing users from the JSON file
    const users = readUsersFile();
  
    // Check if the user already exists
    if (users.some((u) => u.enrollmentNumber === enrollmentNumber)) {
      return res.render('registration', { errorMessage: 'User with this enrollment number already exists.' });
    }
  
    // Add the new user
    users.push({ name, year, branch, enrollmentNumber, password });
  
    // Write the updated users array back to the JSON file
    writeUsersFile(users);
  
    // Redirect to the landing page upon successful registration
    res.status(200).redirect('/faculty-presence'); 
    console.log("Registered successfully!");
}  



function getPresenceStatus(req, res) {
    res.json({ presenceStatus: facultyData.presenceStatus });
  }

module.exports = { loginStudent , getPresenceStatus ,registerStudent, addingData, loginTeacher };
