import HeroImg from "../../assets/images/heroimg.png";
import HeroImg2 from "../../assets/images/heroimg2.png";
import Image from "next/image";
import desc from "../../assets/data/Herodata";
import PrimaryButton from "@/app/components/buttons/PrimaryButton";

const Hero = () => {
  return (
    <div className="flex-1 -mt-40 relative -z-10">
      <div className="z-10">
        <div className="text-white absolute mt-[239px] ml-[180px] z-10 text-5xl font-black">
          <span>Become</span>
          <br />
          <span className="text-[#11AD8E]">Certified Web 3.0</span> and
          <br />
          <span className="text-[#11AD8E]">Metaverse Developer</span>
        </div>
        <span className="text-white absolute mt-[445px] z-10 ml-[183px] max-w-[588px] font-normal text-2xl">
          {desc}
        </span>
        <div className="absolute mt-[564px] ml-[183px] z-10">
          <PrimaryButton labelName="Join Now" link="/" />
        </div>
      </div>
      <div className="absolute ml-[824px] mt-[239px] z-10">
        <Image src={HeroImg2} alt="Hero Image Two" />
      </div>
      <Image className="absolute w-screen bg-no-repeat bg-cover" src={HeroImg} alt="Hero Image" />
    </div>
  );
};

export default Hero;
