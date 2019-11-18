const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const cors = require("cors");
const app = express();
const config = require("config");
const mongo = require("mongodb");


mongo.connect(config.get("mongoURI"),  { useNewUrlParser: true }, { useUnifiedTopology: true }, cors(), (err, db) => {
	router.post("/", (req, res) => {

		console.log("newData/index.js :", req.body);

		const collection = db.collection("faculties");

		const { email } = req.body;

		db.collection("faculties", (err, collection) => {
			collection.find({
				email: email
			}, { "studentList": true }).toArray((err, result) => {
				console.log(result);
				res.send(result)
			});
		});  
		// collection.findOne({ email: email }, { "agenda.created": true }), function(err, result) { 
	 //        console.log(result);
	 //        res.send(result);
	 //    };  
	});
});

module.exports = router;
