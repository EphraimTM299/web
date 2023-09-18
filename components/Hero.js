import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import {motion} from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

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
            className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-8"
            variants={scrollAnimation}>
            <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl space-x-3 space-y-3 font-medium text-black-600 leading-normal">
                <strong>10X+ Increase Revenue</strong> {" "} with Online Presense
              </h1>
              <p className="text-black-500 mt-4 mb-6">
              Giving your business operations a data driven approach
              </p>
              <ButtonPrimary>Get Started</ButtonPrimary>
            </div>
            <div className="flex w-full">
              <motion.div className="h-full w-full" variants={scrollAnimation}>
                <Image
                   src="/assets/Data.png"
                  alt="teillo data"
                  
                  width={800}
                  height={800}
                  layout="responsive"
                />
                 
              </motion.div>
            </div>
          </motion.div>
      </ScrollAnimationWrapper>
      
      
      
    </div>
  );
};

export default Hero;
