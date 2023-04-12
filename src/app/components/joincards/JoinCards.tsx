import Image from "next/image"

const JoinCards = ({title, img}:any) => {
  return (
    <div className="bg-gray-900 h-[240px]  w-[280px] rounded-lg">
        <div className="text-[32px] text-center px-11">{title}</div>
        <div className="px-[108px] mt-[8px]"><Image src={img} alt={title} /></div>
    </div>
  )
}

export default JoinCards