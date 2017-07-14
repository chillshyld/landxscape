var mongoose =require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");
var UserSchema = new mongoose.Schema({
    image: String,
    name: String,
    description: String,
    dob: Date,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Campground"
        }
    ],
    username: String,
    password: String
});


UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User",UserSchema);