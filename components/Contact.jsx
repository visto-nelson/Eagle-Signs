import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className=" md:mx-24 p-4 ">
      <h1 className="text-4xl font-black text-left p-4 ">
        Shall we <br></br> <span className="text-blue-600">chat?</span>
      </h1>
      <form className="w-full m-auto">
        <div className="grid md:grid-cols-12">
          <div className="md:col-span-6  justify-evenly h-full mb-4">
            <input
              className="border border-gray-400 font-medium p-3 mb-4 w-full mx-2"
              type="text"
              placeholder="First name"
            />
            <input
              className="border border-gray-400 font-medium p-3 mb-4 w-full mx-2"
              type="text"
              placeholder="Last name"
            />
            <input
              className="border border-gray-400 font-medium p-3 w-full mx-2"
              type="email"
              placeholder="email@company.com"
            />
          </div>

          <textarea
            className="md:col-span-6 border font-medium border-gray-400 ml-2 mb-4 md:mx-8 p-3 w-auto h-auto"
            placeholder="message..."></textarea>
        </div>
        <div className="p-4">
          <span>
            By filling in the form, you agree to our Privacy Policy, including
            our cookie use.
          </span>
        </div>
        <div className="p-4">
          <span className="full py-8 font-semibold">
            Have a question? Need info? email{" "}
            <a href="mailto:info@eaglesigns.cc" className="text-blue-600">
              info@eaglesigns.cc
            </a>
            , call{" "}
            <a href="tel:+264817838600" className="text-blue-600">
              +264 81 7838 600
            </a>
            . We are excited to hear from you!
          </span>
        </div>
        <button className="border shadow-lg p-3 md:w-1/3 mt-2 bg-blue-600  text-white font-bold">
          Get In Touch
        </button>
      </form>

      <div className=" flex grid grid-cols-2 mt-16 bg-slate-100 ">
        <div className=" col-span-1">
          <h className=" font-black text-2xl text-gray-500 ">Social media</h>
          <div className="underline text-gray-500 font-medium mt-7 ">
            <a href="">Instagram</a>
            <br />
            <a href="">Facebook</a>
            <br />
            <a href="">Twitter</a>
          </div>
        </div>
        <div className=" col-span-1">
          <h className=" font-black text-2xl text-gray-500 ">Get in touch</h>
          <div className="underline text-gray-500 font-medium mt-7">
            <a href="tel:+264817838600">+264 81 7838 600 </a>
            <br />
            <a href="">Contact us</a>
          </div>
        </div>
        <span className=" text-center text-sm font-bold col-span-2 mt-16">
          <h>
            ©2023 Eagle Signs | Powered by{" "}
            <a href="" className="text-blue-600">
              Sharp
            </a>
          </h>
        </span>
      </div>
    </div>
  );
}

export default Contact