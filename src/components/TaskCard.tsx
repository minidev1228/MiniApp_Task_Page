import React from "react"

import BlueButton from "./BlueButton";

type Props = {
    title: string;
    img: string;
    bonus: number;
};

const TaskCard: React.FC<Props> = ({title, img, bonus}) =>{
    return (
        <div className=" w-full h-16 bg-card rounded-md flex items-center p-3 mb-5">
            <div>
                <img src={img} className="size-8 mr-5 " alt="" />
            </div>
            <div className=" flex-grow">
                <h2 className="mb-2">{title}</h2>
                <p className=" text-card-p text-xs">Earn <span className=" text-white text-sm">{bonus}+</span> coins</p>
            </div>
            <div className="w-20 h-8">
            <BlueButton content={"Start"} onClickHandler={()=>{}} />
            </div>
        </div>
    )
}

export default TaskCard