"use client";
import { SendHorizontal, X } from "lucide-react";
import { type Dispatch, type SetStateAction, useEffect, useState } from "react";
import Draggable from "react-draggable";

const LogoGenerator = ({ id, setGenerators }: { id: string, setGenerators: Dispatch<SetStateAction<{ id: string; type: string; }[]>> }) => {
    const [image, setImage] = useState<string | null>(null);
    const [prompt, setPrompt] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const savedPosition = localStorage.getItem(`draggable-${id}`);
        if (savedPosition) {
            setPosition(JSON.parse(savedPosition) as { x: number, y: number });
        }
    }, [id]);

    const handleStop = (e: unknown, data: { x: number, y: number }) => {
        const newPosition = { x: data.x, y: data.y };
        setPosition(newPosition);
        localStorage.setItem(`draggable-${id}`, JSON.stringify(newPosition));
    };

    const generateLogo = async () => {
        setIsLoading(true);

        try {
            const response = await fetch("/api/generate/logo", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    prompt: prompt.trim()
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const blob = await response.blob();
            const imageUrl = URL.createObjectURL(blob);
            setImage(imageUrl);
        } catch (error) {
            console.error("Error generating logo:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Draggable
            position={position}
            onStop={handleStop}
            bounds="parent"
            handle=".drag-handle"
        >
            <div className="absolute">
                <div className="border-2 border-slate-400/50 rounded-lg flex flex-col max-h-fit bg-white drag-handle cursor-move">
                    <div className="px-2 flex flex-row justify-between p-2">
                        <h3 className="text-lg">Logo Generator</h3>

                        <button onClick={() => setGenerators(prevGenerators => prevGenerators.filter(gen => gen.id !== id))}>
                            <X />
                        </button>
                    </div>
                    <hr />
                    <div className="p-2 flex flex-col flex-1">
                        <div className="h-[40px] border-2 border-slate-200 rounded-md flex flex-row items-center">
                            <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} className="resize-none h-full p-1 flex-1 border-transparent focus:border-transparent focus:ring-0"></textarea>
                            <button className="h-full" onClick={() => generateLogo()}>
                                <SendHorizontal className="mx-2" />
                            </button>
                        </div>
                        <div className="relative overflow-hidden mt-2 border-2 border-slate-200 flex rounded-2xl flex-row flex-1 aspect-square">
                            {
                                isLoading && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                                    </div>
                                )
                            }
                            {
                                !isLoading &&
                                (
                                    image ? (
                                        <div className="relative">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src={image}
                                                alt="logo"
                                                className="h-full w-[300px] aspect-square"
                                            />
                                        </div>
                                    ) : (
                                        <div className="flex-1 p-2 w-[300px] aspect-square">
                                            No Logo generated
                                        </div>
                                    )
                                )
                            }
                        </div>

                    </div>
                </div>
            </div>
        </Draggable>
    );
}

export default LogoGenerator;