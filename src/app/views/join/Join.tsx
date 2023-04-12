import Image from "next/image";
import JoinImg from "../../assets/images/joinimg.png";
import PrimaryButton from "@/app/components/buttons/PrimaryButton";
import JoinCards from "@/app/components/joincards/JoinCards";
import IconOne from "../../assets/images/icon1.png";
import IconTwo from "../../assets/images/icon2.png";
import IconThree from "../../assets/images/icon3.png";
import IconFour from "../../assets/images/icon4.png";
const Join = () => {
  return (
    <div className="relative flex">
      <Image className="absolute -z-10" src={JoinImg} alt="Join Us" />
      <div className="basis-1/2">
        <div className="text-[#11AD8E] text-[48px] font-bold ml-[194px] mt-[64px] absolute">
          Why to join
        </div>
        <div className="absolute ml-[120px] mt-[168px] w-[517px]">
          <ul className="list-disc">
            <li>
              Own products (Full-Stack App Templates, AR and VR Experiences, and
              APIs).
            </li>
            <li>
              Offer services at a rate of $50 per hour ($96,000 per year).
            </li>
            <li>Fantastic opportunity to better their financial situation.</li>
            <li>Boost economy by expanding software exports.</li>
          </ul>
        </div>
        <div className="absolute ml-[125px] mt-[350px]">
          <PrimaryButton labelName="Join Now" link="/" />
        </div>
      </div>
      <div className="basis-1/2 flex">
        <div className="mt-[64px] space-y-5 mx-10">
        <JoinCards title="Product Owner" img={IconOne} />
        <JoinCards title="Access to Global Market" img={IconThree} />
        
        </div>
        <div className="mt-[105px] space-y-5 mx-10">
        <JoinCards title="Freelance" img={IconTwo} />
        <JoinCards title="Boost Economy" img={IconFour} />
        </div>
        
      </div>
    </div>
  );
};

export default Join;
