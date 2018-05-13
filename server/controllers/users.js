const mongoose = require("mongoose");
const User = mongoose.model("User");
function buildQueryHandler(res) {
    return function(err, data) {
        if(err) { 
            res.json({
                message: "Error",
                error: err
            });
        }
        else {
            res.json({
                message: "Success",
                data: data
            });
        }
    }
}
module.exports = {
    index: function(req, res) {
        User.find({}, null, {sort: {score: -1}}, buildQueryHandler(res));
    },
    save: function(req, res) {
        User.deleteMany({username: req.params.username}, function(err) {
            User.create(req.body, buildQueryHandler(res));
        });
    }
}