import mongoose from "mongoose";

const traditionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  origin: { type: String, required: true },
  type: { type: String, required: true },
  culturalContext: { type: String, required: true },
  description: { type: String, required: true },
  media: { type: String },
  learnMoreLink: { type: String }
});

// ✅ Use singular name for model
const Tradition = mongoose.model("Tradition", traditionSchema);

export default Tradition;
