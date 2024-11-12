import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FcAddressBook, FcCallback, FcVoicemail } from "react-icons/fc";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center py-8 gap-8">
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="text-white lg:w-1/2 px-2"
      >
        <h2 className="text-3xl font-semibold font-poppins">
          Let's Work Together
        </h2>
        <p className="text-sm font-medium pt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          consectetur quia, ipsam placeat, explicabo eaque delectus unde quam
          cupiditate .
        </p>

        {/* Contact Icons */}
        <div className="mt-4 space-y-3">
          <div className="flex gap-3">
            <span className="bg-gray-700 w-12 rounded flex items-center justify-center">
              <IoCall className="text-2xl text-[#7cf03d] " />
            </span>
            <span>
              <h4 className="text-[#7cf03d] leading-1">Phone</h4>
              <p className="leading-none">(+88) 548 622 953</p>
            </span>
          </div>
          {/* Email: */}
          <div className="flex gap-2">
            <span className="bg-gray-700 w-12 rounded flex items-center justify-center">
              <MdEmail className="text-2xl text-[#7cf03d]" />
            </span>
            <span>
              <h4 className="text-[#7cf03d] leading-1">Email</h4>
              <p className="leading-none">rifazul@Yahhu.com</p>
            </span>
          </div>
          {/* Address: */}
          <div className="flex gap-3">
            <span className="bg-gray-700 w-12 rounded flex items-center justify-center">
              <CiLocationOn className="text-2xl text-[#7cf03d] " />
            </span>
            <span>
              <h4 className="text-[#7cf03d] leading-1">Address</h4>
              <p className="leading-none">Amary road 5425</p>
            </span>
          </div>
        </div>
      </div>

      <div
        data-aos-duration="1500"
        data-aos="flip-right"
        className="lg:w-1/2 bg-gray-700 p-3 rounded-md"
      >
        <h2 className="text-2xl font-poppins font-semibold text-white text-center py-3">
          Contact <span className="text-[#7cf03d]">me</span> !
        </h2>
        {/* Input Field Areas  */}
        <div>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="First Name"
              className=" text-white w-1/2 bg-[#1f242d] border-transparent rounded"
            />
            <input
              type="email"
              placeholder="Last Name"
              className=" text-white w-1/2 bg-[#1f242d] border-transparent rounded"
            />
          </div>

          <div className="flex gap-3 mb-2">
            <input
              type="text"
              placeholder="Phone Number"
              className=" text-white w-1/2 bg-[#1f242d] border-transparent rounded mt-2"
            />
            <input
              type="email"
              placeholder="Email Addresss"
              className=" text-white w-1/2 mt-2 bg-[#1f242d] border-transparent rounded"
            />
          </div>
          <div>
            <textarea
              className="w-full h-24 bg-[#1f242d] border-none rounded"
              name=""
              id=""
              placeholder="Message"
            ></textarea>
          </div>

          <div className="text-center py-3">
            <button className="px-5 py-1 bg-[#7cf03d] border border-[#7cf03d] rounded-3xl shadow-md shadow-[#7cf03d] text-lg text-[#1f242d] font-semibold transition-all hover:bg-transparent hover:text-[#7cf03d] hover:shadow-none">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
