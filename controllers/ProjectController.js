const Project = require("../models/ProjectModel");

exports.list = function list(request, response) {
    Project.find().exec().then((projects)=>{
        return response.json(projects);
    })
}