import express from "express";
import { getBook } from "../controller/book.controller.js";

const router = express.Router();

// request
router.get("/",getBook);

export default router