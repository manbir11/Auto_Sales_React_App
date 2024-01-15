import React, { useState } from 'react';
import Login from './Login';


const LoginInButton = () => {

    const [currentForm,setCurrentForm] = useState(false);

    const style = {color:"pink",backgroundColor:"black", marginTop:"10px", marginBottom: "20px"}


    return(
        <div>
            <button className="btn btn-secondary" style={style} onClick={() => setCurrentForm(!currentForm)}>Login</button>
            {currentForm && <Login/>}
        </div>
    )
}

export default LoginInButton;