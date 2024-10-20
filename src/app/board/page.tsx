"use client";

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { BotMessageSquare, SendHorizontal, User, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import LogoGenerator from "../components/LogoGenerator";
import ColorGenerator from "../components/ColorGenerator";
import NamePhraseGenerator from "../components/NamePhraseGenerator";
import SocialsGenerator from "../components/SocialsGenerator";

const generatorTypes = {
    'NamePhrase': NamePhraseGenerator,
    'Logo': LogoGenerator,
    'Color': ColorGenerator,
};

const Page = () => {
    const [showChat, setShowChat] = useState(false);
    const [showSocials, setShowSocials] = useState(false);
    const [chat, setChat] = useState<{ id: string, type: string, message: string }[]>([]);
    const [generators, setGenerators] = useState<{ id: string; type: string }[]>([]);
    const [question, setQuestion] = useState<string>("");

    async function chatWithBot(message: string) {
        setChat(prev => [...prev, { id: Date.now().toString(), type: "user", message }]);

        console.log([...chat, { type: "user", message }].map(msg => typeof msg === 'string' ? msg : msg.message))
        const response = await fetch("/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ chat: [...chat, { type: "user", message }].map(msg => typeof msg === 'string' ? msg : msg.message) }),
        });

        const data = await response.json() as { response: string };
        setChat(prev => [...prev, { id: Date.now().toString(), type: "bot", message: data.response }]);
        setQuestion("");
    }

    return (
        <main className="min-w-screen min-h-screen flex flex-row max-h-screen">
            <Sidebar setShowSocials={setShowSocials} setGenerators={setGenerators} />

            <div className="flex-1 p-4 relative overflow-hidden">
                {generators.map((gen) => {
                    const GeneratorComponent = generatorTypes[gen.type as keyof typeof generatorTypes];
                    return (
                        <GeneratorComponent id={gen.id} key={gen.id} setGenerators={setGenerators} />
                    );
                })}

                <AnimatePresence>
                    <SocialsGenerator showSocials={showSocials} setShowSocials={setShowSocials} />

                    {
                        !showChat && (
                            <motion.button
                                key="chat-button"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                onClick={() => setShowChat(true)} className="absolute bottom-3 right-3 rounded-full bg-blue-700 aspect-square p-4 z-10"
                            >
                                <BotMessageSquare color="white" />
                            </motion.button>
                        )
                    }

                    {showChat && (
                        <motion.div
                            key="chat-window"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="absolute bottom-2 right-2 w-[350px] h-[400px] overflow-y-scroll rounded-md border-2 border-slate-200 flex flex-col z-10 bg-white"
                        >
                            <div className="w-full p-2 flex justify-between">
                                <div className="flex flex-row gap-2 items-center">
                                    <BotMessageSquare color="#1d4ed8" />
                                    <h3 className="text-lg">Dave</h3>
                                </div>

                                <button onClick={() => setShowChat(false)}>
                                    <X />
                                </button>
                            </div>
                            <hr />
                            <div className="flex flex-col flex-1 relative">
                                <div className="flex-1 p-2">
                                    <div className="gap-2 flex flex-col">
                                        {chat.map((msg) => (
                                            <div key={msg.id} className={`flex flex-row gap-2`}>
                                                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center aspect-square">
                                                    {msg.type === "bot" ? <BotMessageSquare color="#1d4ed8" /> : <User />}
                                                </div>
                                                <div className={`p-2 rounded-md ${msg.type === "bot" ? "bg-slate-400" : "bg-blue-700"} text-white`}>
                                                    <p>{msg.message}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="sticky bottom-1 mx-1 h-[50px] border-2 border-slate-200 rounded-md flex flex-row items-center bg-white">
                                    <textarea className="resize-none h-full p-1 flex-1 border-transparent focus:border-transparent focus:ring-0" value={question} onChange={(e) => setQuestion(e.target.value)}></textarea>
                                    <button className="h-full" onClick={() => chatWithBot(question)}>
                                        <SendHorizontal className="mx-2" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}

                </AnimatePresence>
            </div>
        </main>
    );
}

export default Page;