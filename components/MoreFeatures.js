import React , {useMemo }from "react";
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon , PlusCircleIcon, ChartBarSquareIcon, FaceSmileIcon, DocumentChartBarIcon} from '@heroicons/react/24/outline'
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const features = [
  {
    name: 'Order Management System',
    description:
      'OMS streamlines order entry, processing, and fulfillment, reducing errors and ensuring orders are fulfilled accurately and on time.',
    icon: PlusCircleIcon,
  },
  {
    name: 'Advanced Analytics',
    description:
      'Use cutting-edge analytics to bring data sources together, identify new trends and measure indicators to make confident business decisions.',
    icon: ChartBarSquareIcon,
  },
  {
    name: 'Streamline Processes',
    description:
      'When you streamline your business operation, you remove any unnecessary steps or manual work in the process, which leads to improved efficiency and reduced time consumption by mundane tasks.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Advanced Data Security',
    description:
      "We use Google's advanced data security solutions. We employ cutting-edge encryption, multi-factor authentication, and AI-driven threat detection to safeguard your valuable information with the highest level of protection.",
    icon: FingerPrintIcon,
  },
    {
    name: 'Real-time Reporting',
    description:
     'Our order management system provides real-time reporting and analytics, aiding in decision-making and performance evaluation',
    icon: DocumentChartBarIcon,
  },
  {
    name: 'Improved Customer Service and Experience',
    description:
      "With access to order history and real-time order status, your business can provide better customer service and quickly resolve issues.",
    icon: FaceSmileIcon,
  },
  
]

export default function Example() {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <div
    className="max-w-screen-xl  px-8 xl:px-16 mx-auto"
    id="feature"
  >
    <ScrollAnimationWrapper>
    <motion.div className="bg-white-500 py-24 sm:py-32" variants={scrollAnimation}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-500">Your Data in One Place</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-black-600 sm:text-4xl">
            Everything you need to run your Business
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Under a holistic business approach, individual departments and employees perform their jobs with a collaborative focus for more than just personal success
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-black-600">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500">
                    <feature.icon className="h-6 w-6 text-white-500" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </motion.div>

    </ScrollAnimationWrapper>
 
  
    </div>
  );
};