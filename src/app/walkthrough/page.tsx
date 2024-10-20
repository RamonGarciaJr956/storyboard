"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
    const [count, setCount] = useState(1)
    const [businessPlan, setBusinessPlan] = useState("")
    const [financePlan, setFinancePlan] = useState("")
    const [legalPlan, setLegalPlan] = useState(false)
    const [prodPlan, setProdPlan] = useState("")
    const router = useRouter()

    async function handleSubmit() {
        const data = {
            businessPlan,
            financePlan,
            legalPlan,
            prodPlan
        }
        console.log(data)

        const res = await fetch("/api/register/business", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        if (res.ok) {
            router.push("/board")
        }
    }

    return (
        <>
            {count == 1 && (
                <div className="flex bg-gradient-to-br from-[#5BAAB8] to-[#FF6B6B] w-screen h-screen">

                    <div className="flex-a  m-auto w-2/5 h-3/5 rounded-xl">
                        <div className="">
                            <div className="text-center text-3xl text-white pt-10">Welcome!</div>
                            <div className="text-center text-xl text-white py-5">What kind of business do you plan on creating?</div>

                            <div className="p-4 mb-0">
                                <label htmlFor="OrderNotes" className="sr-only">Order notes</label>
                                <div
                                    className="overflow-hidden rounded-lg border border-gray-200 shadow-sm focus-within:border-white focus-within:ring-1 "
                                >
                                    <textarea
                                        id="OrderNotes"
                                        className="w-full resize-none border-none align-top focus:ring-0 sm:text-sm p-2"
                                        rows={6}
                                        placeholder="What is your idea..."
                                        onChange={e => { setBusinessPlan(e.target.value) }}
                                        value={businessPlan}></textarea>

                                    <div className="flex items-center justify-end gap-2 bg-white p-3">

                                        <button
                                            type="button"
                                            className="rounded bg-[#4ECDC4] px-3 py-1.5 text-sm font-medium text-white hover:bg-[#1A535C]"
                                            onClick={() => setCount(prev => prev + 1)}
                                        >
                                            Next
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {count == 2 && (
                <div className="flex bg-gradient-to-br from-[#5BAAB8] to-[#FF6B6B] w-screen h-screen">

                    <div className="flex-a  m-auto w-2/5 h-3/5 rounded-xl">
                        <div className="">
                            <div className="text-center text-3xl text-white pt-10">Next Up!</div>
                            <div className="text-center text-xl text-white py-5">How much are you willing to invest into the business?</div>

                            <div className="p-4 mb-0">
                                <label htmlFor="OrderNotes" className="sr-only">Order notes</label>
                                <div
                                    className="overflow-hidden rounded-lg border border-gray-200 shadow-sm focus-within:border-white focus-within:ring-1 "
                                >
                                    <textarea
                                        id="OrderNotes"
                                        className="w-full resize-none border-none align-top focus:ring-0 sm:text-sm p-2"
                                        rows={6}
                                        placeholder="How much are you putting in..."
                                        onChange={e => { setFinancePlan(e.target.value) }}
                                        value={financePlan}></textarea>

                                    <div className="flex items-center justify-end gap-2 bg-white p-3">

                                        <button
                                            type="button"
                                            className="rounded bg-[#4ECDC4] px-3 py-1.5 text-sm font-medium text-white hover:bg-[#1A535C]"
                                            onClick={() => setCount(prev => prev - 1)}
                                        >
                                            Back
                                        </button>

                                        <button
                                            type="button"
                                            className="rounded bg-[#4ECDC4] px-3 py-1.5 text-sm font-medium text-white hover:bg-[#1A535C]"
                                            onClick={() => setCount(prev => prev + 1)}
                                        >
                                            Next
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {count == 3 && (
                <div className="flex bg-gradient-to-br from-[#5BAAB8] to-[#FF6B6B] w-screen h-screen">

                    <div className="flex-a  m-auto w-2/5 h-3/5 rounded-xl">
                        <div className="">
                            <div className="text-center text-3xl text-white pt-10">Third Question!</div>
                            <div className="text-center text-xl text-white py-5">Are you educated on the legality of owning a business??</div>

                            <div className="p-4 mb-0">
                                <label htmlFor="OrderNotes" className="sr-only">Order notes</label>
                                <div
                                    className="overflow-hidden rounded-lg  "
                                >

                                    <div className="flex flex-col items-center justify-center gap-2">
                                        <label
                                            htmlFor="AcceptConditions"
                                            className="relative inline-block h-8 w-14 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-green-500"
                                        >
                                            <input
                                                type="checkbox"
                                                id="AcceptConditions"
                                                className="peer sr-only"
                                                checked={legalPlan}
                                                onChange={e => setLegalPlan(e.target.checked)}
                                            />


                                            <span
                                                className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-white transition-all peer-checked:start-6"
                                            ></span>
                                        </label>

                                        <div className="flex flex-row gap-2 mt-2">
                                            <button
                                                type="button"
                                                className="rounded bg-[#4ECDC4] px-3 py-1.5 text-sm font-medium text-white hover:bg-[#1A535C]"
                                                onClick={() => setCount(prev => prev - 1)}
                                            >
                                                Back
                                            </button>

                                            <button
                                                type="button"
                                                className="rounded bg-[#4ECDC4] px-3 py-1.5 text-sm font-medium text-white hover:bg-[#1A535C]"
                                                onClick={() => setCount(prev => prev + 1)}
                                            >
                                                Next
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {count == 4 && (
                <div className="flex bg-gradient-to-br from-[#5BAAB8] to-[#FF6B6B] w-screen h-screen">

                    <div className="flex-a  m-auto w-2/5 h-3/5 rounded-xl">
                        <div className="">
                            <div className="text-center text-3xl text-white pt-10">Finally!</div>
                            <div className="text-center text-xl text-white py-5">What is the main product or service you are offering?</div>

                            <div className="p-4 mb-0">
                                <label htmlFor="OrderNotes" className="sr-only">Order notes</label>
                                <div
                                    className="overflow-hidden rounded-lg border border-gray-200 focus-within:border-white focus-within:ring-1 "
                                >
                                    <textarea
                                        id="OrderNotes"
                                        className="w-full resize-none border-none align-top focus:ring-0 sm:text-sm p-2"
                                        rows={6}
                                        placeholder="List your products or services..."
                                        onChange={e => { setProdPlan(e.target.value) }}
                                        value={prodPlan}></textarea>

                                    <div className="flex items-center justify-end gap-2 bg-white p-3">
                                        <button
                                            type="button"
                                            className="rounded bg-[#4ECDC4] px-3 py-1.5 text-sm font-medium text-white hover:bg-[#1A535C]"
                                            onClick={() => setCount(prev => prev - 1)}
                                        >
                                            Back
                                        </button>

                                        <button
                                            type="button"
                                            className="rounded bg-[#4ECDC4] px-3 py-1.5 text-sm font-medium text-white hover:bg-[#1A535C]"
                                            onClick={() => handleSubmit()}
                                        >
                                            Finish
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}


export default Page;