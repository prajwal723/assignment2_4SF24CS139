const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");

const prescriptionController = require("../controllers/prescriptionController");

router.post("/add", auth, prescriptionController.createPrescription);

router.put("/update/:id", auth, prescriptionController.updatePrescription);

router.get("/doctor", auth, prescriptionController.getDoctorPrescription);

router.get("/patient", auth, prescriptionController.getPatientPrescription);

module.exports = router;
