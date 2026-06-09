import { Router } from "express";
import { getContent, postContent } from "../controllers/contentController.js";
import { heroUpload } from "../middleware/upload.js";

const router = Router();

router.get("/", getContent);
router.post("/", heroUpload, postContent);

export default router;
