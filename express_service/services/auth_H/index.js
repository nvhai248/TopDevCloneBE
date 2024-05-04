import express from "express";
import dotenv from "dotenv";
import router from "./routes.js";
import keycloak from "./libs/adminClient.js";

dotenv.config();

const app = express();
app.use(keycloak.middleware());

app.use(express.json());

app.use("/", router);

app.listen(process.env.PORT, () => {
  console.log("Admin is listening to port 5095");
});
