import Image from "next/image"
import PartnerOne from "../../assets/images/partner1.png"
import PartnerTwo from "../../assets/images/partner2.png"
import PartnerThree from "../../assets/images/partner3.png"
import PartnerFour from "../../assets/images/partner4.png"
import PartnerFive from "../../assets/images/partner5.png"
import PartnerSix from "../../assets/images/partner6.png"
import PartnerSeven from "../../assets/images/partner7.png"

const Partners = () => {
  return (
    <div >
        <div className="text-[#11AD8E] text-[48px] font-bold flex justify-center mt-[124px]">
        <h1 >Our Partners</h1>
        </div>
        <div className="h-[148px] bg-gray-700 flex justify-center items-center space-x-4 mb-[124px] border-b-[#11AD8E] border-b-2">
        <Image src={PartnerOne} alt="Partner One" />
        <Image src={PartnerTwo} alt="Partner Two" />
        <Image src={PartnerThree} alt="Partner Three" />
        <Image src={PartnerFour} alt="Partner Four" />
        <Image src={PartnerFive} alt="Partner Five" />
        <Image src={PartnerSix} alt="Partner Six" />
        <Image src={PartnerSeven} alt="Partner Seven" />
        </div>
    </div>
  )
}

export default Partners