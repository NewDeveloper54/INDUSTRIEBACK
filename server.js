const express = require("express");
const mongoose = require("mongoose");
const cors = require ("cors");
require("dotenv").config();


const app = express();


const port =process.env.PORT || 5000;


let mangoConnect = async()=>{
  try{
    await  mongoose.connect(process.env.MONGODB_URI);
      console.log("MongoDB connected");

  }catch (error){
console.log("MongoDB connection error:", error)
  }
}

mangoConnect();


const tacheRoutes= require("./routes/tacheRoutes");
const planningRoutes= require("./routes/planningRoutes");

app.use(cors());
app.use(express.json());


app.use("/api/taches", tacheRoutes);
app.use("/api/plannings", planningRoutes);  



app.listen(port , ()=> {
    console.log(`Server running on port ${port}`);
})