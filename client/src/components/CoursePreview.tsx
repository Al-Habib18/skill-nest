/** @format */

import React from "react";
import { formatPrice } from "@/lib/utils";
import Image from "next/image";
import AccordionSections from "./AccordionSections";

const CoursePreview = ({ course }: CoursePreviewProps) => {
    const price = formatPrice(course.price);
    return (
        <div className="space-y-10">
            {" "}
            <div className="w-full bg-customgreys-secondarybg py-8 px-10 flex flex-col gap-5 rounded-lg">
                {" "}
                <div className="mb-2 bg-white-50">
                    <Image
                        src={course.image || "/placeholder.png"}
                        alt="Course Preview"
                        width={640}
                        height={360}
                        className="w-full"
                    />
                </div>
                <div className="">
                    {" "}
                    <h2 className="text-white-50 text-3xl font-bold mb-2">
                        {course.title}
                    </h2>
                    <p className="text-gray-400 font-medium mb-2">
                        {" "}
                        By {course.teacherName}
                    </p>
                    <p className="text-sm text-gray-400">
                        {" "}
                        {course.description}
                    </p>
                </div>
                <div>
                    <h2>Course Content</h2>
                    <AccordionSections sections={course.sections} />
                </div>
            </div>
            <div className="w-full bg-customgreys-secondarybg py-8 px-10 flex flex-col gap-5 rounded-lg">
                <h3 className="text-xl mb-4"> Price Detaile (1 item)</h3>
                <div className="flex justify-between mb-4 text-gray-400 text-base">
                    <span className="font-bold "> 1x {course.title}</span>
                    <span className="font-bold "> 1x {price}</span>
                </div>
                <div className="flex justify-between border-t border-gray-700 pt-4 mb-4 text-gray-400 text-base">
                    <span className="font-bold  text-lg"> Total Amount</span>
                    <span className="font-bold "> 1x {price}</span>
                </div>
            </div>
        </div>
    );
};

export default CoursePreview;
