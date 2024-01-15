import React, {useState} from 'react';
import InputSignUp from './InputSignUp';



const SignInButton = () => {

  const[currentForm, setCurrentForm] = useState(false);

  const style = {color:"pink",backgroundColor:"black", marginTop:"10px", marginBottom: "20px" }
  
  return (
    <div >
        <button className="btn btn-secondary" style={style} onClick={ () => setCurrentForm(!currentForm)}>Sign Up</button>
        {currentForm && <InputSignUp/>}
            
    </div>
  )
}

export default SignInButton;