module.exports = (app) => {
    const tasks = require("../controllers/tasks.js");

    app.get("/api/tasks", tasks.getAll);
    app.get("/api/tasks/:id", tasks.get);
    app.post("/api/tasks", tasks.create);
};
