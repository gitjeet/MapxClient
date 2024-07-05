import React from "react";
import { artistTabView } from "../../../utils/content";
import NFTs from "./NFTs";

const TabView = ({ tabIndex }) => {
  return (
    <div className="grid bg-lightGrey px-20 gap-2 sm:gap-4 grid-cols-2 md:gap-4 py-10 border-b-2 border-primary sm:grid-cols-3">
      {artistTabView[tabIndex].map((item) => {
        return <NFTs data={item} />;
      })}
    </div>
  );
};

export default TabView;
