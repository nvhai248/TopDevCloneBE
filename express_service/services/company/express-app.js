const express = require("express");
const bodyParser = require("body-parser");
const grpc = require("@grpc/grpc-js");
const routers = require("./router");
const grpcCompanyServer = require("./grpc-server");
const { GRPC_COMPANY_SERVER } = require("./configs");

module.exports = async (app) => {
  app.use(express.json({ limit: "1mb" }));
  app.use(express.urlencoded({ extended: true, limit: "1mb" }));
  // Make sure form data and file submissions are processed
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(express.static(__dirname + "/public"));

  grpcCompanyServer.bindAsync(
    `localhost:${GRPC_COMPANY_SERVER}`,
    grpc.ServerCredentials.createInsecure(),
    (err, port) => {
      if (err) {
        console.error("Server bind failed:", err);
      } else {
        console.log(
          "gRPC server for Service Transaction running on port",
          port
        );
      }
    }
  );

  routers(app);
};
