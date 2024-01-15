import React, {useState} from 'react';
import './InputSignUp.css';

const Login = () => {

    const[login, setLogin] = useState({email:"", password:""});


    const handleLogin =(e) =>{
        setLogin(prevState => ({...prevState, [e.target.name] : e.target.value}))
    }



    return(
        <div className='signIn-body'>
            <form>
                <label>Email</label>
                <input type='email' placeholder="You're Email here!" name='email' id='email' value={login.email} onChange={handleLogin}/>
                <label>Password</label>
                <input type='password' placeholder="******" name='password' id='password' value={login.password} onChange={handleLogin}/>
                <button>Login</button>
            </form>
        
        </div>
    )
}

export default Login;