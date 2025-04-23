/** @format */

import React from "react";
import { useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { courseCategories } from "@/lib/utils";

const Toolbar = ({ onSearch, onCategoryChange }: ToolbarProps) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (value: string) => {
        setSearchTerm(value);
        onSearch(value);
    };

    return (
        <div className="flex items-center justify-between gap-4 w-full mb-4">
            {" "}
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search..."
                className="w-full px-5 h-12 bg-gray-500 placeholder-gray-100 text-white border-none rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            />
            <Select onValueChange={onCategoryChange}>
                <SelectTrigger className="h-12 w-[180px] p-2  bg-gray-600 text-customgreys-dirtyGrey border-none">
                    <SelectValue placeholder="Category" className="p-2" />
                </SelectTrigger>
                <SelectContent className="bg-black hover:bg-black">
                    <SelectItem
                        value="all"
                        className="cursor-pointer p-2 border-b-1 border-gray-600 hover:!bg-gray-400 hover:!text-customgreys-darkGrey"
                    >
                        All Categories
                    </SelectItem>{" "}
                    {courseCategories.map((category) => (
                        <SelectItem
                            key={category.value}
                            value={category.value}
                            className="cursor-pointer p-2 border-b-1 border-gray-600 hover:!bg-gray-400 hover:!text-customgreys-darkGrey"
                        >
                            {category.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
};

export default Toolbar;
