import ProgSectionimg from "../../assets/images/sectiononeimg.png"
import Image from "next/image"

const Program = () => {
  return (
    <div className="flex justify-between items-center " >
        <Image className="mt-[900px]" src={ProgSectionimg} alt="Program Section Image" />
        <div className="flex-1 mt-[450px]  bg-gray-700 w-[748px] h-[400px] rounded-lg ">
          <h1 className="text-[#11AD8E] font-bold text-5xl text-center mt-[66px]">The Program in a Nutshell</h1>
          <h3 className="text-[#11AD8E] font-bold text-3xl mt-8 text-center underline">Earn While You Learn</h3>
          <p className="text-white font-normal text-xl mt-8 leading-7 text-center mb-[66px] mx-[56px]">In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the programs beginning. It resembles a cross between a corporate venture and an educational project.</p>
        </div>
    </div>
  )
}

export default Program