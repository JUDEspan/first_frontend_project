import {useFormik } from "formik"
import * as yup from "yup"
import axios from "axios";
const LogIn = () => {
    let url = "http://localhost:3000/login";
  const formik = useFormik({
    initialValues:{
        email: "",
        password:"",
    },
    onSubmit: (values) => {
      axios.post(url, values)
      console.log(values);
      // navigate("/login")
    },
    validationSchema : yup.object({
      email: yup.string().email("valid email address").required("required"),
      password: yup.string().required("required"),
    }), 
  });
  return (
    <>
    <div>
        <form onSubmit={formik.handleSubmit}>
            <input 
            type="text" 
            name="email" 
            className="form-control w-50"
            placeholder="Enter your email"
            value={formik.values.email}
            onChange={formik.handleChange}/>
            <input 
            type="password"  
            name="password" 
            className="form-control w-50"
            placeholder="password"
            value={formik.values.password}
            onChange={formik.handleChange}/>
            <button type="submit"  className="btn btn-info">Login</button>
        </form>
    </div>
    </>
  )
}

export default LogIn