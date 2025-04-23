/** @format */

import { useGetCourseQuery } from "@/state/api";
import { useSearchParams } from "next/navigation";

export const useCurrentCourse = () => {
    const searchParams = useSearchParams();
    const courseId =
        searchParams.get("id") ?? "8b4f7d9c-4b1c-4b1c-8b4f-7d9c8b4f7d9c";
    const { data: course, ...rest } = useGetCourseQuery(courseId);

    return { course, courseId, ...rest };
};
