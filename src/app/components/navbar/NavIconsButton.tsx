"use client";
import {BiBell, BiMoon} from "react-icons/bi"
import {BsFillSunFill} from "react-icons/bs"
import {useTheme} from "next-themes";

const NavIconsButton = () => {

const {systemTheme, theme, setTheme}=useTheme();
let currentTheme = theme === "system"? systemTheme : theme;
  return (
    <div className="flex space-x-7 text-white text-2xl cursor-pointer">
        <BiBell />
        <p className="-mt-2">|</p>
        {
          currentTheme =="light"? (<BiMoon onClick={()=> setTheme("dark")}/>):(<BsFillSunFill  onClick={()=> setTheme("light")}/>)
        }
        
        
    </div>
  )
}

export default NavIconsButton