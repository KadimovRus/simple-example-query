import {useEffect, useState} from "react";
import MyTable from "./MyTable";
import {useMyData} from "../hooks/useMyData";

function MyData() {
    const [id, setId] = useState('');
    const [fetch, setFetch] = useState(false);

    const {isLoading, isSuccess, data} = useMyData(id, fetch);
    useEffect(() => {
        if (isSuccess) {
            setFetch(false);
        }
    }, [isSuccess, fetch]);
    return (
        <div className="App">
            <div className="search">
                <input className="searchTerm" type="text" placeholder="Введите номер" onChange={event => setId(event.target.value)} value={id}/>
                <button className="searchButton" onClick={() => setFetch(true)}><i className="fa fa-search"></i></button>
            </div>
            <MyTable isLoading={isLoading} data={data}/>
        </div>
    );
}

export default MyData;