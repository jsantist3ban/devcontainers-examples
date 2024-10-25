import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Example 1: Testing NodeJS Web App in Dev Containers!");
});

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}/`);
});