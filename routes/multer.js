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



    var new_img = new Image;

    console.log("req.file :", req.file)

    // new_img.img.data = fs.readFileSync(req.file.path, "utf-8")
    // new_img.img.contentType = req.file.contentType;
    // new_img.save();
    // res.json({ message: 'New image added to the db!' });


    // new_img.save((err, data) => {
    //     if (err) {
    //         console.log(err);
    //     }
    //     console.log("data:", data);
    //     res.json({ message: 'New image added to the db!' });
    // })



    // console.log("Request ---", req.body);
    // console.log("Request file ---", req.file);
    // const { fullName, email, address, city, state, schoolID, studentPhoneNumber, mothersName, fathersName, fathersPhoneNumber, mothersPhoneNumber, primaryContact, gender, race } = req.body;
    const newStudent = new SignUpStudent();

    newStudent.fullName = req.body.fullName;
    newStudent.email = req.body.email;
    newStudent.address = req.body.address;
    newStudent.city = req.body.city;
    newStudent.state = req.body.state;
    newStudent.schoolID = req.body.schoolID;
    newStudent.studentPhoneNumber = req.body.studentPhoneNumber;
    newStudent.mothersName = req.body.mothersName;
    newStudent.fathersName = req.body.fathersName;
    newStudent.fathersPhoneNumber = req.body.fathersPhoneNumber;
    newStudent.mothersPhoneNumber = req.body.mothersPhoneNumber;
    newStudent.primaryContact = req.body.primaryContact;
    newStudent.gender = req.body.gender;
    newStudent.race = req.body.race;
    newStudent.fieldname = req.file.filename,
    newStudent.originalname = req.file.originalname,
    newStudent.encoding = req.file.encoding,
    newStudent.mimetype = req.file.mimetype,
    newStudent.id = req.file.id,
    newStudent.filename = req.file.filename,
    newStudent.metadata = req.file.metadata,
    newStudent.bucketName = req.file.bucketName,
    newStudent.chunkSize = req.file.chunkSize,
    newStudent.size = req.file.size,
    newStudent.md5 = req.file.md5,
    newStudent.uploadDate = req.file.uploadDate,
    newStudent.contentType = req.file.contentType,
    newStudent.location = req.file.location
  
    newStudent.save((err, doc) => {
      if (err) {
        console.log(err);
      }
      console.log(doc);
      res.send(doc);
    });
  });
});

module.exports = router;



