/** @format */
"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useCarousel } from "@/hooks/useCarousel";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetAllCoursesQuery } from "@/state/api";
import CourseCardSearch from "@/components/CourseCardSearch";
import { useRouter } from "next/navigation";

const LoadingSkeleton = () => {
    return (
        <div className="w-3/4">
            <div className="flex justify-between items-center mt-12 h-[500px] rounded-lg bg-customgreys-secondarybg">
                <div className="basis-1/2 px-16 mx-auto">
                    <Skeleton className="h-8 w-48 mb-4" />
                    <Skeleton className="h-4 w-96 mb-2" />
                    <Skeleton className=" h-4 w-72 mb-8" />
                    <Skeleton className=" w-40 h-10" />
                </div>
                <Skeleton className="basis-1/2 h-full rounded-r-lg" />
                <div className="mx-auto py-12 mt-10">
                    <Skeleton className="h-6 w-48 mb-4" />
                    <Skeleton className="h-4 w-full max-w-2xl mb-8" />
                    <div className="flex flex-wrap gap-4 mb-8">
                        {[1, 2, 3, 4].map((_, index) => (
                            <Skeleton
                                key={index}
                                className="w-24 h-6 rounded-full"
                            />
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-4 mb-8">
                        {[1, 2, 3, 4].map((_, index) => (
                            <Skeleton
                                key={index}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const images = ["/hero1.jpg", "/hero2.jpg", "/hero3.jpg"];

const Landing = () => {
    const router = useRouter();
    const currentImage = useCarousel({ totalImages: images.length });
    const { data: courses, isLoading /* isError */ } = useGetAllCoursesQuery({
        category: "all",
    });

    const handleCourseClick = (courseId: string) => {
        console.log("Course clicked:", courseId);
        router.push(`/search?id=${courseId}`, {
            scroll: false,
        });
    };

    console.log("courses", courses);

    if (isLoading) return <LoadingSkeleton />;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-3/4"
        >
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex justify-between items-center mt-12 h-[500px] rounded-lg bg-gray-800"
            >
                {/* Left Side Content */}
                <div className="basis-1/2 px-16 mx-auto">
                    <h1 className="text-4xl font-bold mb-4">Courses</h1>
                    <p className="text-lg text-gray-400 mb-8">
                        This is the list of the courses you can enroll in.
                    </p>
                    <br />
                    Courses when you need them and want them
                    <div className="w-fit">
                        <Link href="/search" scroll={false}>
                            <div className="bg-blue-800 hover:bg-blue-600 mt-2 px-4 py-2 rounded-md">
                                Search for courses
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Right Side Image */}
                <div className="relative basis-1/2 h-full w-full">
                    {images.map((src, index) => (
                        <Image
                            key={src}
                            src={src}
                            alt={`Hero Banner ${index + 1}`}
                            fill
                            priority={index === currentImage}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className={`absolute inset-0 object-cover transition-opacity duration-500 ${
                                index === currentImage
                                    ? "opacity-100"
                                    : "opacity-0"
                            }`}
                        />
                    ))}
                </div>
            </motion.div>
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ amount: 0.3, once: true }}
                className=" mx-auto py-12 mt-10"
            >
                <h2 className="text-2xl font-semibold mb-4">Featured Course</h2>
                <p className="flex flex-wrap gap-4 mb-8">
                    From beginner to advanced, in all industries, we have the
                    right courses just for you and preparing your entire journey
                    for learing and making the most
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                    {[
                        "web development",
                        "next.js",
                        "mobile app",
                        "full stack",
                    ].map((tag, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-gray-700 rounded-md text-sm"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/*TODO: courses display here  */}
                    {courses &&
                        courses.slice(0, 4).map((course, index) => (
                            <motion.div
                                key={course.courseId}
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.2,
                                }}
                                viewport={{ amount: 0.4 }}
                                className=" mx-auto py-12 mt-10"
                            >
                                <CourseCardSearch
                                    key={index}
                                    course={course}
                                    onClick={() =>
                                        handleCourseClick(course.courseId)
                                    }
                                />
                            </motion.div>
                        ))}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Landing;
