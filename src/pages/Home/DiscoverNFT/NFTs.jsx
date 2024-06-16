import React from "react";
import { PaintBrush } from "../../../assets";

const NFTs = () => {
  return (
    <div className="w-full h- bg-lightGrey flex items-center flex-col rounded-3xl">
      <div style={{height:"469px"}} className="w-full flex items-center rounded-t-lg justify-center overflow-hidden">
        <img
          className="w-full h-full object-fit"
          src="https://s3-alpha-sig.figma.com/img/8ac9/e0e3/bcf2d5507a81254146143702cd71f923?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Euj9mfGtsiSpDywOSUnJsmikd9K7LN2TgZmZAdARIb2U6P6fKGXUCk8iROOZeUe9E8ZDBAIxiLx67yJPHgw1ez2-A5bQNSnrSe~vMypJOlBOvloIDPnC-HWGT0Bcw~8CDmGBHuM7m0exB99ACPrE4rE7l71~WemzPXec0y9kv2b5zUQRqIJETDDXDjC2Ez0as9FZkRhXHIJiXPyv213ZVUBZIXowCk1e5-baIS9HqzV~n870OCIkvPQpFBkeczXjKF68c9OvpdEhh3Ngt1W4qgdhoxZ-BuHBqlTPxO9a7~N5sGsD47Y5hI~eONFA6H6JAVQgZosVlvDV3za4L4QlCQ__"
        />
      </div>
      <h2 className="text-white w-full p-3 text-xl font-bold">Soham</h2>
    </div>
  );
};

export default NFTs;
