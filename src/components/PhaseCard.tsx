
import "./styles.css"

const Order1 = () =>{
    return (
        <div className=" w-2 h-2 outline outline-1 outline-yellow border-solid	border-2 border-black bg-yellow flex justify-center items-center mr-2">
        </div>
    )
}

const Order2 = () =>{
    return (
        <div className=" w-2 h-2 outline outline-1 outline-yellow border-solid	border-2 border-orange bg-yellow flex justify-center items-center mr-2">
        </div>
    )
}

const Order3 = () =>{
    return (
        <div className=" w-2 h-2 outline outline-1 outline-yellow border-solid	border-2 border-orange bg-orange flex justify-center items-center mr-2">
        </div>
    )
}

type Props = {
    title: string;
    style: number;
    items: string[];
};


const PhaseCard: React.FC<Props> = ({title, items, style}) =>{
    return (
        <div className="phase-card">
            <h1 className="mr-5 text-xl text-black">{title}</h1>
            <div className="flex sm:flex-col sm:items-start sm:justify-center flex-wrap w-10/12 sm:w-auto">
                {
                    items.map((item: string)=>{
                        return(
                            <div className="mt-3 flex flex-row justify-center items-center mr-2">
                                {
                                    style===1?<Order1 />:style===2?<Order2 />:<Order3 />
                                }
                                <p className="text-center text-xs text-black inline-block">{item}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PhaseCard