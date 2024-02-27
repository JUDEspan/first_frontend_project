import axios from "axios";
import {useFormik } from "formik"
import { useNavigate } from "react-router-dom";
import * as yup from "yup"
import "./formik.css"
import sweet from "sweetalert2"
const FormikSignUp = () => {
    const navigate = useNavigate()
  let url = "http://localhost:3000/register";
    const formik = useFormik({
        initialValues:{
            firstName:"",
            lastName: "",
            email: "",
            password:"",
        },
        onSubmit: (values) => {
          axios.post(url, values)
          console.log(values);
          navigate("/login")
          sweet.fire({
            title: "SignUp Successfully",
            text: "",
            icon: "success",
            timer: 2000
          });
        },
        validationSchema : yup.object({
          firstName: yup.string().required("required").max(10).min(4, "minimum of four character"),
          lastName: yup.string().required("required").max(10).min(4, "minimum of four character"),
          email: yup.string().email("valid email address").required("required"),
          password: yup.string().required("required"),
        }), 
      });
    console.log(formik);

  return (
    <div className="head shadow">
    <h1 className="ms-5 ps-4 my-4">Sign Up</h1>
    <form onSubmit={formik.handleSubmit}>
    <input 
    type="text"
    placeholder="first name" 
    name="firstName" 
    className="form-control w-75"
    value={formik.values.firstName}
    onChange={formik.handleChange} />
    <span className="text-danger">{formik.errors.firstName}</span>
    <br />
    <input type="text" 
    placeholder="last name" 
    name="lastName" 
    className="form-control w-75"
    value={formik.values.lastName}
    onChange={formik.handleChange}/>
    <span>{formik.errors.lastName}</span>

    <br />

    <input type="email"  
    placeholder="Email" 
    name="email" 
    className="form-control w-75"
    value={formik.values.email}
    onChange={formik.handleChange} />
    <br />
    <input type="password"
    placeholder="Password" 
    name="password"
    className="form-control w-75"
    value={formik.values.password}
    onChange={formik.handleChange}  />
    {formik.errors.password}

    <br />
    <button type="submit" className="btn btn-info">Display input</button>
    </form>
    </div>
  )
}

export default FormikSignUp