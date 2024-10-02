import express from "express";
// * Controllers *
import CandidateController from "../controllers/Candidates.controller.js";

const router = express.Router();

router.get("/candidates", CandidateController.getCandidates);

export default router;