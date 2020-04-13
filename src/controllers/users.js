const User = require("../models/user.js");
const bcrypt = require("bcrypt");

async function getAll(req, res) {
    try {
        const result = await User.find();
        res.status(200).send(result);
    } catch (err) {
        console.log(err.message);
        res.status(500).send({
            message: "Some error occurred while trying to get the Users.",
        });
    }
}

async function get(req, res) {
    try {
        const result = await User.findById(req.params.id);
        if (result === null) {
            res.status(404).send({ message: "User does not exists!" });
        } else {
            res.status(200).send(result);
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).send({
            message: "Some error occurred while trying to get the user.",
        });
    }
}

async function create(req, res) {
    const user = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 10),
        is_active: true,
    });

    try {
        await user.save();
        res.status(200).send({ message: "User created successfully" });
    } catch (err) {
        console.log(err.message);
        res.status(500).send({
            message: "Some error occurred while trying to create the user.",
        });
    }
}

async function update(req, res) {
    try {
        const user = await User.findById(req.params.id);
        if (user === null) {
            res.status(404).send({ message: "User does not exists!" });
        } else {
            if (req.body.first_name != null) user.first_name = req.body.first_name;
            if (req.body.last_name != null) user.last_name = req.body.last_name;
            if (req.body.is_active != null) user.is_active = req.body.is_active;
            await User.updateOne({ _id: req.params.id }, user);
            res.status(200).send({ message: "User updated successfully" });
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).send({
            message: "Some error occurred while trying to update the user.",
        });
    }
}

async function remove(req, res) {
    try {
        const user = await User.findById(req.params.id);
        if (user === null) {
            res.status(404).send({ message: "User does not exists!" });
        } else {
            await User.deleteOne({ _id: req.params.id });
            res.status(200).send({ message: "User removed successfully" });
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).send({
            message: "Some error occurred while trying to delete the user.",
        });
    }
}

module.exports = {
    getAll,
    get,
    create,
    update,
    remove,
};

// if(bcrypt.compareSync('somePassword', hash)) {
//     // Passwords match
//    } else {
//     // Passwords don't match
//    }
