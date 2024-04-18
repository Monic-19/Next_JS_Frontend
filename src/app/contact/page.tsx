"use client"
import React from 'react'
import { Meteors } from "@/components/ui/meteors";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";


const page = () => {
    const words = `For any queries or any type of inquiry dont hesitate, just ask whatever what you want.`;
    return (
        <div className="min-h-screen bg-black py-12 pt-36 ">
            <div className=" w-full relative max-w-xs">

                <div className="absolute inset-0 ml-[15vw] h-[75vh] w-[75vw] bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl " />

                <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-[70vh] w-[70vw] ml-[15vw] overflow-hidden rounded-2xl flex flex-col justify-end items-start gap-[5vh]">

                    <div className='lg:h-[10vh] h-[18vh] lg:w-[80%] w-full  italic text-2xl leading-loose'>
                    <TextGenerateEffect words={words} />
                    </div>

                    <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        Please Contact Us
                    </button>



                    <Meteors number={60} />
                </div>
            </div>
        </div>
    )
}

export default page