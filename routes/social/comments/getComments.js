const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const cors = require("cors");
const app = express();
const config = require("config");
const mongo = require("mongodb");


mongo.connect(config.get("mongoURI"),  { useNewUrlParser: true }, { useUnifiedTopology: true }, cors(), (err, db) => {
	router.post("/", (req, res) => {

		console.log("timelineGather.js :", req.body);

		const collection = db.collection("faculties");

		db.collection("faculties", (err, collection) => {
			collection.find({ email: req.body.email }, { "newsfeed": true }).toArray((err, result) => {
				console.log("/get/blog/subcomments :", result);
				res.send(result)
			});
		});   
	});
});

module.exports = router;
