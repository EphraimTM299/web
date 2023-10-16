import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonOutline from "./misc/ButtonOutline.";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import ButtonPrimary from "./misc/ButtonPrimary";

const Pricing2 = () => {

  const StandardListBenefits=[
    
      {
      benefitName:"Onsite Order Creation"
    },
      {
      benefitName:"Historic Orders Upload"
    }, {
      benefitName:"Analytics"
    }, 
      {
      benefitName:"Excel Data Export"
    }
    , 
      {
      benefitName:"Reports Export"
    }
    , 
      {
      benefitName:"Loyalty Program"
    }, {
      benefitName:"Discount System"
    }, 
      {
      benefitName:"SMS System"
    }, 
    {
      benefitName:"Online Orders Fulfilling"
    }, 
    
  ]

   const PremiumListBenefits=[
    {
      benefitName:"Standard Plan +"
    }, 
       {
      benefitName:"Staff Time Management"
    }, 
       {
      benefitName:" Advanced Analytics"
    }
    , 
    
    {
      benefitName:"Marketing Tools"
    },
    {
      benefitName:"Request Custom Analytics"
    },
       
     
  ]
    
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
<>    <div
      className="bg-white-500 w-full py-14"
      id="pricing"
    >
 <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
  <div className="mx-auto px-5 py-4 md:max-w-screen-lg">
  <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl py-2 mb-4 font-medium text-black-600 leading-relaxed"
            >
              Choose Your Plan
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
              Let's choose the package that is best for you and explore it happily
              and cheerfully.
            </motion.p>
          </ScrollAnimationWrapper>
  </div>
  <div className="mx-auto mt-4 justify-center px-4 leading-8 md:flex md:max-w-screen-lg">
    <div className="relative self-center md:w-1/3 lg:mr-6 lg:self-auto">
      <div className="relative mt-8 mb-12 w-full self-center lg:mr-6 lg:self-auto">
        <div id="" className="relative flex flex-col overflow-hidden rounded-md border border-gray-400 bg-white-500 shadow-none">
          <div className="relative flex h-full flex-col items-center px-4">
            <span className="text-xs font-semibold uppercase mt-2 leading-4 text-green-900">best for startups</span>
            <div className="flex w-full flex-col items-center pb-6">
              <p className="m-6 text-center text-xl font-semibold">Starter</p>
              <div className="mb-4 items-baseline">
                <p className="text-center text-sm font-light text-gray-600 line-through">R449.99</p>
                <div className="flex items-baseline justify-center">
                  <p className="text-4xl font-semibold text-gray-800">R219</p>
                  <p className="text-2xl font-semibold text-gray-800">.99</p>
                  <p className="ml-1 text-lg tracking-wide">/ month</p>
                </div>
                <p className="mt-1 text-center font-light text-gray-600"><span className="mr-2">discounted price</span></p>
              </div>
              <p className="text-center text-base">R219/month for 6 months</p>
            </div>
            <ButtonOutline link='/partners'>Get Started</ButtonOutline>
            {/* <button className="flex w-full cursor-pointer items-center justify-center overflow-visible rounded-xl border border-gray-400 bg-transparent p-3 text-center  text-sm font-bold normal-case leading-normal tracking-wide text-gray-900 duration-200 hover:border-blue-500 hover:bg-blue-500 hover:text-gray-100" id="buyNowTwo Year Plan-200-lg">Get Started</button> */}
            <button className="mt-4 flex h-6 cursor-pointer items-center justify-center overflow-visible rounded-full bg-transparent p-3 text-center text-sm font-normal normal-case leading-normal tracking-wide duration-200">
              {/* <p id="choose-annual-standard-plan" className="my-2 text-gray-600 underline">Choose annual plan</p> */}
            </button>
            <div className="flex w-full flex-col">
             <div className="my-6 mx-4 self-center">
                 
                   <div className="mb-3 flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 flex-shrink-0 p-px text-blue-500">
                      <polyline points="20 6 9 17 4 12" className=""></polyline></svg
                    ><span className="ml-2 text-base">Onsite Order Creation</span>
                  </div>
                 
                
                  <div className="mb-3 flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 flex-shrink-0 p-px text-blue-500">
                      <polyline points="20 6 9 17 4 12" className=""></polyline></svg
                    ><span className="ml-2 text-base">Historic Orders Upload</span>
                  </div>
                  <div className="mb-3 flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 flex-shrink-0 p-px text-blue-500">
                      <polyline points="20 6 9 17 4 12" className=""></polyline></svg
                    ><span className="ml-2 text-base">Basic Analytics</span>
                  </div>
                  <div className="mb-3 flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 flex-shrink-0 p-px text-blue-500">
                      <polyline points="20 6 9 17 4 12" className=""></polyline></svg
                    ><span className="ml-2 text-base">Excel Data Export</span>
                    <div className="mt-1 ml-1 flex items-center text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                        <circle cx="12" cy="12" r="10" className=""></circle>
                        <line x1="12" y1="16" x2="12" y2="12" className=""></line>
                        <line x1="12" y1="8" x2="12.01" y2="8" className=""></line>
                      </svg>
                    </div>
                  </div>
                
                  <div className="mb-3 flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 flex-shrink-0 p-px text-blue-500">
                      <polyline points="20 6 9 17 4 12" className=""></polyline></svg
                    ><span className="ml-2 text-base">Discount System</span>
                    <div className="mt-1 ml-1 flex items-center text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
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
    <div className="relative self-center md:w-1/3 lg:mr-6 lg:self-auto">
      <div className="">
        <div className="relative mb-12 w-full self-center lg:mr-6 lg:self-auto">
          <div className="shadow-xs relative flex flex-col overflow-hidden rounded-md border border-gray-400 bg-white">
            <div className="flex h-8 items-center justify-center bg-teal-200 p-2">
              <span className="text-xs font-semibold uppercase leading-4 text-green-900">best for growth</span>
            </div>
            <div className="relative flex h-full flex-col items-center px-4">
              <div className="flex w-full flex-col items-center pb-6">
                <p className="m-6 text-center text-xl font-semibold text-blue-500">Standard</p>
                <div className="mb-4 items-baseline">
                  <p className="text-center text-sm font-light text-gray-600 line-through">999.99</p>
                  <div className="flex items-baseline justify-center">
                    <p className="text-4xl font-semibold text-blue-500">R499</p>
                    <p className="text-2xl font-semibold text-blue-500">.99</p>
                    <p className="ml-1 text-lg tracking-wide">/ month</p>
                  </div>
                  <p className="mt-1 text-center font-light text-gray-600"><span className="mr-2">discounted price</span></p>
                </div>
                <p className="text-center text-base">R499.99/month for 6 months</p>
              </div>
              <ButtonPrimary link='/partners'>Get Started</ButtonPrimary>
              {/* <button className="flex w-full cursor-pointer items-center justify-center overflow-visible rounded-xl border-blue-500 bg-blue-500 p-3 text-center text-sm font-bold normal-case leading-normal tracking-wide text-gray-100 duration-200" id="buyNowAnnual-300-lg">Get Started</button> */}

              <div className="flex w-full flex-col">
                <div className="my-6 mx-4 self-center">
                  {StandardListBenefits.map((listItem,i)=><div className="mb-3 flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 flex-shrink-0 p-px text-blue-500">
                      <polyline points="20 6 9 17 4 12" className=""></polyline></svg
                    ><span className="ml-2 text-base">{listItem.benefitName}</span>
                  </div>
                  
                  )}
                  
                  
                </div>
              </div>
              <div className="flex w-full flex-col"></div>
            </div>
          </div>
          <div className="flex w-full items-center justify-center"></div>
        </div>
      </div>
    </div>
     <div className="relative self-center md:w-1/3 lg:mr-6 lg:self-auto">
      <div className="relative mt-8 mb-12 w-full self-center lg:mr-6 lg:self-auto">
        <div id="" className="relative flex flex-col overflow-hidden rounded-md border border-gray-400 bg-white-500 shadow-none">
          <div className="relative flex h-full flex-col items-center px-4">
               <span className="text-xs font-semibold mt-2 uppercase leading-4 text-green-900">best for growth</span>
            <div className="flex w-full flex-col items-center pb-6">
              <p className="m-6 text-center text-xl font-semibold">Premium</p>
              <div className="mb-4 items-baseline">
                <p className="text-center text-sm font-light text-gray-600 line-through">R1499.99</p>
                <div className="flex items-baseline justify-center">
                  <p className="text-4xl font-semibold text-gray-800">R749</p>
                  <p className="text-2xl font-semibold text-gray-800">.99</p>
                  <p className="ml-1 text-lg tracking-wide">/ month</p>
                </div>
                <p className="mt-1 text-center font-light text-gray-600"><span className="mr-2">discounted price</span></p>
              </div>
              <p className="text-center text-base">R749.99/month for 6 months</p>
            </div>
            <ButtonOutline link='/partners'>Get Started</ButtonOutline>

            {/* <button className="flex w-full cursor-pointer items-center justify-center overflow-visible rounded-xl border border-gray-400 bg-transparent p-3 text-center  text-sm font-bold normal-case leading-normal tracking-wide text-gray-900 duration-200 hover:border-blue-500 hover:bg-blue-500 hover:text-gray-100" id="buyNowTwo Year Plan-200-lg">Get Started</button */}
            <button className="mt-4 flex h-6 cursor-pointer items-center justify-center overflow-visible rounded-full bg-transparent p-3 text-center text-sm font-normal normal-case leading-normal tracking-wide duration-200">
              
            </button>
            <div className="flex w-full flex-col">
              <div className="my-4 mx-4 self-center">
                {PremiumListBenefits.map((listItem,i)=><div className="mb-3 flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 flex-shrink-0 p-px text-blue-500">
                      <polyline points="20 6 9 17 4 12" className=""></polyline></svg
                    ><span className="ml-2 text-base">{listItem.benefitName}</span>
                  </div>
                  
                  )}
                
              </div>
            </div>
            <div className="flex w-full flex-col"></div>
          </div>
        </div>
        <div className="flex w-full items-center justify-center"></div>
      </div>
    </div>
  </div>
  </div>
    </div>
    </>

);
  
};

export default Pricing2;