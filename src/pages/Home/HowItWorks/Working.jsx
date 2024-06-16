import React from "react";
import { HIW1, PaintBrush } from "../../../assets";

const Working = () => {
  return (
    <div className="w-full bg-lightGrey flex px-3 items-center flex-col rounded-xl h-[157px] sm:h-[337px] md:h-[439px]">
      <div className="w-full aspect-square p-5 flex items-center rounded-t-lg justify-center overflow-hidden">
        <img
          className="w-full h-full object-fit"
          src={HIW1}
        />
      </div>
      <div className="sm:h-1/5 flex items-center pl-5 w-full flex-col pt-4 bg-lightGrey rounded-b-xl flex-1 h-full">
        <h2 className="text-white font-bold text-xl">Space Walking</h2>
        <p className="text-center p-4 text-white">
        Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.
        </p>

      </div>
    </div>
  );
};

export default Working;
