import styles from "../../style";
import BrowseCategories from "./BrowseCategories";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import JoinDigest from "./JoinDigest";
import DiscoverNFT from "./DiscoverNFT";
import TopCreator from "./TopCreators";
import TrendingCollections from "./TrendingCollections";

const Home = () => (
  <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth} justify-items-center`}>
     <Hero/>
     <TrendingCollections/>
     <TopCreator/>
     <BrowseCategories/>
     <DiscoverNFT/>
     {/* Image of Mushroom */}
     <div className="sm:h-[630px] md:h-[660px] w-full overflow-hidden h-[590px]">
     <img className="object-cover object-center w-full h-full" src="https://s3-alpha-sig.figma.com/img/a6f4/3f93/50c73503d13e1fe1a0e3277804ef1192?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WfwG7Ha3EPdBnGfQnV22T2QDnea~WD~mrP--H6kCvJvnQMT2KCphxXckercVaZl8D~dxLqltUfvRrtHiYllAFaEqGcP84y0FPoijsY3N8urtG7NrM6Ra~J3Tfux0L61OVCgRYERYg9chEqJxkgwV7ly4e1nPdNjucVSKYd-zVmEfiTZf8i9U003mS22oqitcBP4DfR18puA8gUat8U51R~WjjBElOvr6eSVAhcm3aPCxOPmqdXSNHoEqVfwFyvOYrs-ywsgZ3vGedK-~0IbBxWT3LVYO3LujjdfTa1oyMs9lC4qEKW8OJi6jM~7725sqI4hmy8fYtJdJN3hn6DAWiA__" />
     </div>
     <HowItWorks/>
     <JoinDigest/>
    </div>
  </div>
);

export default Home;
