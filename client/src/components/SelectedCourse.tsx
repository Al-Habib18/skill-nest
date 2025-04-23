/** @format */

import { formatPrice } from "@/lib/utils";
import React from "react";
import { Button } from "./ui/button";
import AccordionSections from "./AccordionSections";

function SelectedCourse({ course, handleEnrollNow }: SelectedCourseProps) {
    return (
        <div className="overflow-hidden py-9 px-9 bg-gray-800">
            <div>
                <h3 className="text-white-50 font-semibold text-3xl">
                    {course.title}
                </h3>
                <p className="text-gray-400 text-sm pt-3">
                    {" "}
                    By {course.teacherName} |{" "}
                    <span className="font-bold text-gray-300">
                        {course?.enrollments?.length}
                    </span>
                </p>
            </div>
            <div className="mt-5">
                <p className="text-gray-400 mb-4">{course.description}</p>
                <div>
                    <h4>Course Content</h4>
                    <AccordionSections sections={course.sections} />
                </div>
                <div className="flex justify-between items-center mt-5">
                    <span className="text-primary-500 font-semibold text-2xl">
                        {formatPrice(course.price)}
                    </span>
                    <Button
                        onClick={() => handleEnrollNow(course.courseId)}
                        className="font-semibold bg-blue-700 hover:bg-blue-600 duration-400"
                    >
                        {" "}
                        Enroll Now
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default SelectedCourse;
