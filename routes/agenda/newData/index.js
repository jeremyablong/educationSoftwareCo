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

 // id: 5,
 // start: '2017-12-19 15:30:00',
 // end: '2017-12-20 23:30:00',
 // resourceId: 'r2',
 // title: 'R2 has recurring tasks every week on Tuesday, Friday',
 // rrule: 'FREQ=WEEKLY;DTSTART=20171219T013000Z;BYDAY=TU,FR',
 // bgColor: '#f759ab'

