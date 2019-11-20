const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const cors = require("cors");
const app = express();
const config = require("config");
const mongo = require("mongodb");
const fs = require("fs");
const path = require("path");
const Grid = require("gridfs-stream");
const gfs = Grid(config.get("mongoURI"), mongo);

mongo.connect(config.get("mongoURI"),  { useNewUrlParser: true }, { useUnifiedTopology: true }, cors(), (err, db) => {

	const collection = db.collection("fs.files");

	router.get("/", function(req, res){ 
		collection.find({ filename: 'dotttttttttttt.png' }).toArray(function (err, files) {
			console.log("files :", files)
		    if(files.length===0){
		        return res.status(400).send({
		            message: 'File not found'
		        });
		    }

		    res.writeHead(200, {'Content-Type': files[0].contentType});

		    var readstream = db.createReadStream({
		          filename: files[0].filename
		    });

		    readstream.on('data', function(chunk) {
		    	console.log("chunnk", chunk)
		        res.write(chunk);
		    });

		    readstream.on('end', function() {
		    	console.log("end")
		        res.end();        
		    });

		    readstream.on('error', function (err) {
		      console.log('An error occurred!', err);
		      throw err;
		    });
		  });
    });

});

module.exports = router;