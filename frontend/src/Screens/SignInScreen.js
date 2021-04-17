import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from "../actions/userActions";

function SignInScreen (props){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userSignIn = useSelector(state => state.userSignIn);
    const userInfo = userSignIn && userSignIn.userInfo;
    const loading = userSignIn && userSignIn.loading
    const error = userSignIn && userSignIn.error;
    const dispatch = useDispatch();

    useEffect(() => {
        if(userInfo){
            props.history.push("/");
        }
        return () => {
            //
        };
    }, [userInfo, props.history]);
    
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password));
    }

    return <div className="form">
        <form onSubmit={submitHandler}>
            <ul className="form-container">
                <li>
                    <h2>Sign In</h2>
                </li>
                <li>
                    {loading && <div>Loading...</div>}
                    {error && <div>{error}</div>}
                </li>
                <li>
                    <label htmlFor="email">
                        Email
                    </label>
                    <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>
                    </input>
                </li>
                <li>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}></input>
                </li>
                <li>
                    <button type="submit" className="button primary">SignIn</button>
                </li>
                <li>
                    New to TechWorld?
                </li>
                <li>
                    <Link to="/register" className="button secondary text-center">Create your TechWorld account</Link>
                </li>

            </ul>
        </form>
    </div>
}

export default SignInScreen;