import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import {motion} from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Typewriter from "typewriter-effect";

const Hero = ({
   stats = [
    { id: 1, name: 'Transactions every 24 hours', value: '44 million' },
    { id: 2, name: 'Assets under holding', value: '$119 trillion' },
    { id: 3, name: 'New users annually', value: '46,000' },
  ]
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-20 px-8 xl:px-16 mx-auto"
      id="about"
    >
         
      <ScrollAnimationWrapper>
          <motion.div
            className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-4 sm:py-8"
            variants={scrollAnimation}>
            <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl space-x-3 space-y-3 font-medium text-black-600 leading-normal">
                <strong> A Data Driven Approach</strong> {" "}<br/> to your <strong>Business</strong>
              </h1>
              <p className="text-black-500 mt-4 mb-6">
              Get a deeper understandig of your business operations with Teillo
              </p>
              <ButtonPrimary link='/partners'  >Get Started</ButtonPrimary>
            </div>
            <div className="flex w-full">
              <motion.div className="h-full w-full" variants={scrollAnimation}>
                <Image
                   src="/assets/Data_extraction.png"
                  alt="teillo data"
                  
                  width={800}
                  height={800}
                  layout="responsive"
                />
                 
              </motion.div>
            </div>
          </motion.div>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper>
    <section class="py-10 sm:py-16 lg:py-24">
    <motion.div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8" >
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Numbers tell our story</h2>
            <p class="mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">Our mission is to make your life easier with our <strong>software</strong> . You can focus on the things you are great at and leverage our tools to do that seamlessly.</p>
        </div>

        <div class="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">
            <motion.div variants={scrollAnimation}>
                <h3 class="font-bold text-7xl">
                    <span class="text-transparent bg-clip-text bg-blue-500"> 2+ </span>
                </h3>
                <p class="mt-4 text-xl font-medium text-gray-900">Years in business</p>
                <p class="text-base mt-0.5 text-gray-600">Creating the successful path</p>
            </motion.div>

            <motion.div variants={scrollAnimation} >
                <h3 class="font-bold text-7xl">
                    <span class="text-transparent bg-clip-text bg-blue-500"> 1M+ </span>
                </h3>
                <p class="mt-4 text-xl font-medium text-gray-900">Orders delivered</p>
                <p class="text-base mt-0.5 text-gray-600">In last 2 years</p>
            </motion.div>

            <motion.div variants={scrollAnimation} >
                <h3 class="font-bold text-7xl">
                    <span class="text-transparent bg-clip-text bg-blue-500"> 60+ </span>
                </h3>
                <p class="mt-4 text-xl font-medium text-gray-900">Partner Service Providers</p>
                <p class="text-base mt-0.5 text-gray-600">Working for your success</p>
            </motion.div>
        </div>
    </motion.div>
</section>
</ScrollAnimationWrapper>
      
    </div>
  );
};

export default Hero;
