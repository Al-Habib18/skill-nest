/** @format */

"use client";

import { useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import ReactPlayer from "react-player";
import Loading from "@/components/Loading";
import { useCourseProgressData } from "@/hooks/useCourseProgressData";

const Course = () => {
    const {
        user,
        course,
        userProgress,
        currentSection,
        currentChapter,
        isLoading,
        isChapterCompleted,
        updateChapterProgress,
        hasMarkedComplete,
        setHasMarkedComplete,
    } = useCourseProgressData();
    console.log("currentChapter.video:", currentChapter);

    const playerRef = useRef<ReactPlayer>(null);

    const handleProgress = ({ played }: { played: number }) => {
        if (
            played >= 0.8 &&
            !hasMarkedComplete &&
            currentChapter &&
            currentSection &&
            userProgress?.sections &&
            !isChapterCompleted()
        ) {
            setHasMarkedComplete(true);
            updateChapterProgress(
                currentSection.sectionId,
                currentChapter.chapterId,
                true
            );
        }
    };

    if (isLoading) return <Loading />;
    if (!user) return <div>Please sign in to view this course.</div>;
    if (!course || !userProgress) return <div>Error loading course</div>;

    return (
        <div className="flex h-[100vh]">
            <div className="flex-grow mx-auto">
                <div className="mb-6">
                    <div className="text-customgreys-dirtyGrey text-sm mb-2">
                        {course.title} / {currentSection?.sectionTitle} /{" "}
                        <span className="text-gray-400">
                            {currentChapter?.title}
                        </span>
                    </div>
                    <h2 className="course__title">{currentChapter?.title}</h2>
                    <div className="flex items-center justify-between">
                        <div className="relative mr-2 flex items-center gap-2">
                            <Avatar className=" w-10 h-10">
                                <AvatarImage alt={course.teacherName} />
                                <AvatarFallback className="bg-secondary-700 text-black ">
                                    {course.teacherName[0]}
                                </AvatarFallback>
                            </Avatar>
                            <span className="text-customgreys-dirtyGrey text-sm font-[500] ">
                                {course.teacherName}
                            </span>
                        </div>
                    </div>
                </div>

                <Card className="mb-6 !border-none">
                    <CardContent className="h-[50vh] flex justify-center items-center p-0 m-0">
                        {currentChapter?.video ? (
                            <ReactPlayer
                                ref={playerRef}
                                url={currentChapter.video as string}
                                controls
                                width="100%"
                                height="100%"
                                onProgress={handleProgress}
                                config={{
                                    file: {
                                        attributes: {
                                            controlsList: "nodownload",
                                        },
                                    },
                                }}
                            />
                        ) : (
                            <div className="text-center text-gray-500">
                                No video available for this chapter.
                            </div>
                        )}
                    </CardContent>
                </Card>

                <div className="flex gap-4 mt-12">
                    <Tabs defaultValue="Notes" className="w-full md:w-2/3">
                        <TabsList className="flex justify-start gap-10 ">
                            <TabsTrigger
                                className=" text-md w-20"
                                value="Notes"
                            >
                                Notes
                            </TabsTrigger>
                            <TabsTrigger
                                className=" text-md w-20"
                                value="Resources"
                            >
                                Resources
                            </TabsTrigger>
                            <TabsTrigger className=" text-md w-20" value="Quiz">
                                Quiz
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent className="mt-5 " value="Notes">
                            <Card className="!border-none shadow-none">
                                <CardHeader className="p-2">
                                    <CardTitle>Notes Content</CardTitle>
                                </CardHeader>
                                <CardContent className="p-2 ">
                                    {currentChapter?.content}
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent className="mt-5 " value="Resources">
                            <Card className="!border-none shadow-none">
                                <CardHeader className=" p-2">
                                    <CardTitle>Resources Content</CardTitle>
                                </CardHeader>
                                <CardContent className=" p-2">
                                    {/* Add resources content here */}
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent className="mt-5" value="Quiz">
                            <Card className="!border-none shadow-none">
                                <CardHeader className=" p-2">
                                    <CardTitle>Quiz Content</CardTitle>
                                </CardHeader>
                                <CardContent className=" p-2">
                                    {/* Add quiz content here */}
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>

                    <Card className="w-1/3 h-min border-none bg-white-50/5 p-10 bg-customgreys-secondarybg">
                        <CardContent className="flex flex-col items-start p-0 px-4">
                            <div className="flex items-center gap-3 flex-shrink-0 mb-7">
                                <Avatar className="w-10 h-10">
                                    <AvatarImage alt={course.teacherName} />
                                    <AvatarFallback className="bg-secondary-700 text-black">
                                        {course.teacherName[0]}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col items-start">
                                    <h4 className="text-lg font-medium ">
                                        {course.teacherName}
                                    </h4>
                                    <p className="text-sm">
                                        Senior UX Designer
                                    </p>
                                </div>
                            </div>
                            <div className="text-sm">
                                <p>
                                    A seasoned Senior UX Designer with over 15
                                    years of experience in creating intuitive
                                    and engaging digital experiences. Expertise
                                    in leading UX design projects.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Course;
