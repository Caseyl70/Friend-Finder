// -----------Dependancies-------
var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
// -----------Require Routes--------
//Route to the html
require("./app/routing/htmlRoutes")(app);
//Route to the api 
require("./app/routing/apiRoutes")(app);


// -----------App.Listening--------

app.listen(PORT, function(){
    console.log("Listening On PORT: " + PORT);
});
