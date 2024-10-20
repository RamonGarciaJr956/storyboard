"use client";
import { SendHorizontal, X } from "lucide-react";
import { type Dispatch, type SetStateAction, useEffect, useState } from "react";
import Draggable from "react-draggable";

const NamePhraseGenerator = ({ id, setGenerators }: { id: string, setGenerators: Dispatch<SetStateAction<{ id: string; type: string; }[]>> }) => {
    const [prompt, setPrompt] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [companyName, setCompanyName] = useState<string>("No Company Name");
    const [compnayPhrase, setCompanyPhrase] = useState<string>("No Company Phrase");
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

    const generateName = async () => {
        setIsLoading(true);

        const response = await fetch("/api/generate/name", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ prompt }),
        });

        const data = await response.json() as { name: string };

        setCompanyName(data.name);
        setIsLoading(false);
    };

    const generatePhrase = async () => {
        setIsLoading(true);

        const response = await fetch("/api/generate/phrase", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ prompt }),
        });

        const data = await response.json() as { phrase: string };

        setCompanyPhrase(data.phrase);
        setIsLoading(false);
    };

    const generatePhraseAndName = async () => {
        await generateName();
        await generatePhrase();
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
                        <h3 className="text-lg">Name / Phrase Generator</h3>

                        <button onClick={() => setGenerators(prevGenerators => prevGenerators.filter(gen => gen.id !== id))}>
                            <X />
                        </button>
                    </div>
                    <hr />
                    <div className="p-2 flex flex-col flex-1">
                        <div className="h-[40px] border-2 border-slate-200 rounded-md flex flex-row items-center">
                            <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} className="resize-none h-full p-1 flex-1 border-transparent focus:border-transparent focus:ring-0"></textarea>
                            <button className="h-full" onClick={() => generatePhraseAndName()}>
                                <SendHorizontal className="mx-2" />
                            </button>
                        </div>
                        <div className="flex-1 flex flex-col mt-2 gap-2">
                            <div className="border-2 border-slate-200 rounded-md flex flex-col p-2">
                                <h2 className="font-semibold">Company Name:</h2>
                                {
                                    isLoading && (
                                        <p>Loading...</p>
                                    )
                                }
                                {
                                    !isLoading && (
                                        <p>{companyName}</p>
                                    )
                                }
                            </div>
                            <div className="border-2 border-slate-200 rounded-md flex flex-col p-2 flex-1">
                                <h2 className="font-semibold">Company Phrase:</h2>
                                {
                                    isLoading && (
                                        <p>Loading...</p>
                                    )
                                }
                                {
                                    !isLoading && (
                                        <p>{compnayPhrase}</p>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Draggable>
    );
}

export default NamePhraseGenerator;