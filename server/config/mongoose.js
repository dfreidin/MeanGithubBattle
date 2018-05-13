const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/github_battle");
require("../models/user");