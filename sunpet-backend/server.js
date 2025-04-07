const express = require('express');  
const bodyParser = require('body-parser');  
const cors = require('cors');  
const mysql = require('mysql');  

const app = express();  
const PORT = process.env.PORT || 5000;  

app.use(cors());  
app.use(bodyParser.json());  

// MySQL Connection  
const db = mysql.createConnection({  
  host: 'localhost',  
  user: 'root',          // Your MySQL username  
  password: '',          // Your MySQL password  
  database: 'sunpet_db'  // Your MySQL database name  
});  

db.connect(err => {  
  if (err) throw err;  
  console.log('Connected to MySQL');  
});  

// Define routes here  
app.get('/api/products', (req, res) => {  
  db.query('SELECT * FROM products', (err, results) => {  
    if (err) throw err;  
    res.json(results);  
  });  
});  

app.get('/api/services', (req, res) => {  
  db.query('SELECT * FROM services', (err, results) => {  
    if (err) {  
      console.error('Error fetching services:', err);  
      return res.status(500).json({ error: 'Failed to fetch services' });  
    }  
    res.json(results);  
  });  
});  

app.listen(PORT, () => {  
  console.log(`Server running on port ${PORT}`);  
});  