const express = require ("express");
const Alerte = require ("../models/Alertes");

const router = express.Router();


// recuperer les données des alertes
router.get("/", async(req, res) =>{
try{
    const Alertes = await Alerte.find();
    res.json(Alertes);

}catch(error){
    res.status(500).json({message : error.message});
}
})



// ajouter une alerte 


router.post("/", async(req, res)=>{
 
    const {message, niveau, type, date}= req.body;
    const newAlert = new Alerte({message, niveau, type, date});
    try{
await newAlert.save();
res.status(200).json(newAlert);


    }catch(error){
        res.status(400).json({message : error.message})
    }
});



// supprimer une alerte 

router.delete("/:id", async(req, res) =>{
    try{
const alert = await Alerte.findByIdAndDelete(req.params.id);
if(!alert){
    return res.status(404).json({message : "alerte non trouvée"});
}
}catch(error){
res.status(500).json({message : error.message});
    }
})


module.exports = router;
