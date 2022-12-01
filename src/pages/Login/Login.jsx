import React, { useContext, useEffect, useState } from "react";
import "./login.css";
import a from "../../images/homeBg.jpg";
import Button from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import GlobalContext from "../../components/Context/GloablContext";

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
		<section
			className="login"
			style={{
				backgroundImage: `url(${a})`,
			}}
		>
			<div className="login-container" data-aos="zoom-in">
				<div className="login-left">
					<div className="legin-left-top">
						<div className="login-left-title">Welcome!</div>
						<form
							className="login-left-form"
							onSubmit={loginHandler}>
							<div className="login-left-form-group">
								<label>
									<span className="material-icons">
										person
									</span>
								</label>
								<input
									type="email"
									name="username"
									value={user.username}
									onChange={emailHandler}
									placeholder="Email"
								/>
							</div>
							<div className="login-left-form-group">
								<label>
									<span className="material-icons">lock</span>
								</label>
								<input
									type="password"
									name="password"
									value={user.password}
									onChange={passwordHandler}
									placeholder="Password"
								/>
							</div>
							<div className="login-left-form-group">
								<Link to="/forgot">Forgot Password?</Link>
								<Button
									type="submit"
									text="Login"
									size="small"
                  
								/>
							</div>
						</form>
					</div>
					<div className="login-left-bottom">
						<span className="alertAcc">Don't have an account? </span>
						<Link className="signUp" to="/register">Sign Up</Link>
					</div>
				</div>
				<div className="login-right">
					<button className="icon" onClick={() => navigate("/")}>
						<span className="material-icons m" color= "white">close</span>
					</button>
				</div>
			</div>
		</section>
	);
};

export default Login;