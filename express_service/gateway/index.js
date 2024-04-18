const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");
const { createProxyMiddleware } = require("http-proxy-middleware");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(
  "/jobs",
  createProxyMiddleware({
    target: process.env.BASE_URL_JOB_SERVICE,
    changeOrigin: true,
  })
);
app.use("/applications", proxy(process.env.BASE_URL_APPLICATION_SERVICE));
app.use("/", proxy(process.env.BASE_URL_USER_SERVICE));

app.listen(5000, () => {
  console.log("Gateway is listening to port 5000");
});
