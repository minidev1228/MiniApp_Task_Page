import { useState, ReactNode, useRef } from "react"

type Props = {
    children: ReactNode;
};

const Layout: React.FC<Props> = ({children}) =>{

    const appRef = useRef(null);

    return(
        <div className=" w-full relative bg-main h-screen">
            <main>{children}</main>
        </div>
    )
}

export default Layout