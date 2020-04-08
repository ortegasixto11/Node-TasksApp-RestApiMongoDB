const Task = require("../models/task.js");

async function getAll(req, res) {
    try {
        const result = await Task.find();
        res.status(200).send(result);
    } catch (err) {
        console.log(err.message);
        res.status(500).send({
            message: "Some error occurred while trying to getting the tasks.",
        });
    }
}

async function get(req, res) {
    try {
        const result = await Task.findById(req.params.id);
        if (result === null) {
            res.status(404).send({ message: "Task does not exists!" });
        } else {
            res.status(200).send(result);
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).send({
            message: "Some error occurred while trying to getting the task.",
        });
    }
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
    getAll,
    get,
    create,
};
