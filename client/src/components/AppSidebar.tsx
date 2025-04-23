/** @format */

import React from "react";
import { useClerk, useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "./ui/sidebar";
import {
    BookOpen,
    Briefcase,
    DollarSign,
    PanelLeft,
    Settings,
    User,
} from "lucide-react";
import Loading from "./Loading";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

const AppSidebar = () => {
    const { user, isLoaded } = useUser();
    const { signOut } = useClerk();
    const pathname = usePathname();
    const { toggleSidebar } = useSidebar();

    const navLinks = {
        student: [
            { icon: BookOpen, label: "Courses", href: "/user/courses" },
            { icon: Briefcase, label: "Billing", href: "/user/billing" },
            { icon: User, label: "Profile", href: "/user/profile" },
            { icon: Settings, label: "Settings", href: "/user/settings" },
        ],
        teacher: [
            { icon: BookOpen, label: "Courses", href: "/teacher/courses" },
            { icon: DollarSign, label: "Billing", href: "/teacher/billing" },
            { icon: User, label: "Profile", href: "/teacher/profile" },
            { icon: Settings, label: "Settings", href: "/teacher/settings" },
        ],
    };

    if (!isLoaded) return <Loading />;
    if (!user) return <div>User not found</div>;

    const userType = user?.publicMetadata?.userType as "student" | "teacher";

    const currentNavLinks = navLinks[userType];

    console.log("currentNavLinks", currentNavLinks);
    if (userType !== "student" && userType !== "teacher") {
        return <div>Invalid user type</div>;
    }

    return (
        <Sidebar
            collapsible="icon"
            style={{ height: "100vh" }}
            className="border-none shadow-lg"
        >
            <SidebarHeader>
                <SidebarMenu className="mt-5 group-data-[collapsible=icon]:mt-7">
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            size={"lg"}
                            onClick={() => toggleSidebar()}
                            className="group hover:bg-gray-500"
                        >
                            <div className="flex justify-between items-center gap-5 pl-3 pr-1 h-10 w-full group-data-[collapsible=icon]:ml-1 group-data-[collapsible=icon]:w-10 group-data-[collapsible=icon]:px-0">
                                <div className="flex items-center gap-5">
                                    <Image
                                        src="/logo.svg"
                                        width={25}
                                        height={20}
                                        alt="logo"
                                        className="transition duration-200 group-data-[collapsible=icon]:group-hover:brightness-75 w-auto"
                                    />
                                    <p className="text-lg font-extrabold group-data-[collapsible=icon]:hidden">
                                        SKILL-NEST
                                    </p>
                                </div>
                                <PanelLeft className="text-gray-400 w-5 h-5 group-data-[collapsible=icon]:hidden" />
                            </div>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarMenu className=" mt-7 gap-0">
                    {currentNavLinks?.map((link) => {
                        const isActive = pathname.startsWith(link.href);
                        return (
                            <SidebarMenuItem
                                key={link.href}
                                className={cn(
                                    "group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:py-4 hover:bg-customgreys-secondarybg",
                                    isActive && "bg-gray-800"
                                )}
                            >
                                <SidebarMenuButton
                                    asChild
                                    size={"lg"}
                                    className={cn(
                                        "gap-4 p-8 hover:bg-customgreys-secondarybg group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center",
                                        !isActive && "text-gray-300"
                                    )}
                                >
                                    <Link
                                        scroll={false}
                                        href={link.href}
                                        className="relative flex items-center hover:bg-gray-700 group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-4"
                                    >
                                        <link.icon
                                            className={
                                                isActive
                                                    ? "text-white-50"
                                                    : "text-gray-400"
                                            }
                                        ></link.icon>
                                        <span
                                            className={cn(
                                                "font-medium text-md  hover:text-white-50  ml-4 group-data-[collapsible=icon]:hidden",
                                                isActive
                                                    ? "text-white"
                                                    : "text-gray-400 "
                                            )}
                                        >
                                            {link.label}
                                        </span>
                                    </Link>
                                </SidebarMenuButton>
                                {isActive && (
                                    <div className="absolute right-0 top-0 h-full w-[4px] bg-primary-750" />
                                )}
                            </SidebarMenuItem>
                        );
                    })}
                </SidebarMenu>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                        <button
                            onClick={() => signOut()}
                            className="text-primary-700 pl-8 bg-gray-800 hover:bg-gray-700"
                        >
                            <LogOut className="mr-2 h-6 w-6" />
                            <span className="font-semibold text-md text-gray-200">
                                Logout
                            </span>
                        </button>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarFooter>
        </Sidebar>
    );
};

export default AppSidebar;
