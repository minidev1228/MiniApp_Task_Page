import Layout from "../Layouts/index";
import TaskCard from "../components/TaskCard";

const RocketImg = "https://img.icons8.com/?size=100&id=80ArDaExWQAI&format=png&color=3a8ef0"
import TelegramImg from "../assets/telegram.png"
import DiscordImg from "../assets/discord.png"
import FaceBookImg from "../assets/facebook.png"
import InstagramImg from "../assets/instagram.png"
import LinkdenImg from "../assets/linkden.png"
import XImg from "../assets/x.png"
import YoutubeImg from "../assets/youtube.png"

const LandingPage = () =>{

    return (
        <Layout>
            <div className='w-full h-full flex flex-col text-white items-center pt-10'>
                <img src={RocketImg} className="size-20" alt="" />
                <h1 className=" mt-5 text-2xl font-bold mb-5">Earn more coins</h1>
                <div style={{height:"calc(100vh - 223px)"}} className="w-11/12 overflow-y-scroll">
                    <TaskCard title={"Join our Telegram channel"} bonus={100} img={TelegramImg} link={"https://t.me/hamburg_english"} />
                    <TaskCard title={"Join our Discord"} bonus={100} img={DiscordImg} link={"https://t.me/hamburg_english"} />
                    <TaskCard title={"Follow us on facebook"} bonus={100} img={FaceBookImg} link={"https://t.me/hamburg_english"} />
                    <TaskCard title={"Follow us on instgram"} bonus={100} img={InstagramImg} link={"https://t.me/hamburg_english"} />
                    <TaskCard title={"Follow us on linkden"} bonus={100} img={LinkdenImg} link={"https://t.me/hamburg_english"} />
                    <TaskCard title={"Follow us on twiter"} bonus={100} img={XImg} link={"https://t.me/hamburg_english"} />
                    <TaskCard title={"Subscribe youtube channel"} bonus={100} img={YoutubeImg} link={"https://t.me/hamburg_english"} />
                </div>
            </div>
        </Layout>
    )
}

export default LandingPage