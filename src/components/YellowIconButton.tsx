import React from "react"

type Props = {
    content: string;
    img: string;
};


const YellowIconButton: React.FC<Props> = ({content, img}) =>{
    return (
        <button className=" bg-yellow text-black h-full pt-1 pb-1 pr-3 pl-10 rounded-md w-full flex justify-start items-center">
            <img src={img} className="size-7 mr-5" alt="" />
            <span>{content}</span>
        </button>
    )
}

export default YellowIconButton