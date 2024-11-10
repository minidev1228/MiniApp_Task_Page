import React from "react"

type Props = {
    content: string;
    onClickHandler: () => void;
};


const YellowButton: React.FC<Props> = ({content, onClickHandler}) =>{
    return (
        <button onClick={()=>{onClickHandler()}} className=" bg-yellow text-black h-full pt-1 pb-1 pr-3 pl-3 rounded-md w-full">
            {content}
        </button>
    )
}

export default YellowButton