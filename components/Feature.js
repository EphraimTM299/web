import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";


const features = [
  "Powerfull online protection.",
  "Internet without borders.",
  "Supercharged VPN",
  "No specific time limits."
]

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-6 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id=""
    >
      <div className="grid grid-flow-row invisible sm:visible md:visible gap-8 py-8 my-12">
      <ScrollAnimationWrapper className="flex w-full justify-center">
          <motion.div className="h-full w-full mx-10 p-8" variants={scrollAnimation}>
           <div className="aspect-[16/9] border-4 border-blue-600 rounded-lg">
          <div className="p-4">
            <Image 
                src="/assets/dashboard.png"
                alt="teillo dashboard"
                layout="responsive"
              
                height={1080}
                width={1820}
              />
            
          </div>  
             </div>
          </motion.div>
        </ScrollAnimationWrapper>
       
      </div>
    </div>
  );
};

export default Feature;
