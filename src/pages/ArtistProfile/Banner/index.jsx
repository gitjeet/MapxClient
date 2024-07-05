import React from 'react'

const Banner = () => {
  return (
    <div className="w-full sm:h-[280px] md:h-[320px] h-[250px]">
        <div className="relative z-10 sm:h-[280px] md:h-[320px] w-full overflow-visible h-[250px]">
          <img
            className="object-cover object-center w-full h-full"
            src="https://s3-alpha-sig.figma.com/img/a6f4/3f93/50c73503d13e1fe1a0e3277804ef1192?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WfwG7Ha3EPdBnGfQnV22T2QDnea~WD~mrP--H6kCvJvnQMT2KCphxXckercVaZl8D~dxLqltUfvRrtHiYllAFaEqGcP84y0FPoijsY3N8urtG7NrM6Ra~J3Tfux0L61OVCgRYERYg9chEqJxkgwV7ly4e1nPdNjucVSKYd-zVmEfiTZf8i9U003mS22oqitcBP4DfR18puA8gUat8U51R~WjjBElOvr6eSVAhcm3aPCxOPmqdXSNHoEqVfwFyvOYrs-ywsgZ3vGedK-~0IbBxWT3LVYO3LujjdfTa1oyMs9lC4qEKW8OJi6jM~7725sqI4hmy8fYtJdJN3hn6DAWiA__"
          />
          <div className="absolute bottom-0 left-20 -mb-[60px] w-[120px] h-[120px] aspect-square flex items-center rounded-lg justify-center overflow-visible">
            <img
              className="w-full h-full rounded-3xl border-2 border-primary"
              src="https://s3-alpha-sig.figma.com/img/8ac9/e0e3/bcf2d5507a81254146143702cd71f923?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Euj9mfGtsiSpDywOSUnJsmikd9K7LN2TgZmZAdARIb2U6P6fKGXUCk8iROOZeUe9E8ZDBAIxiLx67yJPHgw1ez2-A5bQNSnrSe~vMypJOlBOvloIDPnC-HWGT0Bcw~8CDmGBHuM7m0exB99ACPrE4rE7l71~WemzPXec0y9kv2b5zUQRqIJETDDXDjC2Ez0as9FZkRhXHIJiXPyv213ZVUBZIXowCk1e5-baIS9HqzV~n870OCIkvPQpFBkeczXjKF68c9OvpdEhh3Ngt1W4qgdhoxZ-BuHBqlTPxO9a7~N5sGsD47Y5hI~eONFA6H6JAVQgZosVlvDV3za4L4QlCQ__"
            />
          </div>
        </div>
      </div>
  )
}

export default Banner