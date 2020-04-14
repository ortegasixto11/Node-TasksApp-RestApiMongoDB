module.exports = (app) => {
    const tasks = require("../controllers/tasks.js");
    const users = require("../controllers/users.js");

    // Tasks
    app.get("/api/tasks", tasks.getAll);
    app.get("/api/tasks/:id", tasks.get);
    app.post("/api/tasks", tasks.create);
    app.put("/api/tasks/:id", tasks.update);
    app.delete("/api/tasks/:id", tasks.remove);

    // Users
    app.get("/api/users", users.getAll);
    app.get("/api/users/:id", users.get);
    app.post("/api/users", users.create);
    app.put("/api/users/:id", users.update);
    app.delete("/api/users/:id", users.remove);
    app.post("/api/login", users.login);
};
