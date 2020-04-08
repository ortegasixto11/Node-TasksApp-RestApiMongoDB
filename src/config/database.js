const database = require("mongoose");

database.Promise = global.Promise;

async function connect(url) {
    try {
        await database.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("[Database] connected!");
    } catch (err) {
        console.log("[Database] couldn't connect with the database!");
        console.log("[Database] exiting now");
        process.exit();
    }
}

module.exports = connect;
