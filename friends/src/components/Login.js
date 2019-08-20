import React, { useState } from 'react'
import axios from 'axios'

const Login = (props) => {

    const [credentials, setCredentials] = useState({ username: '', password: '' });

    const handleChange = event => {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value
        })
    }

    const login = event => {
        event.preventDefault();
        console.log(credentials)
        axios
            .post('http://localhost:5000/api/login', credentials)
            .then(response => {
                localStorage.setItem('token', response.data.payload);
                props.history.push('/friends')
            })
            .catch(error => console.log(error));
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={login}>
                <input
                    type="text"
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                />
                <button>Log in</button>
            </form>
        </div>
    )
}

export default Login;