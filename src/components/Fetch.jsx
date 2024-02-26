import  { useState, useEffect } from "react";
import axios from "axios";

const Fetch = () => {
    const endPoint = "https://api.github.com/users";
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    const fetchData = () => {
        setIsLoading(true);
        axios.get(endPoint)
            .then((response) => {
                console.log(response.data);
                setData(response.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    useEffect(() => {
        console.log("useEffect");
        fetchData();
    }, []);

    return (
        <div>
            <button onClick={fetchData} disabled={isLoading}>Fetch</button>
            {isLoading && <p>Loading...</p>}
            {data.length > 0 ? (
                data.map((item, index) => (
                    <div key={index}>
                        <p>{item.login}</p>
                        <img src={item.avatar_url} alt={item.login} />
                    </div>
                ))
            ) : (
                <p>No data available</p>
            )}
        </div>
    );
};

export default Fetch;
