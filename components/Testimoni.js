import React, { useState } from "react";

// import react slick
import Slider from "react-slick";
import Image from "next/image";
import Stars from "../public/assets/Icon/stars.svg";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";

const Testimoni = ({
  listTestimoni = [
    {
      name: "Susan R",
      image: "/assets/people-3.png",
      city: "Cape Town ",
      country: "South Africa",
      rating: "5.0",
      testimoni:
      "Our business was drowning in a sea of orders before we started using Teillo. Thanks to this amazing software, we now have full control over our order management. It's streamlined our processes, reduced errors, and boosted our overall efficiency. I can't imagine running our laundry business without it"    },
    {
      name: "Robert D",
      image: "/assets/people-3.png",
      city: "Sandton",
      country: "South Africa",
      rating: "4.5",
      testimoni:
        "Managing our orders has never been easier since we adoptedTeillo Business. The real-time visibility into our order pipeline, inventory management, and automation features have saved us countless hours and significantly cut costs. It's been a game-changer for our business.",
    },
    {
      name: "Jane S",
      image: "/assets/people-3.png",
      city: "George",
      country: "South Africa",
      rating: "4.5",
      testimoni:
        "The financial aspects of order management were always a headache until we started usingTeillo Business. Now, I have full confidence in our billing accuracy, and we've significantly reduced the number of billing disputes. It's also helped us improve our cash flow management. I highly recommend this software to anyone looking for order management solutions",
    },
    {
      name: "Michael R",
      image: "/assets/people-3.png",
      city: "Milnerton",
      country: "South Africa",
      rating: "4.5",
      testimoni:
        "As a small business owner, I needed a solution that could help me compete with larger players.Teillo Business provided exactly that. It's not just an order management system; it's an all-in-one business optimization tool. I've seen a noticeable increase in sales, a decrease in fulfillment errors, and an overall boost in customer satisfaction",
    },
      {
      name: "Emily L",
      image: "/assets/people-3.png",
      city: "Centurion",
      country: "South Africa",
      rating: "4.5",
      testimoni:
        "Our customers demand accurate and on-time deliveries.Teillo Business has given us the ability to meet those expectations consistently. Our support team can easily track orders, manage returns, and resolve customer issues promptly. It's improved our customer satisfaction scores and, in turn, our reputation in the industry.",
    },
    {
      name: "Nina R",
      image: "/assets/people-3.png",
      city: "Midrand",
      country: "South Africa",
      rating: "4.5",
      testimoni:
        "Having used various order management systems in the past, I can confidently say thatTeillo Business is a cut above the rest. Its ability to integrate seamlessly with our existing systems, offer predictive analytics, and optimize our order routing has been a game-changer. Our supply chain is more efficient, and we've saved both time and money",
    },
     {
      name: "David M",
      image: "/assets/people-3.png",
      city: "Stellenbosch",
      country: "South Africa",
      rating: "4.5",
      testimoni:
        "Teillo Business has not only streamlined our order management but also given us incredible insights into our customer behavior. The data and reporting features are invaluable for our marketing efforts. It has helped us tailor our promotions and increase cross-selling opportunities, resulting in a significant boost in our revenue.",
    },
    {
      name: "Mark D",
      image: "/assets/people-3.png",
      city: "Pinelands",
      country: "South Africa",
      rating: "4.5",
      testimoni:
        "Managing a complex logistics network demands robust tools.Teillo Business has been instrumental in helping us achieve that. Its tracking and real-time visibility features have made our supply chain more transparent and efficient. We've seen a substantial reduction in shipping delays, which has improved our reputation among clients",
    },
     {
      name: "Eric P",
      image: "/assets/people-3.png",
      city: "Cape Town",
      country: "South Africa",
      rating: "4.5",
      testimoni:
        "As a CFO, I'm all about the numbers.Teillo Business has delivered measurable results. We've reduced order processing time, cut costs in several areas, and optimized our inventory management. It's a financial win-win, and I highly recommend it to any business looking to improve their bottom line",
    },
  ],
}) => {
  const settings = {
    dots: true,
    
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full  rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch"
      >
        {listTestimoni.map((listTestimonis, index) => (
          <div className="px-3 flex items-stretch" key={index}>
            <div className="border-2 border-gray-500 hover:border-blue-500 transition-all rounded-lg p-8 flex flex-col">
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <div className="flex order-2 xl:order-1">
                  {/* <Image
                    src={listTestimonis.image}
                    height={50}
                    width={50}
                    alt="Icon People"
                  /> */}
                  <div className="flex flex-col ml-5 text-left">
                    <p className="text-lg text-black-600 capitalize">
                      {listTestimonis.name}
                    </p>
                    <p className="text-sm text-black-500 capitalize">
                      {listTestimonis.city},{listTestimonis.country}
                    </p>
                  </div>
                </div>
                <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                  <p className="text-sm">{listTestimonis.rating}</p>
                  <span className="flex ml-4">
                    <Stars className="h-4 w-4" />
                  </span>
                </div>
              </div>
              <p className="mt-5 text-left">“{listTestimonis.testimoni}”.</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-blue-500 border hover:bg-blue-500 hover:text-white-500 transition-all text-blue-500 cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <ArrowBack className="h-6 w-6 " />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-blue-500 border hover:bg-blue-500 hover:text-white-500 transition-all text-blue-500 cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <ArrowNext className="h-6 w-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimoni;
