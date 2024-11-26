import React, { useState, useContext } from "react";
import { ILogin } from "../model/user.model";
import { Form, Navigate } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login: React.FC<any> = () => {
  const [login, setLogin] = useState(false);

  const [form, setForm] = useState<ILogin>({ email: "", password: "" });

  const navigate = useNavigate();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const login = { email: form.email, password: form.password };
    try {
      const response = await axios.post(
        `http://localhost:5000/api/v1/auth/login `,
        login
      );
      console.log(response);

      if (!response.data.error) {
        const token = response.data.data.token;
        localStorage.setItem("token", token);
        navigate("/");
      }
    } catch (error) {
      console.error({
        error: true,
        message: "error in user logging in ",
        data: null,
      });
    }
  };

  return (
    <form onSubmit={handleLogin} className='auth-form'>
      <input
        type='email'
        name='email'
        placeholder='email'
        value={form.email}
        onChange={handleInputChange}
        required
      />
      <input
        type='password'
        name='password'
        value={form.password}
        placeholder='password'
        onChange={handleInputChange}
        required
      />
      <button onClick={handleLogin} type='submit' className='auth-btn'>
        LOGIN IN
      </button>
    </form>
  );
};

export default Login;
