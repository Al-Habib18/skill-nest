module.exports = {

"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/app/(dashboad)/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(dashboad)/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/state/api.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/** @format */ __turbopack_context__.s({
    "api": (()=>api),
    "useCreateCourseMutation": (()=>useCreateCourseMutation),
    "useCreateStripePaymentIntentMutation": (()=>useCreateStripePaymentIntentMutation),
    "useCreateTransactionMutation": (()=>useCreateTransactionMutation),
    "useDeleteCourseMutation": (()=>useDeleteCourseMutation),
    "useGetCourseQuery": (()=>useGetCourseQuery),
    "useGetCoursesQuery": (()=>useGetCoursesQuery),
    "useGetTransactionsQuery": (()=>useGetTransactionsQuery),
    "useGetUploadVideoUrlMutation": (()=>useGetUploadVideoUrlMutation),
    "useGetUserCourseProgressQuery": (()=>useGetUserCourseProgressQuery),
    "useGetUserEnrolledCoursesQuery": (()=>useGetUserEnrolledCoursesQuery),
    "useUpdateCourseMutation": (()=>useUpdateCourseMutation),
    "useUpdateUserCourseProgressMutation": (()=>useUpdateUserCourseProgressMutation),
    "useUpdateUserMutation": (()=>useUpdateUserMutation)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-rsc] (ecmascript)");
;
;
const customBaseQuery = async (args, api, extraOptions)=>{
    const baseQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchBaseQuery"])({
        baseUrl: ("TURBOPACK compile-time value", "http://localhost:8001") || "http://localhost:8001",
        prepareHeaders: async (headers)=>{
            const token = await window.Clerk?.session?.getToken();
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            return headers;
        }
    });
    try {
        const result = await baseQuery(args, api, extraOptions);
        if (result.error) {
            const errorData = result.error.data;
            const errorMessage = errorData?.message || result.error.status.toString() || "An error occurred";
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toast"].error(`Error: ${errorMessage}`);
        }
        const isMutationRequest = args.method && args.method !== "GET";
        if (isMutationRequest) {
            const successMessage = result.data?.message;
            if (successMessage) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toast"].success(successMessage);
        }
        if (result.data) {
            result.data = result.data.data;
        } else if (result.error?.status === 204 || result.meta?.response?.status === 24) {
            return {
                data: null
            };
        }
        return result;
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        return {
            error: {
                status: "FETCH_ERROR",
                error: errorMessage
            }
        };
    }
};
const api = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    baseQuery: customBaseQuery,
    reducerPath: "api",
    tagTypes: [
        "Courses",
        "Users",
        "UserCourseProgress"
    ],
    endpoints: (build)=>({
            /* 
    ===============
    USER CLERK
    =============== 
    */ updateUser: build.mutation({
                query: ({ userId, ...updatedUser })=>({
                        url: `api/users/clerk/${userId}`,
                        method: "PUT",
                        body: updatedUser
                    }),
                invalidatesTags: [
                    "Users"
                ]
            }),
            /* 
    ===============
    COURSES
    =============== 
    */ getCourses: build.query({
                query: ({ category })=>({
                        url: "api/courses",
                        params: {
                            category
                        }
                    }),
                providesTags: [
                    "Courses"
                ]
            }),
            getCourse: build.query({
                query: (id)=>`api/courses/${id}`,
                providesTags: (result, error, id)=>[
                        {
                            type: "Courses",
                            id
                        }
                    ]
            }),
            createCourse: build.mutation({
                query: (body)=>({
                        url: `api/courses`,
                        method: "POST",
                        body
                    }),
                invalidatesTags: [
                    "Courses"
                ]
            }),
            updateCourse: build.mutation({
                query: ({ courseId, formData })=>({
                        url: `api/courses/${courseId}`,
                        method: "PUT",
                        body: formData
                    }),
                invalidatesTags: (result, error, { courseId })=>[
                        {
                            type: "Courses",
                            id: courseId
                        }
                    ]
            }),
            deleteCourse: build.mutation({
                query: (courseId)=>({
                        url: `api/courses/${courseId}`,
                        method: "DELETE"
                    }),
                invalidatesTags: [
                    "Courses"
                ]
            }),
            getUploadVideoUrl: build.mutation({
                query: ({ courseId, sectionId, chapterId, fileName, fileType })=>({
                        url: `api/courses/${courseId}/sections/${sectionId}/chapters/${chapterId}/get-upload-url`,
                        method: "POST",
                        body: {
                            fileName,
                            fileType
                        }
                    })
            }),
            /* 
    ===============
    TRANSACTIONS
    =============== 
    */ getTransactions: build.query({
                query: (userId)=>`transactions?userId=${userId}`
            }),
            createStripePaymentIntent: build.mutation({
                query: ({ amount })=>({
                        url: `/transactions/stripe/payment-intent`,
                        method: "POST",
                        body: {
                            amount
                        }
                    })
            }),
            createTransaction: build.mutation({
                query: (transaction)=>({
                        url: "transactions",
                        method: "POST",
                        body: transaction
                    })
            }),
            /* 
    ===============
    USER COURSE PROGRESS
    =============== 
    */ getUserEnrolledCourses: build.query({
                query: (userId)=>`users/course-progress/${userId}/enrolled-courses`,
                providesTags: [
                    "Courses",
                    "UserCourseProgress"
                ]
            }),
            getUserCourseProgress: build.query({
                query: ({ userId, courseId })=>`users/course-progress/${userId}/courses/${courseId}`,
                providesTags: [
                    "UserCourseProgress"
                ]
            }),
            updateUserCourseProgress: build.mutation({
                query: ({ userId, courseId, progressData })=>({
                        url: `users/course-progress/${userId}/courses/${courseId}`,
                        method: "PUT",
                        body: progressData
                    }),
                invalidatesTags: [
                    "UserCourseProgress"
                ],
                async onQueryStarted ({ userId, courseId, progressData }, { dispatch, queryFulfilled }) {
                    const patchResult = dispatch(api.util.updateQueryData("getUserCourseProgress", {
                        userId,
                        courseId
                    }, (draft)=>{
                        Object.assign(draft, {
                            ...draft,
                            sections: progressData.sections
                        });
                    }));
                    try {
                        await queryFulfilled;
                    } catch  {
                        patchResult.undo();
                    }
                }
            })
        })
});
const { useUpdateUserMutation, useCreateCourseMutation, useUpdateCourseMutation, useDeleteCourseMutation, useGetCoursesQuery, useGetCourseQuery, useGetUploadVideoUrlMutation, useGetTransactionsQuery, useCreateTransactionMutation, useCreateStripePaymentIntentMutation, useGetUserEnrolledCoursesQuery, useGetUserCourseProgressQuery, useUpdateUserCourseProgressMutation } = api;
}}),
"[project]/src/lib/schemas.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "chapterSchema": (()=>chapterSchema),
    "courseSchema": (()=>courseSchema),
    "guestSchema": (()=>guestSchema),
    "notificationSettingsSchema": (()=>notificationSettingsSchema),
    "sectionSchema": (()=>sectionSchema)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/lib/index.mjs [app-rsc] (ecmascript)");
;
const courseSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["object"])({
    courseTitle: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"])().min(1, "Title is required"),
    courseDescription: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"])().min(1, "Description is required"),
    courseCategory: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"])().min(1, "Category is required"),
    coursePrice: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"])(),
    courseStatus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["boolean"])()
});
const chapterSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["object"])({
    title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"])().min(2, "Title must be at least 2 characters"),
    content: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"])().min(10, "Content must be at least 10 characters"),
    video: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["union"])([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["instanceof"])(File)
    ]).optional()
});
const sectionSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["object"])({
    title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"])().min(2, "Title must be at least 2 characters"),
    description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"])().min(10, "Description must be at least 10 characters")
});
const guestSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["object"])({
    email: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"])().email("Invalid email address")
});
const notificationSettingsSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["object"])({
    courseNotifications: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["boolean"])(),
    emailAlerts: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["boolean"])(),
    smsAlerts: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["boolean"])(),
    notificationFrequency: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["enum"])([
        "immediate",
        "daily",
        "weekly"
    ])
});
}}),
"[project]/src/components/Header.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/** @format */ __turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
const Header = ({ title, subtitle, rightElement })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-7 flex justify-between items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold text-white-50",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 9,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-500 mt-1",
                        children: subtitle
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 10,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 8,
                columnNumber: 13
            }, this),
            rightElement && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: rightElement
            }, void 0, false, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 12,
                columnNumber: 30
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Header.tsx",
        lineNumber: 7,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = Header;
}}),
"[project]/src/components/SharedNotificationSetting.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/** @format */ __turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$client$2d$boundary$2f$hooks$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/client-boundary/hooks.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/api.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$react$2d$server$2e$esm$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/react-server.esm.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/schemas.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Header.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
const SharedNotificationSetting = ({ title = "Notification Settings", subtitle = "Manage your notification settings" })=>{
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$client$2d$boundary$2f$hooks$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useUser"])();
    const [updateUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useUpdateUserMutation"])();
    const currentSettings = user?.publicMetadata?.settings || {};
    const methods = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$react$2d$server$2e$esm$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["zodResolver"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notificationSettingsSchema"]),
        defaultValues: {
            courseNotifications: currentSettings.courseNotifications || false,
            emailAlerts: currentSettings.emailAlerts,
            smsAlerts: currentSettings.smsAlerts,
            notificationFrequency: currentSettings.notificationFrequency
        }
    });
    const onSubmit = async (data)=>{
        if (!user) return;
        const updatedUser = {
            userId: user.id,
            publicMetadata: {
                ...user.publicMetadata,
                settings: {
                    ...currentSettings,
                    ...data
                }
            }
        };
        try {
            await updateUser(updatedUser);
        } catch (error) {
            console.log("Failed to update user Settings", error);
        }
    };
    if (!user) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "Please sign in to manage your settings"
            }, void 0, false, {
                fileName: "[project]/src/components/SharedNotificationSetting.tsx",
                lineNumber: 57,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/SharedNotificationSetting.tsx",
            lineNumber: 56,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            title: title,
            subtitle: subtitle
        }, void 0, false, {
            fileName: "[project]/src/components/SharedNotificationSetting.tsx",
            lineNumber: 64,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/SharedNotificationSetting.tsx",
        lineNumber: 63,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = SharedNotificationSetting;
}}),
"[project]/src/app/(dashboad)/user/settings/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/** @format */ __turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SharedNotificationSetting$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SharedNotificationSetting.tsx [app-rsc] (ecmascript)");
;
;
const UserSettings = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-3/5",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SharedNotificationSetting$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/(dashboad)/user/settings/page.tsx",
            lineNumber: 9,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(dashboad)/user/settings/page.tsx",
        lineNumber: 8,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = UserSettings;
}}),
"[project]/src/app/(dashboad)/user/settings/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(dashboad)/user/settings/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=src_922ebec2._.js.map