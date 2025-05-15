const mongoose =require("mongoose");


const AlerteScehma = new mongoose.Schema({
    message : {type:String , required:true},
    niveau : {type :String, enum: ["info", "urgent"] , required:true},
    type : {type:String , default : "general"},
    date : {type : Date, required:true}

});



const Alerte = mongoose.model("Alerte", AlerteScehma);

module.exports= Alerte;