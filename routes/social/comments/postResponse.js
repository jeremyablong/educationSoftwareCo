const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const cors = require("cors");
const app = express();
const config = require("config");
const mongo = require("mongodb");
const moment = require("moment");


mongo.connect(config.get("mongoURI"),  { useNewUrlParser: true }, { useUnifiedTopology: true }, cors(), (err, db) => {
	router.post("/", (req, res) => {

		console.log("newData/index.js :", req.body);

		const collection = db.collection("faculties");

		const { uuid, title, content, subTitle } = req.body;

		collection.findOneAndUpdate({ "newsfeed.uuid": req.body.uuid }, { $push: { "newsfeed.$.comments": { date: moment().format('MMMM Do YYYY, h:mm:ss a'), comment: req.body.comment, fullName: req.body.fullName, location: req.body.location }}}), function(err, result) { 
	        console.log(result);
	        res.send(result);
	    };  
	});
});

module.exports = router;
