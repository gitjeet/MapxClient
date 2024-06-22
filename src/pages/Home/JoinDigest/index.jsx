import React from "react";
import styles from "../../../style";
import { Link } from "react-router-dom";
import { User } from "../../../assets";

const JoinDigest = () => {
  return (
    <div className="w-full md:px-24 mx-2 mb-24">
      <div className="w-full sm:bg-lightGrey flex flex-col sm:flex-row p-0 sm:p-4 md:p-16 rounded-3xl">
        <div className="sm:w-1/2 w-full h-[310px] overflow-hidden md:mr-20 sm:mr-5 rounded-3xl">
          <img
            className="w-full h-full object-cover object-center"
            src="https://s3-alpha-sig.figma.com/img/9f1a/3ec9/5772f9d568933f15578613e18c5adb73?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kOYPonRx8UHtT~x9mBdXLrl5Wky-NUYTU4YItbbV4ct4KNiZIs1YjOT9ekGVAXA~Uskc9U8h9MbjXw9HrQgKjDK37iMjYzA5q0SjrObEDxTLAKuKxFvyL-AmqnrU6xMy1Oxt2tqBqGiYkeYs4-ZDEYDD7mgRYKwXOdbCiXIG9-GKKdmJ302butR1~TASttnJSmbypGEM5V4KnW5A686WaX4mAqBooHUI-xyPXSySKmoMAvaileuABAH-nC444H5XOtkOW6wwd5LDat~BFDW5vvAgQuxa4zWssX4bC-eNv8CPaf6d6UDjS~OFDqi0bgFHhZOCdacMoS5z2cYxYQOwIw__"
          />
        </div>
        <div className="sm:w-1/2 w-full flex-col">
          <h2 className="text-[38px] md:max-w-[400px] py-5 font-semibold leading-[45.6px] text-white">
            Join Our Weekly Digest
          </h2>
          <h2 className="text-[22px] md:max-w-[450px] font-normal leading-[35.2px] text-white">
            Get exclusive promotions & updates straight to your inbox.
          </h2>
          <div className="hidden sm:flex sm:mt-2 md:mt-10 rounded-3xl w-full max-w-[420px] justify-between bg-white">
            <input
              className="px-6 text-xl w-full text-grey rounded-l-3xl"
              placeholder="Enter your email here"
            />
            <Link className="bg-secondary p-5 px-10 rounded-3xl text-white font-semibold text-[16px] flex">
              <img
                src={User}
                alt="hoobank"
                className="w-[20px] h-[25px] mr-2"
              />
              Subscribe
            </Link>
          </div>
          <div className="flex sm:hidden flex-col mt-2">
            <input
              className="w-full text-xl pl-5 text-grey rounded-3xl p-3
                my-4"
              placeholder="Enter your email here"
            />
            <Link className="bg-secondary p-3 rounded-3xl justify-center text-white font-bold text-[22px] flex">
              <img src={User} alt="hoobank" className="mt-1 h-[30px] mr-4" />
              Subscribe
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinDigest;
