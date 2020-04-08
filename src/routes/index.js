module.exports = (app) => {
    const tasks = require("../controllers/tasks.js");

    app.get("/api/tasks", tasks.list);
    app.post("/api/tasks", tasks.create);
};
