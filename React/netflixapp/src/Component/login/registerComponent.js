import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import './Register.css'

const url = "https://authentication-wppd.onrender.com/api/register"

const Register = () => {
    let navigate = useNavigate();
    const initialValues = {
        name: "",
        email: "",
        password: "",
        phone: ""
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
            if(data.status === false){
                setMessage(data.message)
            }else{
                navigate(`/login`)
            }
        })
    }
    return(
        <>
            <Header/>
            <div className="container register">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3>Register</h3>
                    </div>
                    <div className="panel-body">
                        <div className='row'>
                            <h2 style={{color:"red"}}>{message}</h2>
                            <div className='col-md-6 form-group'>
                                <label for='fname' className='control-label'>Name</label>
                                <input className='form-control' placeholder='Enter Your FullName' id='fname' name='name' value={values.name} onChange={handleInputChange}/>
                            </div>
                            <div className='col-md-6 form-group'>
                                <label for='email' className='control-label'>Email</label>
                                <input className='form-control' placeholder='Enter Email Address' id='email' name='email' value={values.email} onChange={handleInputChange}/>
                            </div>
                            <div className='col-md-6 form-group'>
                                <label for='password' className='control-label'>password</label>
                                <input className='form-control' placeholder='Enter Password [8 characters minimum length]' id='password' minLength='8' type="password" name='password' value={values.password} onChange={handleInputChange}/>
                            </div>
                            <div className='col-md-6 form-group'>
                                <label for='phone' className='control-label'>Phone</label>
                                <input className='form-control' placeholder='Enter Phone Number' id='phone' name='phone' value={values.phone} onChange={handleInputChange}/>
                            </div>  
                        </div>
                        <button className="btn btn-success mt-4 ms-3" onClick={checkout}>
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
