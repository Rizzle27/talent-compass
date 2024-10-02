// * Model Import *
import Candidate from "../models/Candidate.model.js";

const CandidateController = {
  getCandidates: async (req, res) => {
    try {
      const candidates = await Candidate.find({});
      res.status(200).json(candidates);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default CandidateController;