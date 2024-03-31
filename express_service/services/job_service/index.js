const express = require("express");
const app = express();
const cors = require("cors");

// grpc client
const client = require("./proto/client");

const port = 5004;
const CLIENT_URL = "http://localhost:5173";

const corsOptions = {
  origin: CLIENT_URL,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/company/:companyId", (req, res) => {
  const companyId = req.params.companyId;

  if (!companyId) {
    res.status(404).json({
      msg: "Company id not found",
    });
  }

  client.getJobsByCompanyId({ companyId: companyId }, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({
        msg: "Something wrong",
      });
    }

    res.status(200).json({
      msg: "Get all josb by company id successfully",
      data: data,
    });
  });
});

app.use("/", (req, res, next) => {
  return res.status(200).json({ msg: "Hello from JOB!" });
});

app.listen(port, () => {
  console.log(`Listening to port: http://localhost:${port}`);
});
