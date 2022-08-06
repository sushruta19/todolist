const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

var newItem=""

app.get("/", function(req, res) {
  var today = new Date();
  var options = {
    weekday:"long",
    day:"numeric",
    month:"long"
  };
  var day = today.toLocaleDateString("en-US", options);

  res.render('list', {
    dayEjs:day,
    newListItem:newItem
  });

});

app.post('/', function(req, res) {
  newItem = req.body.newItem;
  res.redirect("/");
});



app.listen(process.env.PORT || 3000, function(req, res) {
  console.log("The app is running at port 3000");
});