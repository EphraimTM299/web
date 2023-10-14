import React from "react"
import Layout from "../components/Layout/Layout"
import Image from "next/image"
import {motion} from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../components/Layout/ScrollAnimationWrapper";
import { useMemo } from "react"


export default function Example() {
   const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <>
    <Layout>
    
       
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-48 lg:px-8">
        
        <div  className="text-center">
          <p className="text-base font-semibold text-indigo-600 text-blue-500">Welcome</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Account Created Successfully</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">Welcome to Teillo Business, We are happy to have you on board</p>
          <p className="mt-6 text-base leading-7 text-gray-600">Please check your email for further info.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white-500 shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              Go home
            </a>
            <a href="#" className="text-sm font-semibold text-gray-900">
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
           <Image
                   src="/assets/SignUp.png"
                  alt="teillo data"
                  width={800}
                  height={800}
                  
                  layout="responsive"
                />
        </div>      </main>
     
     
      </Layout>
    </>
  )
}
