const db = require("mongoose");

db.Promise = global.Promise;

async function connect(url) {
    await db.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("[Database] connected!");
}

module.exports = connect;