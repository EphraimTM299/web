import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Dashboard from "../public/assets/Dashboard.png"

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
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1  gap-8 p  y-8 my-12">
      <ScrollAnimationWrapper className="flex w-full justify-center">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
               src="/assets/dashboard.png"
              alt="teillo dashboard"
              layout="responsive"
             
              height={1080}
              width={1920}
            />
          </motion.div>
        </ScrollAnimationWrapper>
       
      </div>
    </div>
  );
};

export default Feature;
