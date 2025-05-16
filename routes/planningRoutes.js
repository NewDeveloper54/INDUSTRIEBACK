const express = require ("express");
const Planning = require("../models/Plannings");

const router = express.Router();


router.get("/", async(req, res) =>{
    try{
const plannings = await Planning.find();
res.json(plannings);
    }catch(error){
        res.status(500).json({message : error.message})
    }
})


//ajout d'un plannning 

router.post("/", async(req, res)=>{
    const {title, date, time,description} = req.body;
    const newPlanning = new Planning({title, date, time, description}) ;
    try{
    await newPlanning.save();
    res.status(200).json(newPlanning);
    }catch(error){
        res.status(400).json({message : error.message})

    }
});


router.delete("/:id" , async(req, res)=> {

    try{
            const planning = await Planning.findByIdAndDelete(req.params.id);

   if (!planning){
    return res.status(404).json({message : "planning nn trouvée"});
   }

    }catch(error){
res.status(500).json({message : error.message});
    }
});


//modifer un planning

router.put("/:id", async (req, res)=>{
    try{
        const planningUpdated = await Planning.findByIdAndUpdate(req.params.id, req.body, {new : true});
        if (!planningUpdated){
            return res.status(404).json({message : " planning non trouvé"});
        }

        res.status(200).json(planningUpdated);

    }catch(error){
        res.status(500).json ({message : error.message});
    }
});






module.exports = router;






