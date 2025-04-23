/** @format */

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import * as dynamoose from "dynamoose";
import bodyParser from "body-parser";
import serverless from "serverless-http";
import seed from "./seed/seedDynamodb";
import {
    clerkMiddleware,
    createClerkClient,
    requireAuth,
} from "@clerk/express";

/* Routes Import */
import courseRoutes from "./routes/courseRoutes";
import userClerkRoutes from "./routes/userClerkRoutes";
import transactionRoutes from "./routes/transactionRoutes";
import userCourseProgressRoutes from "./routes/userCourseProgress";

dotenv.config();

const isProduction = process.env.NODE_ENV === "production";

if (!isProduction) {
    dynamoose.aws.ddb.local();
}

export const clerkClient = createClerkClient({
    secretKey: process.env.CLERK_SECRET_KEY,
    publishableKey: process.env.CLERK_PUBLISHABLE_KEY!,
});

const app = express();

/* middlewares */
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginEmbedderPolicy({ policy: "credentialless" }));
app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(clerkMiddleware());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

/* Routes */
app.use("/api/courses", courseRoutes);
app.use("/api/users/clerk", requireAuth(), userClerkRoutes);
app.use("/api/transactions", requireAuth(), transactionRoutes);
app.use("/api/users/course-progress", requireAuth(), userCourseProgressRoutes);

// server
const PORT = process.env.PORT || 3000;
if (!isProduction) {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

// aws production server
const serverlessApp = serverless(app);
export const handler = async (event: any, context: any) => {
    if (event.action === "seed") {
        await seed();
        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Database seeded successfully" }),
        };
    } else {
        return serverlessApp(event, context);
    }
};
