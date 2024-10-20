"use client"

import { useState } from "react";




const Page = () => {
    
     //Maybe use this to transition to the finance prompt
    const [plan, setPlan] = useState(true)
    const [businessPlan, setBusinessPlan] = useState("")
    const [finance, setFinance] = useState(false)
    const [financePlan, setFinancePlan] = useState("")
    const [legal, setLegal] = useState(false)
    const [legalPlan, setLegalPlan] = useState(false)
    const [products, setProducts] = useState(false)
    const [prodPlan, setProdPlan] = useState("")

    const GoToFinance = () => {
        setPlan(false)
        setFinance(true)
    }

    const GoToLegal = () => {
        setFinance(false)
        setLegal(true)
    }

    const GoToProd = () => {
        setLegal(false)
        setProducts(true)
    }

    if(plan == true && finance == false && legal == false && products == false){
        return ( 
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
                        rows= {6}
                        placeholder="What is your idea..."
                        onChange={e => {setBusinessPlan(e.target.value)}}
                        value={businessPlan}></textarea>

                        <div className="flex items-center justify-end gap-2 bg-white p-3">

                        
                        <button
                            type="button"
                            className="rounded bg-[#4ECDC4] px-3 py-1.5 text-sm font-medium text-white hover:bg-[#1A535C]"
                            onClick={() => GoToFinance()}
                            >
                            Next
                        </button>
                        
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    }
    else if(finance == true && plan == false && legal == false && products == false)
    {
        return ( 
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
                            onChange={e => {setFinancePlan(e.target.value)}}
                            value={financePlan}></textarea>
    
                            <div className="flex items-center justify-end gap-2 bg-white p-3">
    
                            
                            <button
                                type="button"
                                className="rounded bg-[#4ECDC4] px-3 py-1.5 text-sm font-medium text-white hover:bg-[#1A535C]"
                                onClick={() => GoToLegal()}
                                >
                                Next
                            </button>
                                
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else if(legal == true && plan == false && finance == false && products == false){
        return ( 
            <div className="flex bg-gradient-to-br from-[#5BAAB8] to-[#FF6B6B] w-screen h-screen">
                
                <div className="flex-a  m-auto w-2/5 h-3/5 rounded-xl">
                    <div className="">
                        <div className="text-center text-3xl text-white pt-10">Third Question!</div>
                        <div className="text-center text-xl text-white py-5">Are you educated on the legality of owning a business??</div>
    
                        <div className="p-4 mb-0">
                        <label htmlFor="OrderNotes" className="sr-only">Order notes</label>
                        <div
                            className="overflow-hidden rounded-lg  shadow-sm  "
                        >
                               
                            <div className="flex items-center justify-center gap-2">
                            <label
                            htmlFor="AcceptConditions"
                            className="relative inline-block h-8 w-14 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-green-500"
                            >
                            <input type="checkbox" id="AcceptConditions" className="peer sr-only" 
                            onChange={e => setLegalPlan(e.target.checked)}
                            />
                            

                            <span
                                className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-white transition-all peer-checked:start-6"
                            ></span>
                            </label>
                            <button
                                type="button"
                                className="rounded bg-[#4ECDC4] px-3 py-1.5 text-sm font-medium text-white hover:bg-[#1A535C]"
                                onClick={() => GoToProd()}
                                >
                                Next
                            </button>
                                
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else if(products == true && plan == false && legal == false && finance == false){
        return ( 
            <div className="flex bg-gradient-to-br from-[#5BAAB8] to-[#FF6B6B] w-screen h-screen">
                
                <div className="flex-a  m-auto w-2/5 h-3/5 rounded-xl">
                    <div className="">
                        <div className="text-center text-3xl text-white pt-10">Finally!</div>
                        <div className="text-center text-xl text-white py-5">What is the main product or service you are offering?</div>
    
                        <div className="p-4 mb-0">
                        <label htmlFor="OrderNotes" className="sr-only">Order notes</label>
                        <div
                            className="overflow-hidden rounded-lg border border-gray-200 shadow-sm focus-within:border-white focus-within:ring-1 "
                        >
                            <textarea
                            id="OrderNotes"
                            className="w-full resize-none border-none align-top focus:ring-0 sm:text-sm p-2"
                            rows={6}
                            placeholder="List your products or services..."
                            onChange={e => {setProdPlan(e.target.value)}}
                            value={prodPlan}></textarea>
    
                            <div className="flex items-center justify-end gap-2 bg-white p-3">
    
                            
                            <button
                                type="button"
                                className="rounded bg-[#4ECDC4] px-3 py-1.5 text-sm font-medium text-white hover:bg-[#1A535C]"
                                onClick={() => GoToProd()}
                                >
                                Next
                            </button>
                                
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else{
        <div className="grid h-screen place-content-center bg-white px-4 dark:bg-gray-900">
            <h1 className="uppercase tracking-widest text-gray-500 dark:text-gray-400">404 | Not Found</h1>
        </div>
    }
}


export default Page;