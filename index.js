const express = require('express');
const path = require('path');

const app = express();
const port = 3000;
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '2525',
  database: 'registerlogin'
});

connection.connect((err) => {
  if (err) {
      console.log('connection error:', err);
  } else {
      console.log('Connected to MySQL');
  }
});


app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));


app.post('/login', (req, res) => {
  
});

app.post('/register', (req, res) => {

  
  let sql = `INSERT INTO users (name, email, password) VALUES ('${req.body.name}', '${req.body.email}', '${req.body.password}')`;
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("record inserted");
  });

});

// main route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages/register.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
