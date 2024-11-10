import React , {useState} from "react"

type Props = {
    content: string;
    onClickHandler: () => void;
};


const BlueButton: React.FC<Props> = ({content, onClickHandler}) =>{

    const [isLoading, setIsLoading] = useState(false);

    const click = () =>{
        setIsLoading(true);
        onClickHandler();
    }

    return (
        <button onClick={()=>{click()}} className=" bg-blue text-black text-sm h-full pt-1 pb-1 pr-3 pl-3 rounded-md w-full flex justify-center items-center">
            {
                isLoading ? <span className="loader" style={{height:"15px", width:"15px"}}></span> : <p>{content}</p>
            } 
        </button>
    )
}

export default BlueButton