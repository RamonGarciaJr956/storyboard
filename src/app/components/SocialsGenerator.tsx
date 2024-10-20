"use client";
import { motion } from "framer-motion";
import { SendHorizontal, X } from "lucide-react";
import { type Dispatch, type SetStateAction, useState } from "react";

interface SocialTip {
    title: string;
    message: string;
}

const SocialsGenerator = ({ showSocials, setShowSocials }: { showSocials: boolean, setShowSocials: Dispatch<SetStateAction<boolean>> }) => {
    const [prompt, setPrompt] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [points, setPoints] = useState<SocialTip[]>([]);

    const generateSocials = async () => {
        setIsLoading(true);

        const response = await fetch("/api/generate/socials", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ prompt }),
        });

        if (response.ok) {
            const data = await response.json() as { points?: SocialTip[] };

            if ("points" in data) {
                setPoints(data.points ?? []);
            } else {
                console.error("Invalid response data:", data);
            }
        } else {
            console.error("Failed to fetch data:", response.statusText);
        }

        setIsLoading(false);
    };

    const variants = {
        show: {
            opacity: 1,
            display: "flex",
        },
        hide: {
            display: "none",
            opacity: 0,
        },
    };

    return (
        <motion.div
            variants={variants} animate={showSocials ? 'show' : 'hide'}
            className="absolute border-s flex flex-col w-[425px] right-0 top-0 h-screen bg-white p-2"
        >
            <div className="flex flex-row justify-between p-2">
                <h3 className="text-lg">Social Media</h3>

                <button onClick={() => setShowSocials(false)}>
                    <X />
                </button>
            </div>
            <hr />

            <div className="flex flex-row justify-between border-2 border-slate-200/50 my-2 rounded-md">
                <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} className="resize-none h-full p-1 flex-1 border-transparent focus:border-transparent focus:ring-0"></textarea>
                <button className="h-full" onClick={() => generateSocials()}>
                    <SendHorizontal className="mx-2" />
                </button>
            </div>

            {
                isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-90">
                        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-slate-400"></div>
                    </div>
                )
            }
            {
                points.length > 0 && (
                    <div className="flex flex-col flex-1 gap-2 overflow-y-scroll">
                        {
                            points.map((point, index) => (
                                <div key={index} className="p-2 border-2 border-slate-200 rounded-md">
                                    <h4 className="text-lg font-semibold">{point.title}</h4>
                                    <p>{point.message}</p>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </motion.div>
    );
}

export default SocialsGenerator;