/** @format */

import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "./ui/accordion";
import { FileText } from "lucide-react";

function AccordionSections({ sections }: AccordionSectionsProps) {
    return (
        <Accordion type="multiple" className="w-full">
            {sections.map((section) => (
                <AccordionItem
                    key={section.sectionId}
                    value={section.sectionTitle}
                    className="border-x border-b border-gray-600 overflow-hidden "
                >
                    <AccordionTrigger
                        className="hover:bg-gray-700/50 bg-customgreys-primarybg/50 px-4 py-3;
"
                    >
                        <h5>{section.sectionTitle}</h5>
                    </AccordionTrigger>
                    <AccordionContent className="bg-customgreys-secondarybg/50 px-4 py-4">
                        {" "}
                        <ul>
                            {section.chapters.map((chapter) => (
                                <li
                                    key={chapter.chapterId}
                                    className="flex items-center text-gray-400/90 py-1"
                                >
                                    <FileText className="mr-2 w-4 h-4" />
                                    <span>{chapter.title}</span>
                                </li>
                            ))}
                        </ul>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}

export default AccordionSections;
