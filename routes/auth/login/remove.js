const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const cors = require("cors");
const app = express();
const config = require("config");
const mongo = require("mongodb");


mongo.connect(config.get("mongoURI"),  { useNewUrlParser: true }, { useUnifiedTopology: true }, cors(), (err, db) => {
	router.post("/", (req, res) => {

		const collection = db.collection("faculties");

		const { code } = req.body;

		collection.findOneAndUpdate({ "code": code }, { $pull: { "code": code }}, function(err, result) { 
	        console.log(result);
	        res.send(result);
	    });  
	});
});

module.exports = router;