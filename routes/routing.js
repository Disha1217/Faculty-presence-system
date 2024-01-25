const express = require('express');
const router = express.Router();

// Import Firebase Firestore functions
// const { loginStudent, registerStudent, facultyPresence, contactUs } = require('./controllers');
const { loginStudent, getPresenceStatus, registerStudent, addingData, loginTeacher} = require('../controller/projectController');
// Routes
router.get('/', (req, res) => res.render('home'));
router.get('/about', (req, res) => res.render('about'));
router.get('/improvements', (req, res) => res.render('improvement'));
router.get('/login', (req, res) => res.render('studentLogin'));
router.get('/teacherLogin', (req, res) => res.render('teacherLogin'));
router.post('/login/student', loginStudent);
router.post('/login/teacher', loginTeacher);
router.post('/check', addingData);
router.get('/register', (req, res) => res.render('register'));
router.post('/register/student', registerStudent);
router.get('/faculty-presence', (req, res) => res.render('facultyPresence'))
router.get('/logout', (req, res) => res.render('home'));
router.get('/get-status', getPresenceStatus);
router.get('/contact-us', (req, res) => res.render('contact'));

module.exports = {
    routes: router
}