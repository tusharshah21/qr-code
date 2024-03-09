// import React from 'react'
import Frame from "../assets/Frame.png"
export default function Card1() {
  return (
    <>
    <div className="h-screen w-screen text-center mx-auto flex justify-center items-center">
    <div className="shadow-lg cardo border-black md:w-[320px] w-[89%] bg-white rounded-[20px] p-4 text-[#111111]">
        <img src={Frame} alt="blog" className="w-full rounded-lg" />
        <h1 className="text-[#1F314F] text-[22px] font-bold py-4 px-2 lg:px-1 leading-7">
        Improve your front-end skills by building projects
        </h1>
        <p className="text-[#7D889E] pb-6 leading-5 font-normal px-4 lg:px-1">
        Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </p>
        </div>
      </div>
    </>
  )
}