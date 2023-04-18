import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    const res = await axios
      .post("http://localhost:5000/api/login", {
        email: inputs.email,
        password: inputs.password,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/user"));
  };
  return (
    <div>
      <div className="wrapper">
        <div className="title">Login</div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input_field">
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={inputs.email}
              className="input"
            />
            <i className="far fa-envelope"></i>
          </div>
          <div className="input_field">
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={inputs.password}
              className="input"
            />
            <i className="fas fa-lock"></i>
          </div>
          <div className="btn">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
