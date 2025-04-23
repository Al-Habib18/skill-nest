/** @format */

import { Request, Response } from "express";
import Course from "../models/courseModel";
import { v4 as uuidv4 } from "uuid";
import { getAuth } from "@clerk/express";

import AWS from "aws-sdk";
const s3 = new AWS.S3();

export const createCourse = async (req: Request, res: Response) => {
    try {
        const { teacherId, teacherName } = req.body;
        if (!teacherId || !teacherName) {
            res.status(400).json({
                message: "Teacher ID and Name are required",
            });
        }

        const newCourse = await Course.create({
            courseId: uuidv4(),
            teacherId,
            teacherName,
            title: "Untitled Course",
            description: "No description",
            category: "Uncategorized",
            image: "",
            price: 0,
            level: "Beginner",
            status: "Draft",
            sections: [
                {
                    sectionId: uuidv4(),
                    sectionTitle: "Getting Started",
                    sectionDescription: "Section Description",
                    chapters: [
                        {
                            chapterId: uuidv4(),
                            type: "Video",
                            title: "Chapter Title",
                            content: "",
                            video: "",
                            comments: [
                                {
                                    commentId: uuidv4(),
                                    userId: uuidv4(),
                                    text: "Great introduction!",
                                    timestamp: new Date().toISOString(),
                                },
                            ],
                        },
                    ],
                },
            ],
            enrollments: [],
        });
        await newCourse.save();

        res.status(201).json({
            message: "Course created successfully",
            data: newCourse,
        });
    } catch (error) {
        res.status(500).json({ message: "Error creating course", error });
    }
};

export const updateCourse = async (req: Request, res: Response) => {
    const { courseId } = req.params;
    const updateData = { ...req.body };
    const { userId } = getAuth(req);
    try {
        const course = await Course.get(courseId);
        if (!course) {
            res.status(404).json({ message: "Course not found" });
            return;
        }

        if (course.teacherId !== userId) {
            res.status(403).json({ message: "Unauthorized" });
            return;
        }

        if (updateData) {
            const price = parseInt(updateData.price);
            if (isNaN(price)) {
                res.status(400).json({
                    message: "Invalid price",
                    error: "Price must be a valid number",
                });
                return;
            }
            updateData.price = price * 100; // Convert to cents
        }

        if (updateData.sections) {
            const sectionsData =
                typeof updateData.sections === "string"
                    ? JSON.parse(updateData.sections)
                    : updateData.sections;
            updateData.sections = sectionsData.map((section: any) => ({
                ...section,
                sectionId: section.sectionId || uuidv4(),
                chapters: section.chapters.map((chapter: any) => ({
                    ...chapter,
                    chapterId: chapter.chapterId || uuidv4(),
                    // video: chapter.video,
                })),
            }));
        }

        Object.assign(course, updateData);
        await course.save();

        res.json({ message: "Course updated successfully", data: course });
    } catch (error) {
        res.status(500).json({ message: "Error updating course", error });
    }
};

export const getAllCourses = async (req: Request, res: Response) => {
    const { category } = req.query;
    try {
        //TODO: validate data
        const courses =
            category && category !== "all"
                ? await Course.scan({ category }).eq(category).exec()
                : await Course.scan().exec();
        res.status(200).json({
            message: "Courses retrive successfully",
            data: courses,
        });
    } catch (error) {
        res.status(500).json({ message: "Error retriving courses", error });
    }
};

export const getSingleCourse = async (req: Request, res: Response) => {
    const courseId = req.params;
    console.log("courseId : ", courseId);
    try {
        if (!courseId) {
            res.status(404).json({ message: "Course not found" });
        }
        const course = await Course.get(courseId);
        if (!course) {
            res.status(404).json({ message: "Course not found" });
        }

        console.log("data: get single course :  ", course);
        res.status(200).json({
            message: "Course retrieved successfully",
            data: course,
        });
    } catch (error) {
        res.status(500).json({ message: "Error retriving course", error });
    }
};

export const deleteCourse = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { courseId } = req.params;
    const { userId } = getAuth(req);

    try {
        const course = await Course.get(courseId);
        if (!course) {
            res.status(404).json({ message: "Course not found" });
            return;
        }

        if (course.teacherId !== userId) {
            res.status(403).json({
                message: "Not authorized to delete this course ",
            });
            return;
        }

        await Course.delete(courseId);

        res.json({ message: "Course deleted successfully", data: course });
    } catch (error) {
        res.status(500).json({ message: "Error deleting course", error });
    }
};

export const getUploadVideoUrl = async (req: Request, res: Response) => {
    const { fileName, fileType } = req.body;

    if (!fileName || !fileType) {
        res.status(400).json({ message: "Missing file name or file type" });
    }

    try {
        const uniqueId = uuidv4();
        const s3Key = `videos/${uniqueId}/${fileName}`;

        const s3Params = {
            Bucket: process.env.S3_BUCKET_NAME || "",
            Key: s3Key,
            ContentType: fileType,
            ACL: "public-read",
            Expires: 60, // URL expiration time in seconds
        };

        const uploadUrl = s3.getSignedUrl("putObject", s3Params);
        const videoUrl = `${process.env.CLOUD_FRONT_DOMAIN}/videos/${uniqueId}/${fileName}`;

        res.status(200).json({
            message: "Upload URL generated",
            data: { uploadUrl, videoUrl },
        });
    } catch (error) {
        res.status(500).json({ message: "Error generating upload URL", error });
    }
};
