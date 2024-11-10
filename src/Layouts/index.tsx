import { ReactNode } from "react"

type Props = {
    children: ReactNode;
};

const Layout: React.FC<Props> = ({children}) =>{

    return(
        <div className=" w-full relative bg-main h-screen">
            <main>{children}</main>
        </div>
    )
}

export default Layout