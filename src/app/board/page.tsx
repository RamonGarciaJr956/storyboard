"use client";

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { BotMessageSquare, SendHorizontal, X } from "lucide-react";
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

    const [generators, setGenerators] = useState([
        { id: 'name1', type: 'NamePhrase' },
        { id: 'logo1', type: 'Logo' },
        { id: 'color1', type: 'Color' }
    ]);

    return (
        <main className="min-w-screen min-h-screen flex flex-row max-h-screen">
            <Sidebar setShowSocials={setShowSocials} setGenerators={setGenerators}/>

            <div className="flex-1 p-4 relative overflow-hidden">
                {generators.map((gen) => {
                    const GeneratorComponent = generatorTypes[gen.type as keyof typeof generatorTypes];
                    return (
                        <GeneratorComponent id={gen.id} key={gen.id} setGenerators={setGenerators}/>
                    );
                })}

                <AnimatePresence>
                    <SocialsGenerator showSocials={showSocials} setShowSocials={setShowSocials} />

                    {
                        !showChat && (
                            <motion.button
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
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="absolute bottom-2 right-2 min-w-[350px] min-h-[400px] rounded-md border-2 border-slate-200 flex flex-col z-10 bg-white"
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
                            <div className="flex flex-col flex-1">
                                <div className="flex-1 p-2">
                                    ets
                                </div>
                                <div className="mx-1 mb-1 h-[50px] border-2 border-slate-200 rounded-md flex flex-row items-center">
                                    <textarea className="resize-none h-full p-1 flex-1 border-transparent focus:border-transparent focus:ring-0"></textarea>
                                    <button className="h-full">
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