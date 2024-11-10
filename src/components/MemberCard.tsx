import React from "react"

type Props = {
    title: string;
    content: string;
    img: string;
    name: String;
};

const MemberCard: React.FC<Props> = ({title, img, name, content}) =>{
    return (
        <div className="bg-yellow mt-5 ml-5 h-80 flex flex-col items-center float-left rounded-lg text-black pt-5 p-5 mr-10" style={{width:"250px"}}>
            <p className="mb-5 text-center text-xs">{title}</p>
            <img className="mb-5 size-20" src={img} alt="" />
            <p className="mb-5  text-center">{name}</p>
            <p className="mb-3  text-center  text-xs">{content}</p>
        </div>
    )
}

export default MemberCard