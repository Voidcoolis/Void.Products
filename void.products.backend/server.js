// const express = require("express")

import express from "express"  // to import this you need to add type module in the package.json
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config(); //connects the mongoDb database

const app = express();

// products route
app.get("/products", (request, response) => {
 
})

//port
app.listen(5000, () => {
    connectDB();
    console.log("Server start : http://localhost:5000");
})