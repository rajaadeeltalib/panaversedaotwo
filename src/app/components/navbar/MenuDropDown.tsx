import {RiArrowDropDownLine} from "react-icons/ri"

const MenuDropDown = ({labelName}:any) => {
  return (
    <div className="text-white text-[24px] hover:text-[#11AD8E] hover:underline flex">
        {labelName}
        <RiArrowDropDownLine className="mt-2" />
    </div>
  )
}

export default MenuDropDown