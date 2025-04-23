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
                query: (courseId)=>`api/courses/${courseId}`,
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
                query: (userId)=>`api/transactions?userId=${userId}`
            }),
            createStripePaymentIntent: build.mutation({
                query: ({ amount })=>({
                        url: `api/transactions/stripe/payment-intent`,
                        method: "POST",
                        body: {
                            amount
                        }
                    })
            }),
            createTransaction: build.mutation({
                query: (transaction)=>({
                        url: "api/transactions",
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
const { useUpdateUserMutation, useCreateCourseMutation, useUpdateCourseMutation, useDeleteCourseMutation, /* courses */ useGetCoursesQuery, useGetCourseQuery, useGetUploadVideoUrlMutation, /* transactions */ useGetTransactionsQuery, useCreateTransactionMutation, useCreateStripePaymentIntentMutation, /* user course progress */ useGetUserEnrolledCoursesQuery, useGetUserCourseProgressQuery, useUpdateUserCourseProgressMutation } = api;
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
"[project]/src/lib/utils.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "NAVBAR_HEIGHT": (()=>NAVBAR_HEIGHT),
    "centsToDollars": (()=>centsToDollars),
    "cn": (()=>cn),
    "convertToSubCurrency": (()=>convertToSubCurrency),
    "countries": (()=>countries),
    "courseCategories": (()=>courseCategories),
    "createCourseFormData": (()=>createCourseFormData),
    "customDataGridStyles": (()=>customDataGridStyles),
    "customStyles": (()=>customStyles),
    "dollarsToCents": (()=>dollarsToCents),
    "formatPrice": (()=>formatPrice),
    "priceSchema": (()=>priceSchema),
    "uploadAllVideos": (()=>uploadAllVideos)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/lib/index.mjs [app-rsc] (ecmascript)");
// import { api } from "../state/api";
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-rsc] (ecmascript)");
;
;
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function formatPrice(cents) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format((cents || 0) / 100);
}
function dollarsToCents(dollars) {
    const amount = typeof dollars === "string" ? parseFloat(dollars) : dollars;
    return Math.round(amount * 100);
}
function centsToDollars(cents) {
    return ((cents || 0) / 100).toString();
}
const priceSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"])().transform((val)=>{
    const dollars = parseFloat(val);
    if (isNaN(dollars)) return "0";
    return dollarsToCents(dollars).toString();
});
const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo (Congo-Brazzaville)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor (Timor-Leste)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar (formerly Burma)",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe"
];
const customStyles = "text-gray-300 placeholder:text-gray-500";
function convertToSubCurrency(amount, factor = 100) {
    return Math.round(amount * factor);
}
const NAVBAR_HEIGHT = 48;
const courseCategories = [
    {
        value: "technology",
        label: "Technology"
    },
    {
        value: "science",
        label: "Science"
    },
    {
        value: "mathematics",
        label: "Mathematics"
    },
    {
        value: "artificial-intelligence",
        label: "Artificial Intelligence"
    }
];
const customDataGridStyles = {
    border: "none",
    backgroundColor: "#17181D",
    "& .MuiDataGrid-columnHeaders": {
        backgroundColor: "#1B1C22",
        color: "#6e6e6e",
        "& [role='row'] > *": {
            backgroundColor: "#1B1C22 !important",
            border: "none !important"
        }
    },
    "& .MuiDataGrid-cell": {
        color: "#6e6e6e",
        border: "none !important"
    },
    "& .MuiDataGrid-row": {
        backgroundColor: "#17181D",
        "&:hover": {
            backgroundColor: "#25262F"
        }
    },
    "& .MuiDataGrid-footerContainer": {
        backgroundColor: "#17181D",
        color: "#6e6e6e",
        border: "none !important"
    },
    "& .MuiDataGrid-filler": {
        border: "none !important",
        backgroundColor: "#17181D !important",
        borderTop: "none !important",
        "& div": {
            borderTop: "none !important"
        }
    },
    "& .MuiTablePagination-root": {
        color: "#6e6e6e"
    },
    "& .MuiTablePagination-actions .MuiIconButton-root": {
        color: "#6e6e6e"
    }
};
const createCourseFormData = (data, sections)=>{
    const formData = new FormData();
    formData.append("title", data.courseTitle);
    formData.append("description", data.courseDescription);
    formData.append("category", data.courseCategory);
    formData.append("price", data.coursePrice.toString());
    formData.append("status", data.courseStatus ? "Published" : "Draft");
    const sectionsWithVideos = sections.map((section)=>({
            ...section,
            chapters: section.chapters.map((chapter)=>({
                    ...chapter,
                    video: chapter.video
                }))
        }));
    formData.append("sections", JSON.stringify(sectionsWithVideos));
    return formData;
};
const uploadAllVideos = async (localSections, courseId, getUploadVideoUrl)=>{
    const updatedSections = localSections.map((section)=>({
            ...section,
            chapters: section.chapters.map((chapter)=>({
                    ...chapter
                }))
        }));
    for(let i = 0; i < updatedSections.length; i++){
        for(let j = 0; j < updatedSections[i].chapters.length; j++){
            const chapter = updatedSections[i].chapters[j];
            if (chapter.video instanceof File && chapter.video.type === "video/mp4") {
                try {
                    const updatedChapter = await uploadVideo(chapter, courseId, updatedSections[i].sectionId, getUploadVideoUrl);
                    updatedSections[i].chapters[j] = updatedChapter;
                } catch (error) {
                    console.error(`Failed to upload video for chapter ${chapter.chapterId}:`, error);
                }
            }
        }
    }
    return updatedSections;
};
async function uploadVideo(chapter, courseId, sectionId, getUploadVideoUrl) {
    const file = chapter.video;
    try {
        const { uploadUrl, videoUrl } = await getUploadVideoUrl({
            courseId,
            sectionId,
            chapterId: chapter.chapterId,
            fileName: file.name,
            fileType: file.type
        }).unwrap();
        await fetch(uploadUrl, {
            method: "PUT",
            headers: {
                "Content-Type": file.type
            },
            body: file
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toast"].success(`Video uploaded successfully for chapter ${chapter.chapterId}`);
        return {
            ...chapter,
            video: videoUrl
        };
    } catch (error) {
        console.error(`Failed to upload video for chapter ${chapter.chapterId}:`, error);
        throw error;
    }
}
}}),
"[project]/src/components/ui/button.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/src/components/Toolbar.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/** @format */ __turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
const Toolbar = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Toolbar"
    }, void 0, false, {
        fileName: "[project]/src/components/Toolbar.tsx",
        lineNumber: 6,
        columnNumber: 12
    }, this);
};
const __TURBOPACK__default__export__ = Toolbar;
}}),
"[project]/src/app/(dashboad)/teacher/courses/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/** @format */ __turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/api.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$client$2d$boundary$2f$hooks$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/client-boundary/hooks.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Loading.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Header.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Toolbar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Toolbar.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
const CoursesPage = ()=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRouter"])();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$client$2d$boundary$2f$hooks$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useUser"])();
    const [createCourse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCreateCourseMutation"])();
    const [deleteCourse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useDeleteCourseMutation"])();
    const { data: courses, isLoading, isError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useGetCoursesQuery"])({
        category: "all"
    });
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])("all");
    const filteredCourses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!courses) return [];
        return courses.filter((course)=>{
            const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [
        courses,
        searchTerm,
        selectedCategory
    ]);
    const handleEdit = (course)=>{
        router.push(`/teacher/courses/${course.courseId}`);
    };
    const handleDelete = async (course)=>{
        if (window.confirm("Are you sure you want to delete this course?")) {
            await deleteCourse(course.courseId);
        }
    };
    const handleCreateCourse = async ()=>{
        if (!user) return;
        const result = await createCourse({
            teacherId: user.id,
            teacherName: user.fullName || "Unknown Teacher"
        }).unwrap();
        router.push(`/teacher/courses/${result.courseId}`);
    };
    if (isLoading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/src/app/(dashboad)/teacher/courses/page.tsx",
        lineNumber: 69,
        columnNumber: 27
    }, this);
    if (isError || !courses) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Something went wrong"
    }, void 0, false, {
        fileName: "[project]/src/app/(dashboad)/teacher/courses/page.tsx",
        lineNumber: 70,
        columnNumber: 37
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                title: "Courses",
                subtitle: "Browse your courses",
                rightElement: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                    onClick: handleCreateCourse,
                    className: "bg-primary-700 hover:bg-primary-600",
                    children: "Create Course"
                }, void 0, false, {
                    fileName: "[project]/src/app/(dashboad)/teacher/courses/page.tsx",
                    lineNumber: 77,
                    columnNumber: 21
                }, void 0)
            }, void 0, false, {
                fileName: "[project]/src/app/(dashboad)/teacher/courses/page.tsx",
                lineNumber: 73,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Toolbar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                onSearch: setSearchTerm,
                onCategoryChange: setSelectedCategory
            }, void 0, false, {
                fileName: "[project]/src/app/(dashboad)/teacher/courses/page.tsx",
                lineNumber: 85,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(dashboad)/teacher/courses/page.tsx",
        lineNumber: 72,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = CoursesPage;
}}),
"[project]/src/app/(dashboad)/teacher/courses/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(dashboad)/teacher/courses/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=src_4471d7eb._.js.map