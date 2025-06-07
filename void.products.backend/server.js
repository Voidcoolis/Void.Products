// const express = require("express")

import dotenv from "dotenv";
import express from "express"; // to import this you need to add type module in the package.json
import { connectDB } from "./config/db.js";
import router from "./routes/productRoutes.js";
import path from "path";

dotenv.config(); //connects the mongoDb database

const app = express();
const PORT = process.env.PORT;

const __dirname = path.resolve();

app.use(express.json()); //allows us to accept JSON Data in the request.body

app.use("/api/products", router) // calling the routes from the productRutes

//check the environment
if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/void.products.frontend/dist")));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "void.products.frontend", "dist", "index.html"));
	});
}


//port
app.listen(5000, () => {
  connectDB();
  console.log("Server start : http://localhost:" + PORT);
});
