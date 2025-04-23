/** @format */

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import React from "react";

const CompletionPage = () => {
    return (
        <div className="flex flex-col h-full items-center justify-center bg-background text-foreground">
            {" "}
            <div className="text-center">
                <div className=" mb-4 rounded-full bg-green-500 p-3 inline-flex items-center justify-center">
                    {" "}
                    <Check className="w-16 h-16" />
                </div>
            </div>
            <div className="mb-1">
                <p>Need help? Contact our {""}</p>
                <Button>
                    <a
                        href="maito:support@example"
                        className="text-blue-500 underline"
                    >
                        {" "}
                        couster support
                    </a>
                </Button>
            </div>
            <div className="mt-2 flex justify-center bg-blue-700 rounded-lg px-4 py-2 hover:bg-secondary-600 cursor-pointer">
                {" "}
                <Link scroll={false} href={"/user/courses"}>
                    Go to Courses
                </Link>
            </div>
        </div>
    );
};

export default CompletionPage;
