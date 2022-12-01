import React ,{useState,useContext} from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [errmsg,setErrMsg] = useState('');
    const [user,setUser] = useState({
        email:'',
        password:'',
    })
    const emailHandler = (event)=>{
        setUser((prevState)=>{
            return{
                ...prevState,
                email:event.target.value
            }
        })
    }
    const passwordHandler = (event)=>{
        setUser((prevState)=>{
            return{
                ...prevState,
                password:event.target.value
            }
        })
    }
    const loginHandler = (event) =>{
        event.preventDefault();
        axios.post('http://localhost:3025/login',user,{
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(response=>{
            // AuthCtx.setIsLoggedIn(true);
            navigate('/dashboard');
        })
        .catch(error=>console.log(error));
    }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="small-box mx-auto">
              <form onSubmit={loginHandler}>
                <div className="form-container p-4 mx-auto">
                    {errmsg !=='' && 
                    <div className='alert alert-danger'>{errmsg}</div>
                    } 
                  <h1>Login</h1>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                      onChange={emailHandler}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      onChange={passwordHandler}
                    />
                  </div>
                  <div className="mb-3">
                    <input type="submit" className="btn btn-primary" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;