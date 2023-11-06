import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import { Link } from 'react-router-dom';

const url = "https://authentication-wppd.onrender.com/api/user"

const Header = () => {

    const [userData, setUserData] = useState('');
    let navigate = useNavigate();

    useEffect(() => {
        if(sessionStorage.getItem('ltk') !== null){
            fetch(url,{
                method:'GET',
                headers:{
                    'x-access-token':sessionStorage.getItem('ltk')
                }
            })
            .then((res) => res.json())
            .then((data) => {
                setUserData(data)
            })
        }
    },[])

    const handleLogout = () => {
        sessionStorage.removeItem('ltk');
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('user.auth')
        setUserData('');
        navigate('/')
    }

    const ConditionalHeader = () => {
            if(userData){
                if(userData.name){
                    sessionStorage.setItem('user',JSON.stringify(userData))
                    return(
                        <>
                            <div className="btnHeader" id='btnHeaderIn'>
                                <h4>UNLIMITED TV SHOWS & MOVIES</h4>
                                <Link to="/register" className='btnHeader1'>
                                    <span className="sbtn"><span id='loginWelcomeSpan'><i class="fa fa-user-circle fasSize" aria-hidden="true"></i> Hi {userData.name}</span></span>
                                </Link>
                                <button onClick={handleLogout} className='btn btn-danger' id='signOut'>
                                    <i class="fa fa-sign-out fasSize" aria-hidden="true"></i> Sign Out
                                </button>
                            </div>
                        </>
                    )
                }

            }else{
                return(
                    <>
                        <div className="btnHeader">
                            <h4>UNLIMITED TV SHOWS & MOVIES</h4>
                            <Link to="/register" className='btnHeader1'>
                                <button className="sbtn">join now</button>
                            </Link>
                            <Link to="/login" className='btnHeader1'>
                                <button>sign in</button>
                            </Link>
                        </div>
                    </>
                )
            }
    }


    return(
        <>
            <header id="header">
                <div className="imge">
                    <span className="img">Netflix &nbsp;
                        <Link className='btn btn-danger' to="/">Home</Link>
                    </span>
                </div>
                {ConditionalHeader()}
                
            </header>
        </>
    )
}
export default Header;