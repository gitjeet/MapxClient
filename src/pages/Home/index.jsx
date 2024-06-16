import { features } from "../../constants";
import styles from "../../style";
import BrowseCategories from "./BrowseCategories";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import JoinDigest from "./JoinDigest";
import DiscoverNFT from "./DiscoverNFT";
import TopCreator from "./TopCreators";
import TrendingCollections from "./TrendingCollections";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Home = () => (
  <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth} justify-items-center`}>
     <Hero/>
     <TrendingCollections/>
     <TopCreator/>
     <BrowseCategories/>
     <DiscoverNFT/>
     {/* Image of Mushroom */}
     <HowItWorks/>
     <JoinDigest/>
    </div>
  </div>
);

export default Home;
