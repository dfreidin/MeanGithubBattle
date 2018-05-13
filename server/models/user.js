const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
    username: {type: String, required: true, unique: true},
    img_url: {type: String},
    score: {type: Number, required: true}
}, {timestamps: true});
mongoose.model("User", UserSchema);