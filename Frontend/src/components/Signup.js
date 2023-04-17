import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const history = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    const res = axios
      .post("http://localhost:5000/api/signup", {
        name: input.name,
        email: input.email,
        password: input.password,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/login"));
  };
  return (
    <div>
      {/* <form onSubmit={handleSubmit}>
        <Box
          marginLeft="auto"
          marginRight="auto"
          width={300}
          dispay="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h2">Signup</Typography>
          <TextField
            name="name"
            onChange={handleChange}
            value={input.name}
            variant="outlined"
            placeholder="Name"
            margin="normal"
          />
          <TextField
            name="email"
            onChange={handleChange}
            value={input.email}
            variant="outlined"
            placeholder="Email"
            margin="normal"
          />
          <TextField
            name="password"
            onChange={handleChange}
            value={input.password}
            variant="outlined"
            placeholder="Password"
            margin="normal"
          />
          <Button variant="contained" type="submit">
            Signup
          </Button>
        </Box>
      </form> */}
      <div className="wrapper">
        <div className="title">Signup</div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input_field">
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              value={input.name}
              className="input"
            />
            <i className="fas fa-user"></i>
          </div>
          <div className="input_field">
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={input.email}
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
              value={input.password}
              className="input"
            />
            <i className="fas fa-lock"></i>
          </div>
          <div className="btn">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
