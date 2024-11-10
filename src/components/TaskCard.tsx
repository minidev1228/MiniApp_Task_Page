import React from "react"
import { useNavigate } from "react-router-dom";

import BlueButton from "./BlueButton";

type Props = {
    title: string;
    img: string;
    bonus: number;
    link: string;
};

const TaskCard: React.FC<Props> = ({title, img, bonus, link}) =>{

    const navigate = useNavigate();


    const redirect = () =>{
        console.log(link);
        navigate(link);
    }

    return (
        <div className=" w-full h-16 bg-card rounded-md flex items-center p-3 mb-5">
            <div className=" bg-img w-10 h-10 mr-5 p-1 flex justify-center items-center rounded-full overflow-hidden" >
                <img src={img} className="size-8 " alt="" />
            </div>
            <div className=" flex-grow">
                <h2 className="mb-2" style={{fontSize:"14px"}}>{title}</h2>
                <p className=" text-card-p text-xs">Earn <span className=" text-white text-sm">{bonus}+</span> coins</p>
            </div>
            <div className="w-20 h-8">
            <BlueButton content={"Start"} onClickHandler={()=>{redirect()}} />
            </div>
        </div>
    )
}

export default TaskCard