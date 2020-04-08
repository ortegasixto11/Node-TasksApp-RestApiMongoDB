const Task = require("../models/task.js");

function list(req, res) {
    res.send("Hola Sixto");
}

async function create(req, res) {
    const task = new Task({
        name: req.body.name,
        is_active: true,
        created_at: Date.now(),
    });

    try {
        const result = await task.save();
        res.status(200).send(result);
    } catch (err) {
        console.log(err.message);
        res.status(500).send({
            message: "Some error occurred while trying to create the task.",
        });
    }
}

module.exports = {
    list,
    create,
};
