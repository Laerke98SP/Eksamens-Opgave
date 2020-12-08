
import express from "express";
import { getEmailPotentials } from '../controllers/potentials.js';

const router = express.Router();

// router.get("/", getUser);
// router.post("/", postUser);
// router.get("/:id", getIdUser);
router.get("/:email", getEmailPotentials);
// router.delete("/:email", deleteUser);
// router.patch("/:email", patchUser);

export default router;