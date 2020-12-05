import express from "express";
import { getUser, postUser, getIdUser, deleteUser, patchUser } from '../controllers/user.js';

const router = express.Router();

router.get("/user/page", getUser);

export default router;
