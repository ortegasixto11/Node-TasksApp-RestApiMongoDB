const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema({
    name: String,
    is_active: Boolean,
    created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Task", TaskSchema);
