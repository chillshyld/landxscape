var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");


var data = [
    {
        name:"Salmon Creek", 
        image: "https://farm1.staticflickr.com/110/316612922_38fb0698f5.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at nulla mattis, ultrices turpis eget, elementum purus. Maecenas vitae volutpat lectus. Ut sollicitudin pellentesque nunc, quis sagittis lacus elementum nec. Etiam sit amet massa id sapien facilisis commodo at quis nisl. Suspendisse nulla erat, ultrices at urna in, lobortis ullamcorper eros. Vivamus sit amet efficitur tellus, in hendrerit tortor. Maecenas quis ullamcorper orci. Maecenas elementum arcu et dolor cursus placerat. Nunc et enim mattis, molestie nulla non, pellentesque dolor. Sed maximus dignissim dapibus. Sed vitae augue ut ligula fermentum viverra quis in sapien. Nulla sollicitudin ligula lectus, sit amet elementum mauris dictum nec. Donec eu pulvinar odio."
        
    },
    {
        name:"Grand Hill", 
        image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at nulla mattis, ultrices turpis eget, elementum purus. Maecenas vitae volutpat lectus. Ut sollicitudin pellentesque nunc, quis sagittis lacus elementum nec. Etiam sit amet massa id sapien facilisis commodo at quis nisl. Suspendisse nulla erat, ultrices at urna in, lobortis ullamcorper eros. Vivamus sit amet efficitur tellus, in hendrerit tortor. Maecenas quis ullamcorper orci. Maecenas elementum arcu et dolor cursus placerat. Nunc et enim mattis, molestie nulla non, pellentesque dolor. Sed maximus dignissim dapibus. Sed vitae augue ut ligula fermentum viverra quis in sapien. Nulla sollicitudin ligula lectus, sit amet elementum mauris dictum nec. Donec eu pulvinar odio."
    },
    {
        name:"Mountain Goat's Rest", 
        image: "https://farm7.staticflickr.com/6054/6335614644_f4cbf11d08.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at nulla mattis, ultrices turpis eget, elementum purus. Maecenas vitae volutpat lectus. Ut sollicitudin pellentesque nunc, quis sagittis lacus elementum nec. Etiam sit amet massa id sapien facilisis commodo at quis nisl. Suspendisse nulla erat, ultrices at urna in, lobortis ullamcorper eros. Vivamus sit amet efficitur tellus, in hendrerit tortor. Maecenas quis ullamcorper orci. Maecenas elementum arcu et dolor cursus placerat. Nunc et enim mattis, molestie nulla non, pellentesque dolor. Sed maximus dignissim dapibus. Sed vitae augue ut ligula fermentum viverra quis in sapien. Nulla sollicitudin ligula lectus, sit amet elementum mauris dictum nec. Donec eu pulvinar odio."
    }
]

function seedDB(){
    //Remove all campgrounds
    Campground.remove({},function(err){
        if (err){
            console.log(err);
        }
        console.log("Removed campgrounds!");
        //Add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed,function(err,campground){
              if (err){
                  console.log(err);
              }else{
                  console.log("Added campground"); 
                  //Create a comment
                  Comment.create(
                      {
                          text: "This place is great, but I wish there was internet",
                          author: "Homer"
                          
                      },function(err,comment){
                          if (err){
                              console.log(err);
                          }else{
                              campground.comments.push(comment);
                              campground.save();
                              console.log("Created new comments");

                              
                          }
                          
                      });
              }
               
               
          });
        });
    });
    
    
    
    
    //Add a few comments
    
}

module.exports = seedDB;


