import React, { useState } from 'react';
import Cookies from 'js-cookie';
import Axios from 'axios';
import {Link, Redirect} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogin,adminLogin } from '../../redux/actions/loginActions'


const Login=()=>{
    const dispatch = useDispatch()
    let initialState={
        username:"",
        pass:""
    }
    let [userState,setUserState]=useState(initialState)
    let [submitted,setSubmitted]=useState(0)
    let [passType,setpassType]=useState("password")
    let [userError,setUserError]=useState()
    let [spinner,setSpinner]=useState(0)
    const send=async (event)=>{
        event.preventDefault();
        setSpinner(1);
        try {
            const res = await Axios.post("http://localhost:5000/login",userState);
            Cookies.set('jwttoken', res.data.token,{ 
                expires: new Date(new Date().getTime() + 60 * 60 * 1000),
                path:'/'
            });                                    
            setSpinner(0)
            window.alert('Login successful')
            dispatch(userLogin())
            setSubmitted(1)
        } catch (error) {
            if(error.response.status===406)
                setUserError("All fields required, try again");                                    
            else if(error.response.status===400)
                setUserError("Invalid username password");
            setSpinner(0)
        }
    }
    return(
        <React.Fragment>            
            {/* <pre>{JSON.stringify(userState)}{JSON.stringify(adminState)}</pre> */}
            {submitted?<Redirect to="/"/>:            
            <div className="my-5 container">
                <div className="row">
                    <div className="col-md-7 mx-auto">                    
                    
                    <div className="card mb-5">
                            <div className="card-header bg-light">
                                <h3>Login</h3>
                            </div>
                            <form onSubmit={send}>
                                <div className="card-body">
                                    Username : <input type="text" value={userState.username} className="form-control" onChange={(event)=>{
                                        setUserState({
                                            ...userState,
                                            username:event.target.value
                                        })
                                    }}/>
                                    Password : <input type={passType} value={userState.pass} className="form-control" onChange={(event)=>{
                                        setUserState({
                                            ...userState,
                                            pass:event.target.value
                                        })
                                    }}/>
                                    <input className="mt-3 d-inline" type="checkbox" id="id" onClick={(event)=>{
                                        if(event.target.checked)
                                            setpassType("text")
                                        else
                                            setpassType("password")
                                    }} />                           
                                    <label className="form-check-label pl-2 " htmlFor="id">Show Password</label>
                                    <h5 className="text-danger mt-2 mb-0">{userError?userError:null}</h5>
                                </div>
                                <div className="card-footer">{!spinner?
                                    <button className="btn btn-info" type="submit">Login</button>:
                                    <button className="btn btn-info" type="button">
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                        Loading...
                                        </button>}
                                    <Link to="/Registration"className="ml-3 text-primary"> Create Account</Link>
                                </div>
                            </form>
                        </div>
                    
                    
                    
                        
                    </div>
                </div>
            </div>
            }
        </React.Fragment>
    )
}

export default Login;