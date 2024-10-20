"use client";

import Image from "next/image";
import { type Dispatch, type SetStateAction } from "react";

const Sidebar = ({ setShowSocials, setGenerators }: { setShowSocials: Dispatch<SetStateAction<boolean>>, setGenerators: Dispatch<SetStateAction<{ id: string; type: string; }[]>> }) => {
    return (
        <div className="flex h-screen flex-col justify-between border-e bg-white min-w-[260px]">
            <div className="px-4 py-6">
                <div className="flex flex-row items-center gap-2">
                    <Image src="/logo.svg" width={24} height={24} alt="Logo" />
                    <h2 className="text-2xl">Story Board</h2>
                </div>

                <ul className="mt-6 space-y-1">
                    <li>
                        <a
                            href="#"
                            className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                        >
                            Board
                        </a>
                    </li>

                    <li>
                        <details className="group [&_summary::-webkit-details-marker]:hidden">
                            <summary
                                className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                            >
                                <span className="text-sm font-medium"> Brand Creation </span>

                                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </span>
                            </summary>

                            <ul className="mt-2 space-y-1 px-4">
                                <li>
                                    <button
                                        onClick={() => setGenerators((prev) => [...prev, { id: `logo${prev.length + 1}`, type: 'Logo' }])}
                                        className="w-full text-left block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                    >
                                        Logo Creation
                                    </button>
                                </li>

                                <li>
                                    <button
                                        onClick={() => setGenerators((prev) => [...prev, { id: `color${prev.length + 1}`, type: 'Color' }])}
                                        className="w-full text-left block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                    >
                                        Color Creation
                                    </button>
                                </li>

                                <li>
                                    <button
                                        onClick={() => setGenerators((prev) => [...prev, { id: `name${prev.length + 1}`, type: 'NamePhrase' }])}
                                        className="w-full text-left block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                    >
                                        Name / Phrase Creation
                                    </button>
                                </li>
                            </ul>
                        </details>
                    </li>


                    <li>
                        <button
                            onClick={() => setShowSocials(true)}
                            className="w-full block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 text-left"
                        >
                            Social Media
                        </button>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                            Resources
                        </a>
                    </li>
                </ul>
            </div>

            <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
                <a href="#" className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        className="size-10 rounded-full object-cover"
                    />

                    <div>
                        <p className="text-xs">
                            <strong className="block font-medium">Eric Frusciante</strong>

                            <span> eric@frusciante.com </span>
                        </p>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Sidebar;