import React from "react";
import styles from "../../style";

const NFTProfile = () => {
  return (
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth} justify-items-center`}>
        <div className="sm:h-[420px] md:h-[560px] w-full overflow-hidden h-[320px]">
          <img
            className="object-cover object-center w-full h-full"
            src="https://s3-alpha-sig.figma.com/img/a6f4/3f93/50c73503d13e1fe1a0e3277804ef1192?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WfwG7Ha3EPdBnGfQnV22T2QDnea~WD~mrP--H6kCvJvnQMT2KCphxXckercVaZl8D~dxLqltUfvRrtHiYllAFaEqGcP84y0FPoijsY3N8urtG7NrM6Ra~J3Tfux0L61OVCgRYERYg9chEqJxkgwV7ly4e1nPdNjucVSKYd-zVmEfiTZf8i9U003mS22oqitcBP4DfR18puA8gUat8U51R~WjjBElOvr6eSVAhcm3aPCxOPmqdXSNHoEqVfwFyvOYrs-ywsgZ3vGedK-~0IbBxWT3LVYO3LujjdfTa1oyMs9lC4qEKW8OJi6jM~7725sqI4hmy8fYtJdJN3hn6DAWiA__"
          />
        </div>
        <div className="flex flex-1 flex-col sm:flex-row mt-10 mx-24">
          <div className="flex flex-1 flex-col">
            <h2>Heading</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              autem sequi tempora eos, temporibus quibusdam! Assumenda harum
              dolor eaque voluptatum quis accusantium error esse in ratione
              illum ullam, pariatur necessitatibus. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Fugiat quos, sequi rem, vero nostrum
              reiciendis maxime repellendus nisi doloremque incidunt amet ad
              pariatur reprehenderit. Dolorum error quibusdam atque dignissimos,
              explicabo eius repellat culpa ea ad dolore. Iste, dignissimos
              itaque? Veniam culpa alias dolore rerum voluptatum ducimus qui
              deserunt sunt cupiditate eligendi. Est omnis illo optio eveniet
              pariatur repellat rem odio. Doloremque necessitatibus, culpa sit
              esse optio id ullam facilis ipsam? Amet odit eaque, excepturi
              laudantium, soluta, corporis vero libero hic quisquam quasi
              reiciendis est ipsa odio. Magni et nesciunt id quisquam optio!
              Optio totam velit iure esse quos recusandae qui facere eos
              officia? Quaerat neque eaque commodi molestiae atque ad veritatis,
              consequuntur repellat officia distinctio.
            </p>
          </div>
          <div className="w-full flex-col sm:w-[295px] p-4 h-[234px] bg-lightGrey rounded-xl">
            <h2 className="text-dimWhite font-light">Auction ends in </h2>
            <div className="flex justify-stretch">
              <div className="flex flex-col flex-1">
                <h2 className="text-[48px] text-white font-bold">59</h2>
                <h2 className="text-dimWhite">Hours</h2>
              </div>
              <div className="text-[44px] px-2 text-white font-bold">:</div>
              <div className="flex flex-col flex-1">
                <h2 className="text-[48px] text-white font-bold">59</h2>
                <h2 className="text-dimWhite">Minutes</h2>
              </div>
              <div className="text-[44px] px-2 text-white font-bold">:</div>
              <div className="flex flex-col flex-1">
                <h2 className="text-[48px] text-white font-bold">59</h2>
                <h2 className="text-dimWhite">Seconds</h2>
              </div>
            </div>
            <div className="w-full mt-2 py-3 flex justify-center bg-secondary rounded-xl text-white font-bold ">
              Place Bid
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTProfile;
