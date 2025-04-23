module.exports = {

"[project]/.next-internal/server/app/(nondashboard)/search/page/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
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
"[project]/src/app/(nondashboard)/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(nondashboard)/layout.tsx [app-rsc] (ecmascript)"));
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
                        url: `users/clerk/${userId}`,
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
"[project]/src/components/Loading.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/** @format */ __turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-rsc] (ecmascript) <export default as Loader2>");
;
;
function Loading() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 flex gap-2 items-center justify-center bg-background/50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                className: "w-6 h-6 animate-spin text-primary-700"
            }, void 0, false, {
                fileName: "[project]/src/components/Loading.tsx",
                lineNumber: 9,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm font-medium text-primary-700",
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/src/components/Loading.tsx",
                lineNumber: 10,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Loading.tsx",
        lineNumber: 8,
        columnNumber: 9
    }, this);
}
const __TURBOPACK__default__export__ = Loading;
}}),
"[project]/src/app/(nondashboard)/search/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/** @format */ __turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/api.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Loading.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
function Search() {
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const id = searchParams.get("id");
    const { data: courses, isLoading/* isError */  } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useGetCoursesQuery"])({});
    const [selectedCourse, setSelectedCourse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (courses) {
            if (id) {
                const course = courses.find((c)=>c.courseId === id);
                if (course) {
                    setSelectedCourse(course || courses[0]);
                } else {
                    setSelectedCourse(courses[0]);
                }
            }
        }
    }, [
        id,
        courses
    ]);
    if (isLoading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/src/app/(nondashboard)/search/page.tsx",
        lineNumber: 28,
        columnNumber: 27
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Search"
    }, void 0, false, {
        fileName: "[project]/src/app/(nondashboard)/search/page.tsx",
        lineNumber: 30,
        columnNumber: 12
    }, this);
}
const __TURBOPACK__default__export__ = Search;
}}),
"[project]/src/app/(nondashboard)/search/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(nondashboard)/search/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=_7842bada._.js.map