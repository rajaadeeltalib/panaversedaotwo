import Link from "next/link"

const PrimaryButton = ({labelName, link}: any) => {
  return (
    <div className="text-black bg-[#11AD8E] h-12 w-[143px] px-[24px] py-[10px] text-[18px] font-semibold rounded-lg hover:bg-transparent hover:text-[#11AD8E] hover:border border-[#11AD8E]">
       <Link href={link}>
        <button>
        {labelName}
        </button>
        </Link>
    </div>
  )
}

export default PrimaryButton