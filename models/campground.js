var mongoose = require("mongoose");

var campgroundSchema = new mongoose.Schema({
    name: String,
    dateCreated: {type: Date, default: Date.now},
    location: String,
    description: String,
    contact: String,
    imageAlbum: [{
        type: String
    }],
    image: String,
    lat: Number,
    lng: Number,
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ],
    author:{
        id: {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
        username: String
    }
});

var Campground = mongoose.model("Campground", campgroundSchema);

module.exports = Campground;