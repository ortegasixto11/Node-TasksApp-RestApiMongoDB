const User = require("../models/user.js");
const bcrypt = require("bcrypt");
const response = require("../utils/response.js");

async function getAll(req, res) {
    try {
        const result = await User.find();
        response.success(result, "", res);
    } catch (err) {
        response.logError("users.getAll", err.message);
        response.error(500, "Some error occurred while trying to get the users!", res);
    }
}

async function get(req, res) {
    try {
        const result = await User.findById(req.params.id);
        if (result === null) {
            response.error(404, "User does not exists!", res);
        } else {
            response.success(result, "", res);
        }
    } catch (err) {
        response.logError("users.get", err.message);
        response.error(500, "Some error occurred while trying to get the user!", res);
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
        response.success([], "User created successfully", res);
    } catch (err) {
        response.logError("users.create", err.message);
        response.error(500, "Some error occurred while trying to create the user!", res);
    }
}

async function update(req, res) {
    try {
        const user = await User.findById(req.params.id);
        if (user === null) {
            response.error(404, "User does not exists!", res);
        } else {
            if (req.body.first_name != null) user.first_name = req.body.first_name;
            if (req.body.last_name != null) user.last_name = req.body.last_name;
            if (req.body.is_active != null) user.is_active = req.body.is_active;
            await User.updateOne({ _id: req.params.id }, user);
            response.success([], "User updated successfully", res);
        }
    } catch (err) {
        response.logError("users.update", err.message);
        response.error(500, "Some error occurred while trying to update the user!", res);
    }
}

async function remove(req, res) {
    try {
        const user = await User.findById(req.params.id);
        if (user === null) {
            response.error(404, "User does not exists!", res);
        } else {
            await User.deleteOne({ _id: req.params.id });
            response.success([], "User removed successfully", res);
        }
    } catch (err) {
        response.logError("users.remove", err.message);
        response.error(500, "Some error occurred while trying to delete the user!", res);
    }
}

async function login(req, res) {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (user == null) {
            response.error(404, "Username or password invalid!", res);
        } else {
            if (bcrypt.compareSync(req.body.password, user.password)) {
                response.success([], "Login Ok", res);
            } else {
                response.error(404, "Username or password invalid!", res);
            }
        }
    } catch (err) {
        response.logError("users.login", err.message);
        response.error(500, "Some error occurred while trying login the user!", res);
    }
}

module.exports = {
    getAll,
    get,
    create,
    update,
    remove,
    login,
};
