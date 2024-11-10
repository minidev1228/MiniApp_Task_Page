import { useNavigate } from "react-router-dom";
import YellowButton from "../components/YellowButton"
import PhaseCard from "../components/PhaseCard"
import Layout from "../Layouts/index";

const LandingPage = () =>{
    const navigate = useNavigate();

    const goToDownLoadPage = () =>{
        navigate("/download");
    }

    return (
        <Layout>
            <div>
                <h1>Hello, This is mini app task</h1>
            </div>
        </Layout>
    )
}

export default LandingPage