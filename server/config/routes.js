const users = require("../controllers/users");
module.exports = function(app) {
    app.get("/users", users.index);
    app.post("/users/:username", users.save);
}