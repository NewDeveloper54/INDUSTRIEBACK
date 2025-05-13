const express = require("express");
const Tache = require("../models/Tâches");

const router = express.Router();

// GET : Récupérer toutes les tâches
router.get("/", async (req, res) => {
  try {
    const taches = await Tache.find();
    res.json(taches);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST : Ajouter une tâche
router.post("/", async (req, res) => {
  const { nom, description } = req.body;
  const nouvelleTache = new Tache({ nom, description });

  try {
    await nouvelleTache.save();
    res.status(201).json(nouvelleTache);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});





router.delete("/:id", async(req, res) =>{
    try{
        const tache= await Tache.findByIdAndDelete(req.params.id);
        if(!tache){
                  return res.status(404).json({ message: "Tâche non trouvée" });
        }

    }catch(error){
        res.status(500).json({message: err.message});
    }
});



router.put("/:id", async(req, res)=>{
try{
    const tache = await Tache.findByIdAndUpdate(req.params.id,
                                                req.body,
                                                {new : true}); 
    if(!tache){
        return res.status(404).json({message: "taceh non trouvée"});
    }

    res.json(tache)

}catch(error){
    res.status(500).json({message: error.message});
}
});




module.exports = router;
