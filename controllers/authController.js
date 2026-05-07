const db = require("../models/db");

const jwt = require("jsonwebtoken");

exports.register = (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let password = req.body.password;
  let role = req.body.role;

  db.run(
    "INSERT INTO users(name,email,password,role) VALUES(?,?,?,?)",
    [name, email, password, role],
    function (err) {
      if (err) {
        res.send(err);
      } else {
        res.send("User Registered");
      }
    },
  );
};

exports.login = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  db.get("SELECT * FROM users WHERE email=?", [email], (err, row) => {
    if (err) {
      return res.send(err);
    }

    if (!row) {
      return res.send("User Not Found");
    }

    if (password != row.password) {
      return res.send("Wrong Password");
    }

    let token = jwt.sign(
      {
        id: row.id,
        role: row.role,
      },
      "secretkey",
    );

    res.json({
      message: "Login Success",
      token: token,
      role: row.role,
      id: row.id,
    });
  });
};
