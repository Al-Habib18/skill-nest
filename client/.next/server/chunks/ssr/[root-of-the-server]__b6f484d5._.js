module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/src/state/index.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/** @format */ __turbopack_context__.s({
    "addChapter": (()=>addChapter),
    "addSection": (()=>addSection),
    "closeChapterModal": (()=>closeChapterModal),
    "closeSectionModal": (()=>closeSectionModal),
    "default": (()=>__TURBOPACK__default__export__),
    "deleteChapter": (()=>deleteChapter),
    "deleteSection": (()=>deleteSection),
    "editChapter": (()=>editChapter),
    "editSection": (()=>editSection),
    "globalSlice": (()=>globalSlice),
    "openChapterModal": (()=>openChapterModal),
    "openSectionModal": (()=>openSectionModal),
    "setSections": (()=>setSections)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
;
const initialState = {
    courseEditor: {
        sections: [],
        isChapterModalOpen: false,
        isSectionModalOpen: false,
        selectedSectionIndex: null,
        selectedChapterIndex: null
    }
};
const globalSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "global",
    initialState,
    reducers: {
        setSections: (state, action)=>{
            state.courseEditor.sections = action.payload;
        },
        openChapterModal: (state, action)=>{
            state.courseEditor.isChapterModalOpen = true;
            state.courseEditor.selectedSectionIndex = action.payload.sectionIndex;
            state.courseEditor.selectedChapterIndex = action.payload.chapterIndex;
        },
        closeChapterModal: (state)=>{
            state.courseEditor.isChapterModalOpen = false;
            state.courseEditor.selectedSectionIndex = null;
            state.courseEditor.selectedChapterIndex = null;
        },
        openSectionModal: (state, action)=>{
            console.log("action.payload.sectionIndex", action.payload.sectionIndex);
            state.courseEditor.isSectionModalOpen = true;
            state.courseEditor.selectedSectionIndex = action.payload.sectionIndex;
        },
        closeSectionModal: (state)=>{
            state.courseEditor.isSectionModalOpen = false;
            state.courseEditor.selectedSectionIndex = null;
        },
        addSection: (state, action)=>{
            state.courseEditor.sections.push(action.payload);
        },
        editSection: (state, action)=>{
            state.courseEditor.sections[action.payload.index] = action.payload.section;
        },
        deleteSection: (state, action)=>{
            state.courseEditor.sections.splice(action.payload, 1);
        },
        addChapter: (state, action)=>{
            state.courseEditor.sections[action.payload.sectionIndex].chapters.push(action.payload.chapter);
        },
        editChapter: (state, action)=>{
            state.courseEditor.sections[action.payload.sectionIndex].chapters[action.payload.chapterIndex] = action.payload.chapter;
        },
        deleteChapter: (state, action)=>{
            state.courseEditor.sections[action.payload.sectionIndex].chapters.splice(action.payload.chapterIndex, 1);
        }
    }
});
const { setSections, openChapterModal, closeChapterModal, openSectionModal, closeSectionModal, addSection, editSection, deleteSection, addChapter, editChapter, deleteChapter } = globalSlice.actions;
const __TURBOPACK__default__export__ = globalSlice.reducer;
}}),
"[project]/src/state/api.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/** @format */ __turbopack_context__.s({
    "api": (()=>api),
    "useCreateCourseMutation": (()=>useCreateCourseMutation),
    "useCreateStripePaymentIntentMutation": (()=>useCreateStripePaymentIntentMutation),
    "useCreateTransactionMutation": (()=>useCreateTransactionMutation),
    "useDeleteCourseMutation": (()=>useDeleteCourseMutation),
    "useGetAllCoursesQuery": (()=>useGetAllCoursesQuery),
    "useGetCourseQuery": (()=>useGetCourseQuery),
    "useGetTransactionsQuery": (()=>useGetTransactionsQuery),
    "useGetUploadVideoUrlMutation": (()=>useGetUploadVideoUrlMutation),
    "useGetUserCourseProgressQuery": (()=>useGetUserCourseProgressQuery),
    "useGetUserEnrolledCoursesQuery": (()=>useGetUserEnrolledCoursesQuery),
    "useUpdateCourseMutation": (()=>useUpdateCourseMutation),
    "useUpdateUserCourseProgressMutation": (()=>useUpdateUserCourseProgressMutation),
    "useUpdateUserMutation": (()=>useUpdateUserMutation)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
;
;
const customBaseQuery = async (args, api, extraOptions)=>{
    const baseQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchBaseQuery"])({
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
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(`Error: ${errorMessage}`);
        }
        const isMutationRequest = args.method && args.method !== "GET";
        if (isMutationRequest) {
            const successMessage = result.data?.message;
            if (successMessage) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(successMessage);
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
const api = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
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
    */ getAllCourses: build.query({
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
                query: (userId)=>`api/users/course-progress/${userId}/enrolled-courses`,
                providesTags: [
                    "Courses",
                    "UserCourseProgress"
                ]
            }),
            getUserCourseProgress: build.query({
                query: ({ userId, courseId })=>`api/users/course-progress/${userId}/courses/${courseId}`,
                providesTags: [
                    "UserCourseProgress"
                ]
            }),
            updateUserCourseProgress: build.mutation({
                query: ({ userId, courseId, progressData })=>({
                        url: `api/users/course-progress/${userId}/courses/${courseId}`,
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
const { useUpdateUserMutation, useCreateCourseMutation, useUpdateCourseMutation, useDeleteCourseMutation, /* courses */ useGetAllCoursesQuery, useGetCourseQuery, useGetUploadVideoUrlMutation, /* transactions */ useGetTransactionsQuery, useCreateTransactionMutation, useCreateStripePaymentIntentMutation, /* user course progress */ useGetUserEnrolledCoursesQuery, useGetUserCourseProgressQuery, useUpdateUserCourseProgressMutation } = api;
}}),
"[project]/src/state/redux.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>StoreProvider),
    "makeStore": (()=>makeStore),
    "useAppDispatch": (()=>useAppDispatch),
    "useAppSelector": (()=>useAppSelector)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/redux/dist/redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/api.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
/* REDUX STORE */ const rootReducer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineReducers"])({
    global: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].reducer
});
const makeStore = ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [
                        "api/executeMutation/pending",
                        "api/executeMutation/fulfilled",
                        "api/executeMutation/rejected"
                    ],
                    ignoredActionPaths: [
                        "meta.arg.originalArgs.file",
                        "meta.arg.originalArgs.formData",
                        "payload.chapter.video",
                        "meta.baseQueryMeta.request",
                        "meta.baseQueryMeta.response"
                    ],
                    ignoredPaths: [
                        "global.courseEditor.sections",
                        "entities.videos.data",
                        "meta.baseQueryMeta.request",
                        "meta.baseQueryMeta.response"
                    ]
                }
            }).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].middleware)
    });
};
const useAppDispatch = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDispatch"])();
const useAppSelector = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"];
function StoreProvider({ children }) {
    const storeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    if (!storeRef.current) {
        storeRef.current = makeStore();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupListeners"])(storeRef.current.dispatch);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Provider"], {
        store: storeRef.current,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/state/redux.tsx",
        lineNumber: 64,
        columnNumber: 10
    }, this);
}
}}),
"[project]/src/app/provider.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Providers)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$redux$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/state/redux.tsx [app-ssr] (ecmascript)");
"use client";
;
;
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$state$2f$redux$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/provider.tsx",
        lineNumber: 7,
        columnNumber: 12
    }, this);
}
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__b6f484d5._.js.map