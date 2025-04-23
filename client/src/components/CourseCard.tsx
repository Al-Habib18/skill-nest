/** @format */

import {
    Card,
    CardHeader,
    CardContent,
    CardTitle,
    CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";

const CourseCard = ({ course, onGoToCourse }: CourseCardProps) => {
    return (
        <Card
            className="flex flex-col w-full h-[340px] xl:h-[380px] border-none bg-customgreys-primarybg overflow-hidden cursor-pointer hover:bg-white-100/10 transition duration-200 group"
            onClick={() => onGoToCourse(course)}
        >
            <CardHeader className="h-[350px] xl:h-[380px] p-0 overflow-hidden">
                <Image
                    src={course.image || "/placeholder.png"}
                    alt={course.title}
                    width={400}
                    height={350}
                    className="w-full h-full object-cover transition-transform"
                    priority
                />
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between w-full h-full p-6">
                <CardTitle className="text-md lg:text-lg font-semibold line-clamp-2">
                    {course.title}: {course.description}
                </CardTitle>

                <div className="flex items-center gap-2">
                    <Avatar className="w-6 h-6">
                        <AvatarImage alt={course.teacherName} />
                        <AvatarFallback className="bg-secondary-700 text-black">
                            {course.teacherName[0]}
                        </AvatarFallback>
                    </Avatar>

                    <p className="text-sm text-customgreys-dirtyGrey">
                        {course.teacherName}
                    </p>
                </div>

                <CardFooter className="p-0 flex justify-between">
                    <div className="text-sm bg-customgreys-secondarybg rounded-full px-3 py-2 text-gray-400">
                        {course.category}
                    </div>
                    <span className="text-primary-500 font-bold text-md">
                        {formatPrice(course.price)}
                    </span>
                </CardFooter>
            </CardContent>
        </Card>
    );
};

export default CourseCard;
