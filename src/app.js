const express = require("express");
const bodyParser = require("body-parser");
const database = require("./config/database.js");
const cors = require("cors");

require("dotenv").config();
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

database(process.env.MONGODB_URL);

// router
require("./routes/index.js")(app);
app.listen(process.env.API_PORT, () => {
    console.log(`API listening on port ${process.env.API_PORT}`);
});
