import React from "react";
import { User } from "../../../assets";

const ArtistInfo = () => {
  return (
    <div className="w-full">
      <h2 className="text-white font-semibold text-[51px]">Animakid</h2>
      <div className="flex justify-between w-full md:pr-14 md:mt-2">
        <div className="flex-1">
          <h3
            className={`text-white text-[22px] leading-[35.2px] font-mono font-bold md:text-[28px]`}
          >
            240k+
          </h3>
          <h2
            className={`text-white text-[16px] leading-[22.4px] md:text-[24px]`}
          >
            Total Sale
          </h2>
        </div>
        <div className="flex-1">
          <h3
            className={`text-white text-[22px]  xs:text-[28px] leading-[35.2px] font-mono font-bold md:text-[28px]`}
          >
            100k+
          </h3>
          <h2
            className={`text-white text-[16px] leading-[22.4px] md:text-[24px]`}
          >
            Auctions
          </h2>
        </div>
        <div className="flex-1">
          <h3
            className={`text-white text-[22px] xs:text-[28px] leading-[35.2px] font-mono font-bold md:text-[28px]`}
          >
            240k+
          </h3>
          <h2
            className={`text-white text-[16px] leading-[22.4px] md:text-[24px]`}
          >
            Artists
          </h2>
        </div>
      </div>
      <div className="my-4">
        <h2>Bio</h2>
        <p>The internet's friendliest designer kid.</p>
      </div>
      <div className="my-4">
        <h2>Links</h2>
        <div>
          <div className="flex">
            <img src={User} alt="hoobank" className="w-[20px] h-[25px] m-2" />
            <img src={User} alt="hoobank" className="w-[20px] h-[25px] m-2" />
            <img src={User} alt="hoobank" className="w-[20px] h-[25px] m-2" />
            <img src={User} alt="hoobank" className="w-[20px] h-[25px] m-2" />
            <img src={User} alt="hoobank" className="w-[20px] h-[25px] m-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistInfo;
