import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonOutline from "./misc/ButtonOutline.";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Pricing2 = () => {
    
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (

    <div
      className="bg-white-500 w-full py-14"
      id="pricing2"
    >

  <div className="mx-auto px-5 md:max-w-screen-lg">
    <h1 className="pt-16 pb-5 text-center text-5xl font-semibold">Stay ahead of the curve</h1>
    <p className="pb-10 text-center text-sm uppercase text-gray-700">Stand out from the crowd with real-world skills and accelerate your career.</p>
  </div>
  <div className="mx-auto mt-4 justify-center px-4 leading-8 md:flex md:max-w-screen-lg">
    <div className="relative self-center md:w-1/3 lg:mr-6 lg:self-auto">
      <div className="relative mt-8 mb-12 w-full self-center lg:mr-6 lg:self-auto">
        <div id="" className="relative flex flex-col overflow-hidden rounded-md border border-gray-400 bg-white shadow-none">
          <div className="relative flex h-full flex-col items-center px-4">
            <div className="flex w-full flex-col items-center pb-6">
              <p className="m-6 text-center text-xl font-semibold">Standard</p>
              <div className="mb-4 items-baseline">
                <p className="text-center text-sm font-light text-gray-600 line-through">$14.99</p>
                <div className="flex items-baseline justify-center">
                  <p className="text-4xl font-semibold text-gray-800">$8</p>
                  <p className="text-2xl font-semibold text-gray-800">.99</p>
                  <p className="ml-1 text-lg tracking-wide">/ month</p>
                </div>
                <p className="mt-1 text-center font-light text-gray-600"><span className="mr-2">discounted price</span></p>
              </div>
              <p className="text-center text-base">$215 billed every 2 years</p>
            </div>
            <button className="flex w-full cursor-pointer items-center justify-center overflow-visible rounded-sm border border-gray-400 bg-transparent p-3 text-center text-sm font-bold normal-case leading-normal tracking-wide text-gray-900 duration-200 hover:border-indigo-600 hover:bg-indigo-600 hover:text-gray-100" id="buyNowTwo Year Plan-200-lg">Get Started</button
            ><button className="mt-4 flex h-6 cursor-pointer items-center justify-center overflow-visible rounded-full bg-transparent p-3 text-center text-sm font-normal normal-case leading-normal tracking-wide duration-200">
              <p id="choose-annual-standard-plan" className="my-2 text-gray-600 underline">Choose annual plan</p>
            </button>
            <div className="flex w-full flex-col">
              <div className="my-6 mx-4 self-center">
                <div className="mb-3 flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-5 w-5 flex-shrink-0 p-px text-indigo-600">
                    <polyline points="20 6 9 17 4 12" className=""></polyline></svg
                  ><span className="ml-2 text-base">24 months of unlimited access</span>
                </div>
                <div className="mb-3 flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-5 w-5 flex-shrink-0 p-px text-indigo-600">
                    <polyline points="20 6 9 17 4 12" className=""></polyline></svg
                  ><span className="ml-2 text-base">New courses every week</span>
                </div>
                <div className="mb-3 flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-5 w-5 flex-shrink-0 p-px text-indigo-600">
                    <polyline points="20 6 9 17 4 12" className=""></polyline></svg
                  ><span className="ml-2 text-base">Completion certificates</span>
                </div>
                <div className="mb-3 flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-5 w-5 flex-shrink-0 p-px text-indigo-600">
                    <polyline points="20 6 9 17 4 12" className=""></polyline></svg
                  ><span className="ml-2 text-base">Skill assessments</span>
                </div>
                <div className="mb-3 flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-5 w-5 flex-shrink-0 p-px text-indigo-600">
                    <polyline points="20 6 9 17 4 12" className=""></polyline></svg
                  ><span className="ml-2 text-base"> Early access to new courses</span>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col"></div>
          </div>
        </div>
        <div className="flex w-full items-center justify-center"></div>
      </div>
    </div>
    <div className="relative self-center md:w-1/3 lg:mr-6 lg:self-auto">
      <div className="">
        <div className="relative mb-12 w-full self-center lg:mr-6 lg:self-auto">
          <div className="shadow-xs relative flex flex-col overflow-hidden rounded-md border border-gray-400 bg-white">
            <div className="flex h-8 items-center justify-center bg-teal-200 p-2">
              <span className="text-xs font-semibold uppercase leading-4 text-green-900">best for learning</span>
            </div>
            <div className="relative flex h-full flex-col items-center px-4">
              <div className="flex w-full flex-col items-center pb-6">
                <p className="m-6 text-center text-xl font-semibold text-indigo-600">Premium</p>
                <div className="mb-4 items-baseline">
                  <p className="text-center text-sm font-light text-gray-600 line-through">$24.99</p>
                  <div className="flex items-baseline justify-center">
                    <p className="text-4xl font-semibold text-indigo-600">$14</p>
                    <p className="text-2xl font-semibold text-indigo-600">.99</p>
                    <p className="ml-1 text-lg tracking-wide">/ month</p>
                  </div>
                  <p className="mt-1 text-center font-light text-gray-600"><span className="mr-2">discounted price</span></p>
                </div>
                <p className="text-center text-base">$179 billed annually</p>
              </div>
              <button className="flex w-full cursor-pointer items-center justify-center overflow-visible rounded-sm border-indigo-600 bg-indigo-600 p-3 text-center text-sm font-bold normal-case leading-normal tracking-wide text-gray-100 duration-200" id="buyNowAnnual-300-lg">Get Started</button
              ><button className="mt-4 flex h-6 cursor-pointer items-center justify-center overflow-visible rounded-full bg-gray-100 py-3 pl-3 text-center text-sm font-normal normal-case leading-normal tracking-wide duration-200">
                <p id="choose-two-year-premium-plan" className="my-2 text-gray-600 underline">Choose 2 year plan</p>
                <span className="ml-2 h-6 rounded-full border border-indigo-200 bg-blue-100 px-2 pt-1 text-xs leading-4 text-blue-800 no-underline">Save 16%</span>
              </button>
              <div className="flex w-full flex-col">
                <div className="my-6 mx-4 self-center">
                  <div className="mb-3 flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-5 w-5 flex-shrink-0 p-px text-indigo-600">
                      <polyline points="20 6 9 17 4 12" className=""></polyline></svg
                    ><span className="ml-2 text-base">12 months of unlimited access</span>
                  </div>
                  <div className="mb-3 flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-5 w-5 flex-shrink-0 p-px text-indigo-600">
                      <polyline points="20 6 9 17 4 12" className=""></polyline></svg
                    ><span className="ml-2 text-base">New courses every week</span>
                  </div>
                  <div className="mb-3 flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-5 w-5 flex-shrink-0 p-px text-indigo-600">
                      <polyline points="20 6 9 17 4 12" className=""></polyline></svg
                    ><span className="ml-2 text-base">Completion certificates</span>
                  </div>
                  <div className="mb-3 flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-5 w-5 flex-shrink-0 p-px text-indigo-600">
                      <polyline points="20 6 9 17 4 12" className=""></polyline></svg
                    ><span className="ml-2 text-base">Skill assessments</span>
                  </div>
                  <div className="mb-3 flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-5 w-5 flex-shrink-0 p-px text-indigo-600">
                      <polyline points="20 6 9 17 4 12" className=""></polyline></svg
                    ><span className="ml-2 text-base">Early access to new courses</span>
                  </div>
                  <div className="mb-3 flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-5 w-5 flex-shrink-0 p-px text-indigo-600">
                      <polyline points="20 6 9 17 4 12" className=""></polyline></svg
                    ><span className="ml-2 text-base">Projects</span>
                    <div className="mt-1 ml-1 flex items-center text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4">
                        <circle cx="12" cy="12" r="10" className=""></circle>
                        <line x1="12" y1="16" x2="12" y2="12" className=""></line>
                        <line x1="12" y1="8" x2="12.01" y2="8" className=""></line>
                      </svg>
                    </div>
                  </div>
                  <div className="mb-3 flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-5 w-5 flex-shrink-0 p-px text-indigo-600">
                      <polyline points="20 6 9 17 4 12" className=""></polyline></svg
                    ><span className="ml-2 text-base">Personalized learning </span>
                    <div className="mt-1 ml-1 flex items-center text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4">
                        <circle cx="12" cy="12" r="10" className=""></circle>
                        <line x1="12" y1="16" x2="12" y2="12" className=""></line>
                        <line x1="12" y1="8" x2="12.01" y2="8" className=""></line>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col"></div>
            </div>
          </div>
          <div className="flex w-full items-center justify-center"></div>
        </div>
      </div>
    </div>
    <div className="relative mt-8 mb-12 w-full self-center md:w-1/3 lg:mr-6 lg:self-auto">
      <div id="" className="relative flex flex-col overflow-hidden rounded-md border border-gray-400 bg-white shadow-none">
        <div className="relative flex h-full flex-col items-center px-4">
          <div className="flex w-full flex-col items-center pb-6">
            <p className="m-6 text-center text-xl font-semibold">Monthly</p>
            <div className="mb-4 items-baseline">
              <p className="text-center text-sm font-light text-gray-600 line-through">$59</p>
              <div className="flex items-baseline justify-center">
                <p className="text-4xl font-semibold text-gray-800">$35</p>
                <p className="ml-1 text-lg tracking-wide">/ month</p>
              </div>
              <p className="mt-1 text-center font-light text-gray-600"><span className="mr-2">discounted price</span></p>
            </div>
            <p className="text-center text-base">billed every month</p>
          </div>
          <button className="flex w-full cursor-pointer items-center justify-center overflow-visible rounded-sm border border-gray-400 bg-transparent p-3 text-center text-sm font-bold normal-case leading-normal tracking-wide text-gray-900 duration-200 hover:border-indigo-600 hover:bg-indigo-600 hover:text-gray-100" id="buyNowMonthly-100-lg">Get Started</button>
          <p className="mt-4"></p>
          <div className="flex w-full flex-col">
            <div className="my-6 mx-4 self-center">
              <div className="mb-3 flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-5 w-5 flex-shrink-0 p-px text-indigo-600">
                  <polyline points="20 6 9 17 4 12" className=""></polyline></svg
                ><span className="ml-2 text-base">1 months of unlimited access</span>
              </div>
              <div className="mb-3 flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-5 w-5 flex-shrink-0 p-px text-indigo-600">
                  <polyline points="20 6 9 17 4 12" className=""></polyline></svg
                ><span className="ml-2 text-base"> New courses every week</span>
              </div>
              <div className="mb-3 flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-5 w-5 flex-shrink-0 p-px text-indigo-600">
                  <polyline points="20 6 9 17 4 12" className=""></polyline></svg
                ><span className="ml-2 text-base">Completion certificates</span>
              </div>
              <div className="mb-3 flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-5 w-5 flex-shrink-0 p-px text-indigo-600">
                  <polyline points="20 6 9 17 4 12" className=""></polyline></svg
                ><span className="ml-2 text-base">Skill assessments</span>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col"></div>
        </div>
      </div>
      <div className="flex w-full items-center justify-center"></div>
    </div>
  </div>
    </div>
);
  
};

export default Pricing2;
