/** @format */
"use client";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import { useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";
import ChaptersSidebar from "./user/courses/[courseId]/ChapterSidebar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [courseId, setCourseId] = useState<string | null>(null);
    const { user, isLoaded } = useUser();

    const isCoursePage =
        /^\/user\/courses\/[^\/]+(?:\/chapters\/[^\/]+)?$/.test(pathname);

    useEffect(() => {
        if (isCoursePage) {
            const match = pathname.match(/\/user\/courses\/([^\/]+)/);
            setCourseId(match ? match[1] : null);
        } else {
            setCourseId(null);
        }
    }, [isCoursePage, pathname]);

    if (!isLoaded) return <Loading />;
    if (!user) return <div>Please sign in to access this page.</div>;
    // handle use effect isCoursePage
    if (!isLoaded) return <Loading />;
    if (!user)
        return (
            <div className="text 3xl text-center">
                Please sign in to access this page
            </div>
        );

    return (
        <SidebarProvider>
            <div className="min-h-screen w-full bg-customgreys-primarybg flex">
                <AppSidebar />
                <div className=" flex flex-1 overflow-hidden">
                    {courseId && <ChaptersSidebar />}
                    <div
                        className={cn(
                            "flex-grow min-h-screen transition-all duration-500 ease-in-out overflow-y-auto bg-customgreys-secondarybg",
                            isCoursePage && "bg-gray-900"
                        )}
                        style={{ height: "100vh" }}
                    >
                        <Navbar isCoursePage={isCoursePage} />
                        <main className="px-8 py-4">{children}</main>
                    </div>{" "}
                </div>
            </div>
        </SidebarProvider>
    );
}
