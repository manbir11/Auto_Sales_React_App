import React, { useState } from 'react';
import axios from 'axios';
import './ApiCall.css';

const ApiCall = () => {

    const apiUrl =  "https://6415ddbc351c4aed4911cdcf.mockapi.io/item";
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    

    const handleOnClickApi = () => {

        axios
            .get(apiUrl)
            .then((response) => setData(response.data))
            .catch((err) => setError(err));
    };


    const handleOnClickAsyn =  async () => {
        try{
           const response = await axios.get(apiUrl);
           setData(response.data);
        }
        catch(err){
            setError(err.message);
        }

    } 

    
    const ShowData = (props) => {
        return(
            <div > 
                {
                    props.list.map((item, index) => (
                        <div className='api-body' key ={item}> 
                        <img src= {item.avatar} alt= {item.name}/>
                        <p style={{color:"white"}}>Name: {item.name}</p>
                        

                        </div>
                    ))
                }
            </div>
        )
    }

    const style = {color:"pink",backgroundColor:"black", marginTop:"10px", marginBottom: "20px"}

    return (
        <div>
            <button className="btn btn-secondary" style={style} onClick={handleOnClickAsyn}>Click</button>
            <ShowData list = {data}/>
            {error && <p>Error : {error.message}</p>}
        </div>
    )
}

export default ApiCall;