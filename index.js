const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const Routes = require('./routes/routing');
const config = require('./config');
// const admin = require('firebase-admin');


// const serviceAccount = require('./path-to-your-firebase-credentials.json');
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// });

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));

app.use('/', Routes.routes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
