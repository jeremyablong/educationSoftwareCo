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

		collection.findOneAndUpdate({ email: req.body.email }, { $push: { "studentList": { id: req.body.id , title: req.body.title }}}), function(err, result) { 
	        console.log(result);
	        res.send(result);
	    };  
	});
});

module.exports = router;

