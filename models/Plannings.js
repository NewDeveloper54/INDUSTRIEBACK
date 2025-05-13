const mongoose = require ("mongoose");

const planningSchema = new mongoose.Schema({
title: {type : String , required : true},
date: {type: Date , required: true},
time: {type :String, required: true},
description: {type:String , required: true}
});


const Planning = mongoose.model("Planning", planningSchema);

module.exports = Planning;