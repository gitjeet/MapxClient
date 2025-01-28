import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";
import styles from "../../style";
import Footer from "../../components/Footer";

const Root = () => {
  return (
    <div className="bg-primary w-full overflow-hidden relative">
      {/* Overlay with Work in Progress message */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <h1 className="text-white text-4xl font-bold">Work in Progress</h1>
      </div>

      {/* Content */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
