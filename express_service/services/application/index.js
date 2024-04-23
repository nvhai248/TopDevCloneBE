const express = require("express");
const { PORT } = require("./configs/index");
const expressApp = require("./express-app");
const syncModals = require("./models/index")

const StartServer = async () => {
    const app = express();
    await expressApp(app);

    await syncModals();

    app
        .listen(PORT, () => {
            console.log(`Application service listening on port ${PORT}`);
        })
        .on("error", (err) => {
            console.log(err);
            process.exit();
        });
};

StartServer();
