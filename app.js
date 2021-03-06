var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    flash       = require("connect-flash"),
    passport    = require("passport"),
    LocalStrategy   = require("passport-local"),
    methodOverride = require("method-override"),
    Campground  = require("./models/campground"),
    Comment     = require("./models/comment"),
    User        = require("./models/user"),
    seedDB      = require("./seeds");
    
//requiring routes    
var commentRoutes = require("./routes/comments"),
    campgroundRoutes = require("./routes/campground"),
    indexRoutes       = require("./routes/index");
    
mongoose.Promise = global.Promise;
console.log("Database URL: " + process.env.DATABASEURL);
//export DATABASEURL="mongodb://localhost/LandXscape_v1"
mongoose.connect(process.env.DATABASEURL);
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());
// seedDB(); //seed the database

//Passport configuration
app.use(require("express-session")({
    secret: "Once agiang Tusety wins cutest dog!",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
    
app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   res.locals.error = req.flash("error");
   res.locals.success = req.flash("success");
   
   next();
});

app.use(indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments",commentRoutes);

app.get("/allCampgrounds",function(req,res){
    console.log(req.query.location);
    Campground.find({location: {$regex: req.query.location}},function(err,foundCampgrounds){
        if (err){
            console.log(err);
        }
        console.log(foundCampgrounds);
        res.json(foundCampgrounds);
    })
});


app.listen(process.env.PORT,process.env.IP,function(){
    console.log("YelpCamp has started");
});