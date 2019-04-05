const express = require("express");
const router = express.Router();
const {list,show,create,update,remove} =require("../controllers/ProjectController");


router.get("/api/projects", list);
module.exports =  router;