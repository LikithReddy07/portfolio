const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

app.use("/portfolio/ping", (_req, res) => {
  console.log("health check successful");
  res.status(200).json({ health: "health check successful" });
});

app.use("/portfolio", express.static(path.join(__dirname, "./../dist")));

app.get("/portfolio/*", (_req, res) => {
  console.log("fallback to index");
  res.sendFile(path.join(__dirname, "./../dist", "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("server running on port", PORT);
});
