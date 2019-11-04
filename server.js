// -----------Dependancies-------
var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;


// -----------Require Routes--------
//Route to the html
require("./routing/htmlRoutes");
//Route to the api 
require("./routing/apiRoutes");


// -----------App.Listening--------

app.listen(PORT, function(){
    console.log("Listening On PORT: " + PORT);
});
