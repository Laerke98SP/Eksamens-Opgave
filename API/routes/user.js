//importing libraries
//possible in this way, since i use the newest form of node.js
import express from "express";
import { getUser, postUser, getIdUser, getEmailUser, deleteUser, patchUser } from '../controllers/user.js';

const router = express.Router();

router.get("/", getUser);
router.post("/", postUser);
// router.get("/:id", getIdUser);
router.get("/:email", getEmailUser);
router.delete("/:id", deleteUser);
router.patch("/:id", patchUser);

export default router;
