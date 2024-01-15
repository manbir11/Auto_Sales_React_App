import React, {useState} from 'react';
import AddUserApi from './AddUserApi';



const UserButton = () => {

  const[currentForm, setCurrentForm] = useState(false);

  const style = {color:"pink",backgroundColor:"black", marginTop:"10px", marginBottom: "20px" }
  
  return (
    <div >
        <button className="btn btn-secondary" style={style} onClick={ () => setCurrentForm(!currentForm)}>Add Item</button>
        {currentForm && <AddUserApi/>}
            
    </div>
  )
}

export default UserButton;