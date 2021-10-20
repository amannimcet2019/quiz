import React,{useEffect} from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Axios from 'axios';
import Cookies from 'js-cookie';
import { useSelector , useDispatch } from "react-redux";
import { userLogin , noLogin } from '../../redux/actions/loginActions';

const NavBar=()=>{    
    const dispatch = useDispatch();    
    const state=useSelector((state)=>state.loginState.active)
    
    useEffect(()=>fun(),[])
    const fun=async()=>{
        try {
            const res = await Axios.post('http://localhost:5000/verify',{token:Cookies.get('jwttoken')})
            console.log(res.data)
            if(res.data==="NO ONE IS ACTIVE")
                dispatch(noLogin())
            else 
                dispatch(userLogin())
        } catch (error) {
            window.alert("error")
            console.log(error)
        }
    }

    switch(state)
    {
        case "NO ONE IS ACTIVE": return (<React.Fragment>
            <Navbar className="py-3" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Link to="/"><Navbar.Brand className="ml-2 ">MCQ - Test</Navbar.Brand></Link>
                <Navbar.Toggle className="mr-2" aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto mr-3">
                            <Link className="nav-link ml-3" to="/">Home</Link>
                            <Link className="nav-link ml-3" to="/login">Login</Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </React.Fragment>)
        case "USER IS ACTIVE": return(<React.Fragment>
            <Navbar className="py-3" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Link to="/"><Navbar.Brand className="ml-2 ">MCQ - Test</Navbar.Brand></Link>
                <Navbar.Toggle className="mr-2" aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto mr-3">
                            <Link className="nav-link ml-3" to="/">Home</Link>
                            <Link className="nav-link ml-3" to="/test">Test</Link>
                            <Link className="nav-link ml-3" to="/history">History</Link>
                            <Link className="nav-link ml-3" to="/recommend">Recommend</Link>                            
                            <Link className="nav-link ml-3" to="/logout">Logout</Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </React.Fragment>)
    }
}

export default NavBar;