import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";
import styles from "../../style";
import Footer from "../../components/Footer";

const Root = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      {/* Overlay with "Work in Progress" text */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "2rem",
          fontWeight: "bold",
          zIndex: 1000, // Ensure it's above other content
        }}
      >
        Work in Progress
      </div>

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
