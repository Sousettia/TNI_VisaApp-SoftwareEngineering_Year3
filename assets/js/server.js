const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

const app = express();
const db = new sqlite3.Database('./database.db');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files (like your HTML, CSS, JS)

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        id_number TEXT,
        name TEXT,
        surname TEXT,
        dob_day TEXT,
        dob_month TEXT,
        dob_year TEXT,
        gender TEXT,
        password TEXT
    )`);
});

app.post('/register', (req, res) => {
    const { idNumber, name, surname, dobDay, dobMonth, dobYear, gender, password } = req.body;

    db.run(`INSERT INTO users (id_number, name, surname, dob_day, dob_month, dob_year, gender, password)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
            [idNumber, name, surname, dobDay, dobMonth, dobYear, gender, password],
            function(err) {
                if (err) {
                    return res.status(500).send('Error occurred while registering');
                }
                res.send('Registration successful!');
            });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
