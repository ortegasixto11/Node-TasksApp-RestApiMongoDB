const Task = require("../models/task.js");

function list(req, res) {
    res.send("Hola Sixto");
}

async function create(req, res) {
    console.log(req.body);
    res.send("Post recibido");

    // const task = new Task({
    //     title: req.body.title,
    //     is_active: true,
    //     created_at: Date.now,
    // });

    // try {
    //     const result = await task.save();
    //     res.send(result);
    // } catch (err) {
    //     res.status(500).send({
    //         message: err.message || "Some error occurred while retrieving notes.",
    //     });
    // }
}

module.exports = {
    list,
    create,
};
