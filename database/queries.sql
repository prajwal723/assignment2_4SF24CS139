-- register
INSERT INTO users(name,email,password,role)
VALUES(?,?,?,?);

-- login
SELECT * FROM users WHERE email=?;

-- add prescription
INSERT INTO prescriptions
(doctor_id,patient_id,medicines,notes)
VALUES(?,?,?,?);

-- update prescription
UPDATE prescriptions
SET medicines=?, notes=?
WHERE id=?;

-- doctor prescriptions
SELECT * FROM prescriptions
WHERE doctor_id=?;

-- patient prescriptions
SELECT * FROM prescriptions
WHERE patient_id=?;