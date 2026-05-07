const db = require("../models/db");

exports.createPrescription = (req, res) => {
  if (req.user.role != "doctor") {
    return res.send("Only Doctor Allowed");
  }

  let patient_id = req.body.patient_id;
  let medicines = req.body.medicines;
  let notes = req.body.notes;

  db.run(
    "INSERT INTO prescriptions(doctor_id,patient_id,medicines,notes) VALUES(?,?,?,?)",
    [req.user.id, patient_id, medicines, notes],
    function (err) {
      if (err) {
        res.send(err);
      } else {
        res.send("Prescription Added");
      }
    },
  );
};

exports.updatePrescription = (req, res) => {
  if (req.user.role != "doctor") {
    return res.send("Only Doctor Allowed");
  }

  let medicines = req.body.medicines;
  let notes = req.body.notes;

  db.run(
    "UPDATE prescriptions SET medicines=?,notes=? WHERE id=?",
    [medicines, notes, req.params.id],
    function (err) {
      if (err) {
        res.send(err);
      } else {
        res.send("Prescription Updated");
      }
    },
  );
};

exports.getDoctorPrescription = (req, res) => {
  db.all(
    "SELECT * FROM prescriptions WHERE doctor_id=?",
    [req.user.id],
    (err, rows) => {
      if (err) {
        res.send(err);
      } else {
        res.json(rows);
      }
    },
  );
};

exports.getPatientPrescription = (req, res) => {
  db.all(
    "SELECT * FROM prescriptions WHERE patient_id=?",
    [req.user.id],
    (err, rows) => {
      if (err) {
        res.send(err);
      } else {
        res.json(rows);
      }
    },
  );
};
