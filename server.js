require("dotenv").config();
const express = require("express");
const connectToDB = require("./database/db");

connectToDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.listen(PORT, () => {
    console.log("PORT: 3000");
});
