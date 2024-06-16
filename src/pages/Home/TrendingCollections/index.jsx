import React from "react";
import styles, { layout } from "../../../style";
import { Link } from "react-router-dom";
import { Rocket } from "../../../assets";

const TrendingCollections = () => {
  return (
    <section id="features" className={`${layout.section} px-0 md:px-14`}>
      <div className='py-3 flex justify-between'>
        <div className=''>
        <h2 className={styles.heading2}>Top Creators</h2>
        <h2 className="text-xl text-dimWhite">Checkout Top Rated Creators on the NFT Marketplace</h2>
        </div>
        <Link
        to={"/SignUp"}
          key={243156}
          className="max-w-64 hidden mx-2 font-poppins justify-center my-4 cursor-pointer text-[16px] border-secondary border-2 mt-6 px-5 py-2.5 w-50 rounded-2xl sm:flex"
        >
          <img src={Rocket} alt="hoobank" className="w-[20px] h-[25px] mr-2" />

          <h2 className="text-white">
            View Rankings
          </h2>
        </Link>
      </div>

    </section>
  );
};

export default TrendingCollections;
