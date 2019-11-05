var friends = require("../data/friends");
module.exports = function(app){
app.get("/friends", function(req, res){
res.json(friends);
});
app.post("/api/friends", function(req, res){
    var user = req.body;
    // console.log(user);
    var bestFriend = {
        name: "", 
        photo: "", 
        total: 1000,
    };
    friends.forEach(friend => {
        var friendScores = friend.scores;
        var userScores = user.scores;
        var total = 0;
        for (let i = 0; i < userScores.length; i++){
            var difference = Math.abs(parseInt(friendScores[i])- parseInt(userScores[i]));
            total += difference;
        };
        if (total < bestFriend.total){
            bestFriend.name = friend.name;
            bestFriend.photo = friend.photo;
            bestFriend.total = total;
        }
    });
    friends.push(user);
    res.json(bestFriend);
})

}