import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState } from "react";

const Tenary = () => {
    const [name, setName] = useState("")
    const [userName, setUserName] = useState("")
    

    let gender = {userName}

    let allStudents = [
        {firstName:"Oluwaseun", lastName: "Daniel"},
        {firstName:"Oluseyi", lastName: "Dayo"},
        {firstName:"Idowu", lastName: "Favour"},
    ]
    const changeName = () => {
        setName(userName)
    }

    const user= (e) =>{
        setUserName(e.target.value)
    }
    return (

    <div>
        <h1 className={ gender == "male" ? "bg-warning": "bg-danger"}>
            {userName}
        </h1>
        <input onChange={user} type="text" placeholder="Enter username"  className="form-control w-25"/>
        <button className="btn btn-info" onClick={changeName}>Change Name</button>
        {allStudents.map((student, index)=>(
            <table key={index} className="border border-dark">
                <thead className="border border-dark">
            <th className="text-danger border border-dark">First Name</th>
            <th>Last Name</th>
                </thead>
                <tbody>
                    <td className="border border-dark">{student.firstName}</td>
                    <td>{student.lastName}</td>
                </tbody>
            </table>
        ))}
    </div>

    )
}

export default Tenary