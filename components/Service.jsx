import Image from 'next/image';
//import bigPicture from 'bigPicture.png'
import React from 'react';

const Navbar = () => {
  return (
    <div id="services" className=" grid lg:grid-cols-2 p-3 m-3 md:p-7 md:m-20">
      <div className=" col-span-1">
        <h1 className="text-4xl font-black">
          See our wide
          <br /> range of <br />
          <span className="text-blue-600">services</span>
        </h1>
        <ul className="list-disc pl-4 underline text-lg font-semibold pt-9 ml-6 mb-10 lg:mb-3 cursor-pointer">
          <li>Offset Printing</li>
          <li>Promotional Items</li>
          <li>Signs</li>
          <li>Branding</li>
          <li>Large format printing</li>
          <li>Other Services</li>
        </ul>
      </div>
      <div className="  relative  md:ml-1 col-span-1 ">
        <Image
          src="/bigPicture.png"
          alt="/"
          className="w-full h-full"
          layout="responsive"
          width={350}
          height={350}
          objectFit="cover"
        />
        <div className="absolute top-48 md:top-80 -left-4 md:-left-20 ">
          <Image
            src="/firstImage.png"
            width={150}
            height={150}
            alt="Small Image 1"
            className="w-20 h-20"
          />
        </div>
        <div className="absolute top-5 md:top-20 -left-4 md:-left-20">
          <Image
            src="/secondImage.png"
            width={150}
            height={150}
            alt="Small Image 2"
            className="w-20 h-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
