import React from "react"

type Props = {
    content: string;
    onClickHandler: () => void;
};


const BlueButton: React.FC<Props> = ({content, onClickHandler}) =>{
    return (
        <button onClick={()=>{onClickHandler()}} className=" bg-blue text-black text-sm h-full pt-1 pb-1 pr-3 pl-3 rounded-md w-full">
            {content}
        </button>
    )
}

export default BlueButton