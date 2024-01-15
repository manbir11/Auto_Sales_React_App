import React, { useState } from 'react';
import axios from 'axios';
import './AddUserApi.css'


const AddUserApi = () => {

    const apiUrl =  "https://6415ddbc351c4aed4911cdcf.mockapi.io/item";
    const[data, setData] = useState({name: "", id: "", age:""})
    

    const handleSubmit = (e) => { 
        e.preventDefault()
        axios.post(apiUrl, {data})
        .then(response => console.log(response.data))
        
    }

    const handleOnAddUSer =  (event) => {
        setData({...data, [event.target.name] : event.target.value})
    }

return (
    <div className='body'> 
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input id='name' name='name' value={data.value} placeholder='name' type='text' onChange={handleOnAddUSer} ></input>
            <label>User Id</label>
            <input id='id' name='id' value={data.id} placeholder='id' type='number' onChange={handleOnAddUSer}></input>
            <label>Age</label>
            <input id='age' name='age' value={data.age} placeholder='age' type='number' onChange={handleOnAddUSer}></input>
            <button>Submit</button>
        </form>
    </div>
)

}

export default AddUserApi;