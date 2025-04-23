/** @format */

import Link from "next/link";
import React from "react";

function Footer() {
    return (
        <div className="p-4 bg-gray-700 justify-center items-center">
            <div className=" flex flex-grid gap-10 justify-center items-center max-w-screen-2xl w-auto">
                <p>&copy; 2025 Skill-nest, All Rights Reserved</p>
                <div className="flex flex-grid gap-4 underline">
                    {["About", "Privace Policy", "Licensing", "Contact"].map(
                        (item) => (
                            <Link
                                scroll={false}
                                key={item}
                                href={`/${item
                                    .toLowerCase()
                                    .replace(" ", "-")}`}
                                className="text-gray-300 duration-200 hover:text-gray-50"
                            >
                                {item}
                            </Link>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}

export default Footer;
