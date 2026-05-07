const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./database/health.db", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Database Connected");
  }
});

db.run(`
    CREATE TABLE IF NOT EXISTS users(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT,
        password TEXT,
        role TEXT
    )
`);

db.run(`
    CREATE TABLE IF NOT EXISTS prescriptions(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        doctor_id INTEGER,
        patient_id INTEGER,
        medicines TEXT,
        notes TEXT
    )
`);

module.exports = db;
