const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const cors = require("cors");
const app = express();
const config = require("config");
const mongo = require("mongodb");
const Busboy = require('busboy');
const multer = require("multer");
const crypto = require('crypto');
const path = require("path");
const uuidv4 = require("uuid/v4");
const SignUpStudent = require("../models/registerStudent/registerStudent.js");
const Grid = require("gridfs-stream");
const GridFsStorage = require('multer-gridfs-storage');
Grid.mongo = mongoose.mongo;
const Image = require("../models/photos.js");
const fs = require('fs');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');
const moment = require('moment');

aws.config.update({
    secretAccessKey: 'MNZyWkxpfL8ZJScSDr0/prKNnuOxpWAYPvKk0s2k',
    accessKeyId: 'AKIAJ4DUVBXJGVN4VFPA',
    region: 'us-east-1'
});


s3 = new aws.S3();
// const gfs = Grid(config.get("mongoURI"), mongo);
// const conn = mongoose.createConnection(config.get("mongoURI"), { useNewUrlParser: true });

// var gfs = Grid(conn.db, mongoose.mongo);
// console.log("conn.db :", conn.db) 

// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         cb(null, './client/src/public/uploads/');
//      },
//     filename: function (req, file, cb) {
//         cb(null , file.originalname);
//     }
// });

var gfs = Grid("test");

const storage = new GridFsStorage({
  url: config.get("mongoURI"),
  gfs: gfs,
  file: (req, file) => {
    return {
        filename: file.originalname
    }
  }
});
var upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'pictures-schooling-app',
        key: function (req, file, cb) {
            console.log(file);
            cb(null, file.originalname); //use Date.now() for unique file keys
        }
    })
});


mongo.connect(config.get("mongoURI"),  { useNewUrlParser: true }, { useUnifiedTopology: true }, cors(), (err, db) => {
  router.post("/", upload.single("image"), (req, res) => {

    console.log("req.file :", req.file)

    const collection = db.collection("faculties");

    const { uuid, title, content, subTitle } = req.body;

    collection.findOneAndUpdate({ email: req.body.email }, { $push: { "newsfeed": { uuid: uuid , title: title, content: content, subTitle: subTitle, comments: [], location: req.file.location, date: moment().format('MMMM Do YYYY, h:mm:ss a'), fullName: req.body.name }}}), function(err, result) { 

        // const newStudent = new SignUpStudent();

        // newStudent.title = req.body.title,
        // newStudent.subTitle = req.body.subTitle,
        // newStudent.content = req.body.content,
        // newStudent.fieldname = req.file.filename,
        // newStudent.originalname = req.file.originalname,
        // newStudent.encoding = req.file.encoding,
        // newStudent.mimetype = req.file.mimetype,
        // newStudent.id = req.file.id,
        // newStudent.filename = req.file.filename,
        // newStudent.metadata = req.file.metadata,
        // newStudent.bucketName = req.file.bucketName,
        // newStudent.chunkSize = req.file.chunkSize,
        // newStudent.size = req.file.size,
        // newStudent.md5 = req.file.md5,
        // newStudent.uploadDate = req.file.uploadDate,
        // newStudent.contentType = req.file.contentType,
        // newStudent.location = req.file.location
      
        // newStudent.save((err, doc) => {
        //   if (err) {
        //     console.log(err);
        //   }
        //   console.log(doc);
        //   // res.send(doc);
        // });
        
        console.log(result);
        res.send(result);
    }; 
  });
});

module.exports = router;



