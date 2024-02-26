import axios from "axios";
import { useEffect, useState } from "react";

const ApiBackend = () => {
    // let URL = "http://localhost:3000/api/";
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(URL)
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            {data.map((data) => (
                <div key={data.id}>
                    <div>
                        <h1>{data.name}</h1>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ApiBackend;
