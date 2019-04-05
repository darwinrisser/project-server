const express = require("express");
const router = express.Router();
const {list,show,create,update,remove} =require("../controllers/UserController");

router.get("/api/users", list);
module.exports =  router;