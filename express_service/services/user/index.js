const express = require("express");

const app = express();

app.use(express.json());

app.use("/", (req, res, next) => {
  return res.status(200).json({ msg: "Hello from USER!" });
});

app.listen(5003, () => {
  console.log("User is listening to port 5003");
});
