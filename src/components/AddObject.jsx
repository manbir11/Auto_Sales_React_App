import React from 'react';
import axios from 'axios';

const AddObject = () => {

    const apiUrl =  "https://6415ddbc351c4aed4911cdcf.mockapi.io/item";

    const newObject =  {
        name: "Tom",
        avatar : "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/720.jpg"
    }

    const handleOnAdd = async ()  => {
        try{
            await axios.post(apiUrl,newObject);
        }
        catch(err){
            console.log(err);

        }
    }

    const style = {color:"pink",backgroundColor:"black", marginTop:"10px", marginBottom: "20px"}
  

    return(
        <div>
            <button  className="btn btn-secondary" style={style} onClick={handleOnAdd}>Add</button>
        </div>
    )
}

export default AddObject;