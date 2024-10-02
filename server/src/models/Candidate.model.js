import mongoose, { Schema } from "mongoose";

const candidateSchema = new Schema({
  "name": {
    "first_name": { type: String, required: true },
    "last_name": { type: String, required: true }
  },
  "birth_date": { type: Date, required: true },
  "contact": {
    "email": { type: String, required: true },
    "phone": { type: String, required: true }
  },
  "skills": [ String ],
  "education": {
    "degree": String,
    "institution": String,
    "graduation_year": Number
  },
  "createdAt": { type: Date, default: Date.now },
  "updatedAt": { type: Date, default: Date.now }
})

const Candidate = mongoose.model("candidates", candidateSchema);

export default Candidate;