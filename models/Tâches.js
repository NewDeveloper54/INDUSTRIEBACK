const mongoose = require("mongoose");

const tacheSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  description: { type: String, required: true }
});

const Tache = mongoose.model("Tache", tacheSchema);

module.exports = Tache;
