/** @format */
"use client";
import React, { useState } from "react";
import {
    useCreateCourseMutation,
    useDeleteCourseMutation,
    useGetCoursesQuery,
} from "@/state/api";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";
import { useMemo } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import Toolbar from "@/components/Toolbar";
import TeacherCourseCard from "@/components/TeacherCourseCard";

const CoursesPage = () => {
    const router = useRouter();
    const { user } = useUser();
    const [createCourse] = useCreateCourseMutation();
    const [deleteCourse] = useDeleteCourseMutation();

    const {
        data: courses,
        isLoading,
        isError,
    } = useGetCoursesQuery({
        category: "all",
    });

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");

    const filteredCourses = useMemo(() => {
        if (!courses) return [];

        return courses.filter((course) => {
            const matchesSearch = course.title
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
            const matchesCategory =
                selectedCategory === "all" ||
                course.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [courses, searchTerm, selectedCategory]);

    const handleEdit = (course: Course) => {
        router.push(`/teacher/courses/${course.courseId}`, {
            scroll: false,
        });
    };

    const handleDelete = async (course: Course) => {
        if (window.confirm("Are you sure you want to delete this course?")) {
            await deleteCourse(course.courseId);
        }
    };

    const handleCreateCourse = async () => {
        if (!user) return;

        const result = await createCourse({
            teacherId: user.id,
            teacherName: user.fullName || "Unknown Teacher",
        }).unwrap();
        router.push(`/teacher/courses/${result.courseId}`, {
            scroll: false,
        });
    };

    if (isLoading) return <Loading />;
    if (isError || !courses) return <div>Something went wrong</div>;
    return (
        <div className="w-full h-full">
            <Header
                title="Courses"
                subtitle="Browse your courses"
                rightElement={
                    <Button
                        onClick={handleCreateCourse}
                        className="bg-primary-700 hover:bg-primary-600"
                    >
                        Create Course
                    </Button>
                }
            />
            <Toolbar
                onSearch={setSearchTerm}
                onCategoryChange={setSelectedCategory}
            />

            <div className=" grid grid-cols-1  lg:grid-cols-2  xl:grid-cols-3">
                {filteredCourses.map((course) => (
                    <TeacherCourseCard
                        key={course.courseId}
                        course={course}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                        isOwner={user?.id === course.teacherId}
                    />
                ))}
            </div>
        </div>
    );
};

export default CoursesPage;
