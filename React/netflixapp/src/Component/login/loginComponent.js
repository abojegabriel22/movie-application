import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import Header from '../Header';

const url = "https://authentication-wppd.onrender.com/api/login"

const Login = () => {
    let navigate = useNavigate();
    const initialValues = {
        email: "",
        password: ""
    };

    const [values, setValues] = useState(initialValues);
    const [message,setMessage] = useState()

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    }
    const checkout = () => {
        console.log(values)
        fetch(url,{
            method: 'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(values)
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.auth === false){
                setMessage(data.message)
            }else{
                sessionStorage.setItem('ltk',data.token)
                navigate(`/`)
            }
        })
    }
    return(
        <>
            <Header/>
            <div className="container loginC">
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3>Login</h3>
                    </div>
                    <div className="panel-body">
                        <div className='row'>
                            <h2 style={{color:"red"}}>{message}</h2>
                            <div className='col-md-12 form-group'>
                                <label for='email' className='control-label'>Email</label>
                                <input className='form-control' placeholder='Enter Email Address' id='email' name='email' value={values.email} onChange={handleInputChange}/>
                            </div>
                            <div className='col-md-12 form-group'>
                                <label for='password' className='control-label'>password</label>
                                <input className='form-control' placeholder='Enter Password' id='password' type="password" name='password' value={values.password} onChange={handleInputChange}/>
                            </div>
                        </div>
                        <button className="btn btn-success mt-4 ms-3" onClick={checkout}>
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login