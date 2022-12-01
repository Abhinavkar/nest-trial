import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
//import UserContext from '../adminDashboard/products/store/UserContext';
import UserContext from '../../components/Store/UserContext'
//import './signin.css';
import './register.css';
const Register = (props) => {
    const UserCtx = useContext(UserContext)
    const [formInput, setFormInput] = useState({
        full_name: '',
        email: '',
        batch: '',
        password: '',
        secondary_school: '',
        high_school: '',
        graduate: '',
        post_graduate: '',
        doctarate: '',
    })
    const full_nameHandler = (event) => {
        setFormInput({
            ...formInput,
            full_name: event.target.value
        })
    }
    const emailHandler = (event) => {
        setFormInput({
            ...formInput,
            email: event.target.value
        })
    }
    const batchHandler = (event) => {
        setFormInput({
            ...formInput,
            batch: event.target.value
        })
    }
    const passwordHandler = (event) => {
        setFormInput({
            ...formInput,
            password: event.target.value
        })
    }
    const secondary_schoolHandler = (event) => {
        setFormInput({
            ...formInput,
            secondary_school: event.target.value
        })
    }
    const high_schoolHandler = (event) => {
        setFormInput({
            ...formInput,
            high_school: event.target.value
        })
    }
    const graduateHandler = (event) => {
        setFormInput({
            ...formInput,
            graduate: event.target.value
        })
    }
    const post_graduateHandler = (event) => {
        setFormInput({
            ...formInput,
            post_graduate: event.target.value
        })
    }
    const doctarateHandler = (event) => {
        setFormInput({
            ...formInput,
            doctarate: event.target.value
        })
    }

    const [err, setErr] = useState({
        isError: false,
        message: ''
    })
    const formSubmitHandler = async (event) => {
        // event.preventDefault();
        if (formInput.email == '') {
            setErr({
                isError: true,
                message: 'Email is required'
            })
        }
        else if (formInput.batch == '') {
            setErr({
                isError: true,
                message: 'profile pic is required'
            })
        }
        else if (formInput.password == '') {
            setErr({
                isError: true,
                message: 'Password is required'
            })
        }
        else if (formInput.secondary_school == '') {
            setErr({
                isError: true,
                message: 'Secondary school is required'
            })
        }
        else if (formInput.high_school == '') {
            setErr({
                isError: true,
                message: 'High school is required'
            })
        }
        else if (formInput.graduate == '') {
            setErr({
                isError: true,
                message: 'Graduation is required'
            })
        }
        else if (formInput.post_graduate == '') {
            setErr({
                isError: true,
                message: 'Post graduate is required'
            })
        }
        else if (formInput.doctarate == '') {
            setErr({
                isError: true,
                message: 'Doctarate is required'
            })
        }

        else {
            setErr({
                isError: false,
                message: ''
            })
            await saveuserdata(formInput);
        }

    }
    const saveuserdata = async (formData) => {
        const use = {
            full_name: formData.full_name,
            email: formData.email,
            batch: formData.batch,
            password: formData.password,
            secondary_school: formData.secondary_school,
            high_school: formData.high_school,
            graduate: formData.graduate,
            post_graduate: formData.post_graduate,
            doctarate: formData.doctarate

        }
        const message = await axios.post("http://localhost:3025/signup", use, {
            header: {
                'Content-Type': 'application/json'
            }
        })
        console.log(message.data.Summary)
    }
    return (
        <>
            <div className="reg-form">
                <div className="reg-card">
                    <div className="reg-heading">User Registration</div>
                    <form onSubmit={formSubmitHandler}>
                        {err.isError ? <div className='errMessage'>{err.message}</div> : null}
                        <div className="reg-group">
                            <p>Full Name : </p>
                            <input type="text" placeholder='User Name' className="texts" onChange={full_nameHandler} required></input>
                        </div>
                        <div className="reg-group">
                            <p>Email : </p>
                            <input type="email" placeholder="Email" onChange={emailHandler} required></input>
                        </div>
                        <div className="reg-group">
                            <p>Batch : </p>
                            <input type="text" placeholder="Batch" onChange={batchHandler} required></input>
                        </div>
                        <div className="clearfix"></div>
                        <div className="reg-group1">
                            <p>Password : </p>
                            <input type="password" placeholder='Password' onChange={passwordHandler}></input>
                        </div>
                        <div className="reg-group1">
                            <p>Re-Enter Password : </p>
                            <input type="password" placeholder='Confirm Password'></input>
                        </div>
                        <div className='eduDetails'>
                            <div className='dropDown reg-secSchool'>
                                <p>Secondary School : </p>
                                <select onChange={secondary_schoolHandler}>

                                    <option selected value="none">N/A</option>
                                    <option value="Aditya Birla Public School, Rayagada">Aditya Birla Public School, Rayagada</option>
                                    <option value="Badagada Government School, Bhubaneswar">Badagada Government School, Bhubaneswar</option>
                                    <option value="Balangir Public School, Balangir">Balangir Public School, Balangir</option>
                                    <option value="Bhargabi School, Puri district">Bhargabi School, Puri district</option>
                                    <option value="Capital School, Bhubaneswar">Capital School, Bhubaneswar</option>
                                    <option value="Carmel School, Rourkela">Carmel School, Rourkela</option>
                                    <option value="D.A.V. Public School, Chandrasekharpur, Bhubaneswar">D.A.V. Public School, Chandrasekharpur, Bhubaneswar</option>

                                </select>
                            </div>
                            <div className='dropDown reg-highSchool'>
                                <p>High School : </p>
                                <select onChange={high_schoolHandler}>
                                    <option default>Choose a High School</option>
                                    <option value="none">N/A</option>
                                    <option value="Aditya Birla Public High School, Rayagada">Aditya Birla Public High School, Rayagada</option>
                                    <option value="Badagada Government High School, Bhubaneswar">Badagada Government High School, Bhubaneswar</option>
                                    <option value="Balangir Public High School, Balangir">Balangir Public High School, Balangir</option>
                                    <option value="Bhargabi High School, Puri district">Bhargabi High School, Puri district</option>
                                    <option value="Carmel High School, Rourkela">Carmel High School, Rourkela</option>
                                    <option value="Capital High School, Bhubaneswar">Capital High School, Bhubaneswar</option>
                                    <option value="D.A.V. Public High School, Chandrasekharpur, Bhubaneswar">D.A.V. Public High School, Chandrasekharpur, Bhubaneswar</option>

                                </select>
                            </div>
                            <div className='dropDown reg-grad'>
                                <p>Graduation : </p>
                                <select onChange={graduateHandler}>
                                    <option default>Choose a Graduate</option>
                                    <option value="none">N/A</option>
                                    <option value="Ekamra College, Bhubaneswar">Ekamra College, Bhubaneswar</option>
                                    <option value="IIT Bhubaneswar, Bhubaneswar">IIT Bhubaneswar, Bhubaneswar</option>
                                    <option value="Kalinga Intitute of Industrial Technology, Bhubaneswar">Kalinga Intitute of Industrial Technology, Bhubaneswar</option>
                                    <option value="Odisha Uiversity of Technology and Research, Bhubaneswar">Odisha Uiversity of Technology and Research, Bhubaneswar</option>
                                    <option value="Silicon Institute of Technology, Bhubaneswar">Silicon Institute of Technology, Bhubaneswar</option>
                                    <option value="Trident Academy of Technology, Bhubaneswar">Trident Academy of Technology, Bhubaneswar</option>
                                    <option value="NIT Rourkela">NIT Rourkela</option>
                                </select>
                            </div>
                            <div className='dropDown reg-postGrad' >
                                <p>Post Graduation : </p>
                                <select onChange={post_graduateHandler} required>
                                    <option default>Choose a Post Graduate</option>
                                    <option value="none">N/A</option>
                                    <option value="Bijepur College, Bargarh">Bijepur College, Bargarh</option>
                                    <option value="IIT Bhubaneswar, Bhubaneswar">IIT Bhubaneswar, Bhubaneswar</option>
                                    <option value="Kalinga Intitute of Industrial Technology, Bhubaneswar">Kalinga Intitute of Industrial Technology, Bhubaneswar</option>
                                    <option value="Khallikote Autonomouse College, Berhampur">Khallikote Autonomouse College, Berhampur</option>
                                    <option value="NIT Rourkela">NIT Rourkela</option>
                                    <option value="Silicon Institute of Technology, Bhubaneswar">Silicon Institute of Technology, Bhubaneswar</option>
                                    <option value="SCB Medical College, Cuttack">SCB Medical College, Cuttack</option>
                                </select>
                            </div>
                            <div className='dropDown reg-doc'>
                                <p>Doctarate : </p>
                                <select onChange={doctarateHandler}>
                                    <option default>Choose a Doctarate</option>
                                    <option value="none">N/A</option>
                                    <option value="GIET University, Rayagada">GIET University, Rayagada</option>
                                    <option value="IIT Bhubaneswar, Bhubaneswar">IIT Bhubaneswar, Bhubaneswar</option>
                                    <option value="Kalinga Intitute of Industrial Technology, Bhubaneswar">Kalinga Intitute of Industrial Technology, Bhubaneswar</option>
                                    <option value="NIT Rourkela">NIT Rourkela</option>
                                    <option value="Utkal University, Bhubaneswar">Utkal University, Bhubaneswar</option>
                                </select>
                            </div>
                            <div className="reg-group button">
                                <button className='reg-button'>Register</button>
                            </div>
                        </div>
                        
                            <p className='linkToLogIn'>Already have an account? <Link to="/login"><a>Login</a></Link></p>
                        
                        <div className="clearfix"></div>
                    </form>
                </div>
            </div>
        </>
    )

}
export default Register;