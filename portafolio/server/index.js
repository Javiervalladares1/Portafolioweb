const express = require("express");
const cors = require("cors");
const data = require("./projects.json");

const app = express();
app.use(cors());

app.get("/api/projects", (_, res) => res.json(data));

app.listen(5174, () => console.log("API corriendo en http://localhost:5174"));