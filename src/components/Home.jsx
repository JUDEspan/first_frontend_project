import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify";

const Home = () => {
    const navigate = useNavigate()
    const signUp = () =>{
        toast("Sign up successfully");
        navigate("/")
    }
    return (
    <>
    <h1>Home</h1>
    <button onClick={signUp} className="btn btn-info"> SignUp</button>
    </>
    )
}

export default Home