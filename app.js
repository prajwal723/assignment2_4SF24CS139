const express = require("express");

const app = express();

const cors = require("cors");

require("dotenv").config();

app.use(cors());

app.use(express.json());

app.use("/auth",
require("./routes/authRoutes"));

app.use("/prescription",
require("./routes/prescriptionRoutes"));

app.listen(5000,()=>{

    console.log("Server Running");
});
