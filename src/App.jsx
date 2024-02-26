import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Fetch from "./components/fetch";
import Home from "./components/Home";
import NotFound from "./Not-found";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormikSignUp from "./components/Formik";
import ApiBackend from "./components/ApiBackend";
import Dashboard from "./components/Dashboard";
import LogIn from "./components/logIn";
import Mirage from "./Mirage/Mirag";
import FileUpload from "./FileUpload";
import Forget from "./components/Forget";


function App() {
    // const [count, setCount] = useState(0)
    return(
        <>
        <ToastContainer/>
        <Routes>
            {/* <Route>
                <Route path="/" element={<Layout/>}/>
            </Route> */}
            <Route element={<Layout/>}>
            <Route path="/" element={<Dashboard />}/>
            <Route path="/fetch" element={<Fetch />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/api" element={<ApiBackend/>}/>
            <Route path="/upload" element={<FileUpload/>}/>
            </Route>
            <Route path="/login" element={<LogIn/>}/>
            <Route path="/formik" element={<FormikSignUp />}/>
            <Route path="/mirage" element={<Mirage />}/>
            <Route path="*" element={<NotFound />}/>
            <Route path="/forget" element={<Forget />}/>
        </Routes>
        </>
    )
}
export default App ;