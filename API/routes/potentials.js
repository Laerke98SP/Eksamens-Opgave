
import express from "express";
import { getEmailPotentials } from '../controllers/potentials.js';

const router = express.Router();

router.get("/:email", getEmailPotentials);

export default router;