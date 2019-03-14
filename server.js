var express = require("express");
var bodyParser = require('body-parser');
var path = require('path');
var mongo = require('mongoose');

var app = express();

var db = mongo.connect("mongodb://localhost:27017/alphadb", function (err, response) {
    if (err)
        console.log("Error in connecting to alphadb : error is : " + err);
    console.log("Successfully connected to " + db + " : response : " + response);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS,PUT,PATCH,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});

var Schema = mongo.Schema;

var userSchema = new Schema({
    username:{type: String, required: true, unique: true}
})

var userModel = mongo.model('flatusers', userSchema, 'flatusers')

app.post('/saveuser', (req,res) =>{
   console.log("saveuser API : req: "+req.body);
   var flatUser = new userModel(req.body)
   flatUser.save((err, response) => {
       if(err)
       console.log("Error in saving user : err : "+err)
       res.send({"successText":"User Added successfully!"});
   })
})

app.get('/allflatmates', (req, res) => {
   userModel.find({}, (err, users) => {
       if(err)
       console.log(err)
       res.send(JSON.stringify(users));
   })
})

var itemSchema = new Schema({
    addedBy:{type:String, required: true},
    items:{type: String, required: true, unique: true},
    price:{type: Number},
    paidFor:{type: Number, required: true}
})

var itemModel = mongo.model('flatitems', itemSchema, 'flatitems');

app.post('/saveitem', (req, res) => {
    var item = new itemModel(req.body);
    item.save((err, response) => {
        if(err)
        console.log("err : "+err)
        console.log("Item added successfully!")
        res.send({successMsg:"Item added successfully"});
    })
})

app.get('/allflatitems', (req, res) => {
    itemModel.find({}, (err, items) => {
        res.send(JSON.stringify(items))
    })
})

app.listen(3000, () => {
    console.log("App server started on port 3000");
})