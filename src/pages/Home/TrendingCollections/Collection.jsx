import React from "react";
import { PaintBrush } from "../../../assets";

const Collection = () => {
  return (
    <div className="w-full bg-primary flex items-center flex-col rounded-3xl">
      <div className="w-full p-2 aspect-square flex items-center rounded-lg justify-center overflow-hidden">
        <img
          className="w-full h-full object-fit rounded-lg"
          src="https://s3-alpha-sig.figma.com/img/8ac9/e0e3/bcf2d5507a81254146143702cd71f923?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Euj9mfGtsiSpDywOSUnJsmikd9K7LN2TgZmZAdARIb2U6P6fKGXUCk8iROOZeUe9E8ZDBAIxiLx67yJPHgw1ez2-A5bQNSnrSe~vMypJOlBOvloIDPnC-HWGT0Bcw~8CDmGBHuM7m0exB99ACPrE4rE7l71~WemzPXec0y9kv2b5zUQRqIJETDDXDjC2Ez0as9FZkRhXHIJiXPyv213ZVUBZIXowCk1e5-baIS9HqzV~n870OCIkvPQpFBkeczXjKF68c9OvpdEhh3Ngt1W4qgdhoxZ-BuHBqlTPxO9a7~N5sGsD47Y5hI~eONFA6H6JAVQgZosVlvDV3za4L4QlCQ__"
        />
      </div>
      <div className="flex flex-row justify-evenly">
        <div className="w-1/3 m-2  aspect-square flex items-center rounded-lg justify-center overflow-hidden">
          <img
            className="w-full h-full object-fit"
            src="https://s3-alpha-sig.figma.com/img/8ac9/e0e3/bcf2d5507a81254146143702cd71f923?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Euj9mfGtsiSpDywOSUnJsmikd9K7LN2TgZmZAdARIb2U6P6fKGXUCk8iROOZeUe9E8ZDBAIxiLx67yJPHgw1ez2-A5bQNSnrSe~vMypJOlBOvloIDPnC-HWGT0Bcw~8CDmGBHuM7m0exB99ACPrE4rE7l71~WemzPXec0y9kv2b5zUQRqIJETDDXDjC2Ez0as9FZkRhXHIJiXPyv213ZVUBZIXowCk1e5-baIS9HqzV~n870OCIkvPQpFBkeczXjKF68c9OvpdEhh3Ngt1W4qgdhoxZ-BuHBqlTPxO9a7~N5sGsD47Y5hI~eONFA6H6JAVQgZosVlvDV3za4L4QlCQ__"
          />
        </div>
        <div className="w-1/3 m-2  aspect-square flex items-center rounded-lg justify-center overflow-hidden">
          <img
            className="w-full h-full object-fit"
            src="https://s3-alpha-sig.figma.com/img/8ac9/e0e3/bcf2d5507a81254146143702cd71f923?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Euj9mfGtsiSpDywOSUnJsmikd9K7LN2TgZmZAdARIb2U6P6fKGXUCk8iROOZeUe9E8ZDBAIxiLx67yJPHgw1ez2-A5bQNSnrSe~vMypJOlBOvloIDPnC-HWGT0Bcw~8CDmGBHuM7m0exB99ACPrE4rE7l71~WemzPXec0y9kv2b5zUQRqIJETDDXDjC2Ez0as9FZkRhXHIJiXPyv213ZVUBZIXowCk1e5-baIS9HqzV~n870OCIkvPQpFBkeczXjKF68c9OvpdEhh3Ngt1W4qgdhoxZ-BuHBqlTPxO9a7~N5sGsD47Y5hI~eONFA6H6JAVQgZosVlvDV3za4L4QlCQ__"
          />
        </div>
        <div className="w-1/3 m-2 content-center bg-secondary  aspect-square flex items-center rounded-lg justify-center overflow-hidden">
          1524+
        </div>
      </div>
      <div className="sm:h-1/5 flex items-start pl-5 w-full flex-col pt-2 pb-4 rounded-b-xl flex-1 h-full">
        <h2 className="text-white font-bold text-xl">Space Walking</h2>
        <div className="flex items-center  pt-2">
          <img
            src="/mnt/data/image.png"
            alt="Author"
            className="w-6 h-6 rounded-full mr-2"
          />
          <span className="text-white">Animakid</span>
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Collection;
