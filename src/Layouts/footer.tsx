
import noteImg from "../assets/y-m.png";
import xImg from "../assets/y-x.png";
import discordImg from "../assets/y-d.png"

const Footer = () =>{
    return (
        <div className="w-full h-16 bg-main flex justify-center items-center">
            <button className=" mr-2 ml-2"><img src={noteImg} className="size-5" alt="" /></button>
            <button className=" mr-2 ml-2"><img src={xImg} className="size-5" alt="" /></button>
            <button className=" mr-5 ml-2"><img src={discordImg} className="size-5" alt="" /></button>
        </div>
    )
}

export default Footer