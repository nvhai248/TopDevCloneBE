import express from "express";
const router = express.Router();
import keycloak from "./libs/adminClient.js";

router.get(
  "/admin",
  keycloak.protect("TopdevClient:admin"),
  (req, res, next) => {
    return res.status(200).json({ msg: "Hello from Auth H!" });
  }
);

router.get(
  "/user/:id",
  keycloak.protect("TopdevClient:user"),
  async (req, res, next) => {
    const id = req.params.id;
    return res.status(200).json({ msg: `Hello from get /user/${id}` });
  }
);

router.get("/hr", keycloak.protect("TopdevClient:hr"), (req, res, next) => {
  return res.status(200).json({ msg: "Hello from hr" });
});

export default router;
