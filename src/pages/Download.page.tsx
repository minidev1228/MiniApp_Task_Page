
import Layout from "../Layouts/index"
import YellowIconButton from "../components/YellowIconButton"
import WalletConnect from "../components/WalletConnect"

import windowImg from "../assets/window.png"
import macosImg from "../assets/macos.png"
import androidImg from "../assets/android.png"
import iosImg from "../assets/ios.png"
import post1Img from "../assets/post1.png"
import post2Img from "../assets/post2.png"
import post3Img from "../assets/post3.png"
import post4Img from "../assets/post4.png"

const DownloadPage = () =>{
    return (
        <Layout>
            <div className=" w-full bg-main flex flex-col items-center pt-24" style={{minHeight:"calc(100vh - 64px)"}}>
                <WalletConnect />
                <br />
                <br />
                <h1 className=" text-white mb-10">DOWNLAOD GAME</h1>
                <div className="w-full flex items-center flex-col">
                    <div className="flex flex-col w-full sm:w-auto sm:flex-row items-center">
                        <div className=" w-10/12 max-w-64 sm:w-56 h-16 mr-2">
                            <YellowIconButton content={"for Windows"} img={windowImg} />
                        </div>
                        <div className=" w-10/12 max-w-64 sm:w-56 h-16 mr-2 mt-5 sm:mt-0">
                            <YellowIconButton content={"for macOS"} img={macosImg} />
                        </div>
                    </div>
                    <div className="flex flex-col w-full sm:w-auto sm:flex-row items-center mt-5">
                        <div className="w-10/12 max-w-64 sm:w-56 h-16 mr-2">
                            <YellowIconButton content={"for Android"} img={androidImg} />
                        </div>
                        <div className=" w-10/12 max-w-64 sm:w-56 h-16 mr-2 mt-5 sm:mt-0">
                            <YellowIconButton content={"for iOS"} img={iosImg} />
                        </div>
                    </div>
                </div>
                <div className="w-full overflow-x-auto sm:flex sm:justify-center mt-10" style={{height:"325px"}}>
                    <div className="flex justify-center items-center" style={{width:"1000px"}}>
                        <img src={post1Img} className="h-44 w-36 float-left ml-10 mr-10" alt="" />
                        <img src={post2Img} className="h-44 w-36 float-left ml-10 mr-10" alt="" />
                        <img src={post3Img} className="h-44 w-36 float-left ml-10 mr-10" alt="" />
                        <img src={post4Img} className="h-44 w-36 float-left ml-10 mr-10" alt="" />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default DownloadPage