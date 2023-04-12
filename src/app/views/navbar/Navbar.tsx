import Image from "next/image"
import Logo from "../../assets/images/logo.png"
import MenuItems from "@/app/components/navbar/MenuItems"
import MenuDropDown from "@/app/components/navbar/MenuDropDown"
import NavIconsButton from "@/app/components/navbar/NavIconsButton"
import PrimaryButton from "@/app/components/buttons/PrimaryButton"

const Navbar = () => {
  return (
    <div className="grid grid-cols-4 bg-[#09121D] opacity-70 sticky top-0">
        <div className="ml-20 my-4" >
        <Image src={Logo} alt="Logo" />
        </div>
        <div className="flex col-span-2 space-x-10 items-center">
            <MenuItems labelName="Home" link="/"/>
            <MenuItems labelName="About" link="/"/>
            <MenuDropDown labelName="Courses"/>
            <MenuItems labelName="Contact" link="/"/>
        </div>
        <div className="flex items-center space-x-10">
        <NavIconsButton />
        <PrimaryButton labelName="Apply Now" link="/" />
        </div>
    </div>
  )
}

export default Navbar