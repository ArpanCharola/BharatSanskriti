import mongoose from "mongoose";

const festivalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  origin: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String, required: true },
  ritualContext: { type: String, required: true },
  date: { type: String, required: true },
  timeOfYear: { type: String, required: true },
  media: { type: String },
  learnMoreLink: { type: String }
});

// ✅ Use singular name for model
const Festival = mongoose.model("Festival", festivalSchema);

export default Festival;