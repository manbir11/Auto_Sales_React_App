import React,{useState} from 'react';
import './InputSignUp.css';


const InputSignUp = () => {

    const [userInput, setUserInput] = useState({firstName:" ", lastName:" ", email:" ", password:" ", confirmPassword:" "});
    

    const handleOnChange = (event) => {
        setUserInput(prevInput => ({...prevInput, [event.target.name] : event.target.value}))
    }


    return (
        <div className='signIn-body'> 
                <form>
                    <label>First Name</label>
                    <input type="firstName" placeholder="First Name " id="firstName" name="firstName" value={userInput.firstName} onChange={handleOnChange} />
                    <label>Last Name</label>
                    <input type="lastName" placeholder='Last Name' id="lastName" name="lastName" value={userInput.lastName} onChange={handleOnChange} />
                    <label>Email</label>
                    <input type="email" placeholder="you're email here!" id="email" name="email" value={userInput.email} onChange={handleOnChange} />
                    <label>Password</label>
                    <input type="password" placeholder="*******" id="password" name="password" value={userInput.password} onChange={handleOnChange} />
                    <label>Confirm Password </label>
                    <input type="text" placeholder='Confirm Password' id="confirmPassword" name="confirmPassword" value={userInput.confirmPassword} onChange={handleOnChange} />
                    <button style={{marginTop:"20px", textAlign:"center"}}>Register</button>
                </form>
              
        </div>
    )
}

export default InputSignUp;