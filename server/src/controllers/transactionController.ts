/** @format */

import Stripe from "stripe";
import dotenv from "dotenv";
import { Request, Response } from "express";
import Course from "../models/courseModel";
import Transaction from "../models/transactionModel";
import UserCourseProgress from "../models/userCourseProgressModel";

dotenv.config();

if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("STRIPE_SECRET_KEY is not defined");
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const listTransactions = async (req: Request, res: Response) => {
    const { userId } = req.query;
    try {
        const transactions = userId
            ? await Transaction.query("userId").eq(userId).exec()
            : await Transaction.scan();

        res.status(200).json({
            message: "Transactions retrieved successfully",
            data: transactions,
        });
    } catch (err) {
        console.log("Error listing transactions", err);
        res.status(500).json({ message: "Error listing transactions", err });
    }
};

export const createStripePaymentIntent = async (
    req: Request,
    res: Response
) => {
    let { amount } = req.body;

    if (!amount || amount <= 0) {
        amount = 100;
    }
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: "usd",
            automatic_payment_methods: {
                enabled: true,
                allow_redirects: "never",
            },
        });
        res.status(200).json({
            message: "",
            data: {
                clientSecret: paymentIntent.client_secret,
            },
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error creating payment intent",
            error,
        });
    }
};

//TODO:
export const createTransaction = async (req: Request, res: Response) => {
    const { userId, courseId, transactionId, paymentProvider, amount } =
        req.body;
    try {
        //1. get course information
        const course = await Course.get(courseId);

        //2. create transection record
        const newTransection = await Transaction.create({
            userId,
            courseId,
            transactionId,
            paymentProvider,
            amount,
            dateTime: new Date().toISOString(),
        });
        await newTransection.save();

        // 3. initial user progress
        const initialProgress = new UserCourseProgress({
            userId,
            courseId,
            enrollmentDate: new Date().toISOString(),
            overallProgress: 0,
            secrions: course.sections.map((section: any) => ({
                sectionId: section.sectionId,
                chapters: section.chapters.map((chapter: any) => ({
                    chapterId: chapter.chapterId,
                    completed: false,
                })),
            })),
            lastAccessedTimestamp: new Date().toISOString(),
        });
        await initialProgress.save();

        //4. add enrollment to course
        await Course.update(courseId, {
            $ADD: {
                enrollments: [{ userId }],
            },
        });

        res.status(200).json({
            message: "Purchased Course successfully",
            data: {
                transaction: newTransection,
                courseProgress: initialProgress,
            },
        });
    } catch (error) {
        console.log(" Error creating Transaction :: ", error);
        res.status(500).json({
            message: "Error creating Transaction and enrollment",
            error,
        });
    }
};
