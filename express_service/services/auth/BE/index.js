require("dotenv").config();
const express =require("express");
const cors = require("cors");

const documents = require("./Routes/documents.js");
const authenticate = require("./Routes/authenticate.js");

(async function () {
  const { PORT } = process.env;
  const app = express();

  app.use(cors());
  const allowedOrigins = ['http://localhost:5173'];
  app.use(cors({
    origin: function (origin, callback) {
      // Check if the request origin is allowed
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true); // Allow the request
      } else {
        callback(new Error('Not allowed by CORS')); // Block the request
      }
    }
  }));

  const server = app.listen(PORT, () =>
    console.log(`Backend started on port ${PORT}`)
  );

  app.use("/documents", authenticate, documents);
})();