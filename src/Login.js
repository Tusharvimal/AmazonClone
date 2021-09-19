import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Login.css'
import { auth } from './firebase';

function Login() {
    const history = useHistory();
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(Email, Password)
        .then((auth) => {
            history.push('/')
        })
        .catch(error => alert(error.message));
    }

    const register = e => {
        e.preventDefault()

        auth.createUserWithEmailAndPassword(Email, Password)
        .then((auth) => {
            //it successfully created a new user with email and password
            if (auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
            <img className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
            </Link>
            <div className="login_container">
                <h1>Sign-in</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input type="text" value={Email} onChange={e => setEmail(e.target.value) }/>

                    <h5>Password</h5>
                    <input type="password" value={Password} onChange = {e => setPassword(e.target.value) } />
                    <button type="submit" onClick={signIn} className="login_signInButton">Sign In</button>
                </form>
                <p>
                    By signing-in you agree to AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
                    Notice.
                </p>
                <button onClick={register} className="login_registerButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
