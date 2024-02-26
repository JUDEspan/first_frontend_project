import axios from "axios";
import { useEffect, useState } from "react";

const Mirage = () => {
    const [data, setData] = useState([])
    const url = "/api/user"
    useEffect (() => {
        axios.get(url)
            .then((response) => {
                console.log(response.data.user);
                setData(response.data.users);
            });
    },[]);
  return (
    <>
    {/* {data.map((user)=(
        <div key={user.id}>
        <h1>{user.gender}</h1>
        </div>
    ))} */}
    </>
  )
}

export default Mirage