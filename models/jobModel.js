const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    title : {type : String, required: true},
    Country : {type : String, required: true},
    minSalary : {type : Number, required: true},
    maxSalary : {type : Number, required: true},
    Description : {type : String, required: true},
    company : {type : String, required: true},
}, {
    timestamps : true,
})

const jobModel = new mongoose.model('jobs' , jobSchema)
module.exports = jobModel