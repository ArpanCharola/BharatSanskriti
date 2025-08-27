import mongoose from "mongoose";

const heritageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true },
    city: { type: String, trim: true },
    stateOrUT: { type: String, trim: true },   // state or union territory
    builtIn: { type: String, trim: true },     // "1632" or "13th century"
    description: { type: String, default: "" },// use \n to make 4 lines
    media: { type: String, default: "" },      // e.g. /heritages/taj-mahal.jpg
    learnMoreLink: { type: String, default: "" }
  },
  { timestamps: true }
);

export default mongoose.model("Heritage", heritageSchema);
// This model defines the structure of a heritage document in MongoDB