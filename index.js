const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello World Hashith");
});

app.listen(3002, () => console.log("The server is running at PORT " + 3002));
