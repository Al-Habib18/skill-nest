/** @format */

import express from "express";
import multer from "multer";
import {
    createCourse,
    getAllCourses,
    getSingleCourse,
    updateCourse,
    deleteCourse,
    getUploadVideoUrl,
} from "../controllers/courseController";
import { requireAuth } from "@clerk/express";
const upload = multer({ storage: multer.memoryStorage() });

const router = express.Router();

router.post("/", requireAuth(), createCourse);
router.get("/", getAllCourses);

router.get("/:courseId", getSingleCourse);
router.put("/:courseId", requireAuth(), upload.single("image"), updateCourse);
router.delete("/:courseId", requireAuth(), deleteCourse);

router.post(
    "/:courseId/sections/:sectionId/chapters/:chapterId/get-upload-url",
    requireAuth(),
    getUploadVideoUrl
);

export default router;
