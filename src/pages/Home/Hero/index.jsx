import React from "react";
import { Link } from "react-router-dom";
import { Rocket } from "../../../assets";
import styles, { layout } from "../../../style";

const Hero = () => {
  return (
    <section id="features" className={`${layout.section} px-0 md:px-14`}>
      <div className={layout.sectionInfo}>
        <h2 className="font-poppins font-semibold xs:text-[67px] text-[40px] text-white xs:leading-[56.8px] leading-[66.8px] w-full">
          Discover <br className="sm:block hidden" /> Digital Art &{" "}
          <br className="md:block hidden" /> Collect NFTs
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-1`}>
          NFT marketplace UI created with Anima for Figma. Collect, buy and sell
          art from more than 20k NFT artists.
        </p>

        <div
          key={243156}
          className="font-poppins my-4 h-[60px] cursor-pointer text-[16px] bg-secondary mt-6 px-5 py-2.5 w-full sm:w-56 rounded-xl flex justify-center"
        >
          <img src={Rocket} alt="hoobank" className="w-[20px]  mr-2" />

          <Link to={"/SignUp"} className="text-white self-center">
            Get Started
          </Link>
        </div>
        <div className="flex justify-between w-full">
          <div className="">
            <h3
              className={`text-white text-[22px]  xs:text-[28px] font-mono font-bold`}
            >
              240k+
            </h3>
            <h2 className={`text-lightGrey text-[16px] xs:text-[24px]`}>
              Total Sale
            </h2>
          </div>
          <div className="">
            <h3
              className={`text-white text-[22px]  xs:text-[28px] font-mono font-bold`}
            >
              100k+
            </h3>
            <h2 className={`text-lightGrey text-[16px] xs:text-[24px]`}>
              Auctions
            </h2>
          </div>
          <div className="">
            <h3
              className={`text-white text-[22px]  xs:text-[28px] font-mono font-bold`}
            >
              240k+
            </h3>
            <h2 className={`text-lightGrey text-[16px] xs:text-[24px]`}>
              Artists
            </h2>
          </div>
        </div>
      </div>

      <div
        className={`${layout.sectionImg} flex-col max-w-90 bg-primary rounded-xl overflow-hidden`}
      >
        <div className="w-full max-h-80 overflow-hidden">
          <img
            className={`rounded-t-xl w-full h-full object-fit`}
            src="https://s3-alpha-sig.figma.com/img/8ac9/e0e3/bcf2d5507a81254146143702cd71f923?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Euj9mfGtsiSpDywOSUnJsmikd9K7LN2TgZmZAdARIb2U6P6fKGXUCk8iROOZeUe9E8ZDBAIxiLx67yJPHgw1ez2-A5bQNSnrSe~vMypJOlBOvloIDPnC-HWGT0Bcw~8CDmGBHuM7m0exB99ACPrE4rE7l71~WemzPXec0y9kv2b5zUQRqIJETDDXDjC2Ez0as9FZkRhXHIJiXPyv213ZVUBZIXowCk1e5-baIS9HqzV~n870OCIkvPQpFBkeczXjKF68c9OvpdEhh3Ngt1W4qgdhoxZ-BuHBqlTPxO9a7~N5sGsD47Y5hI~eONFA6H6JAVQgZosVlvDV3za4L4QlCQ__"
            alt="Space Walking"
          />
        </div>
        <div
          className={`p-4 bg-lightGrey w-full rounded-b-xl flex flex-col items-start`}
        >
          <h2 className="text-white font-bold text-xl">Space Walking</h2>
          <div className="flex items-center mt-2">
            <img
              src="/mnt/data/image.png"
              alt="Author"
              className="w-6 h-6 rounded-full mr-2"
            />
            <span className="text-white">Animakid</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
