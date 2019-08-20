import React, { useState } from 'react'
import axios from 'axios'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const AddFriend = (props) => {
    const [user, setUser] = useState({name: '', age: '', email: ''})

    const handleChange = event => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const addFriend = event => {
        event.preventDefault();
        console.log(user)
        axiosWithAuth()
            .post('http://localhost:5000/api/friends', user)
            .then(response => {
                console.log(response)
                props.history.push('/friends')
            })
            .catch(error => console.log(error));
    }

    return (
        <div>
            <h1>AddFriend</h1>
            <form onSubmit={addFriend}>
                <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="age"
                    value={user.age}
                    onChange={handleChange}
                />
                <button>Add Friend</button>
            </form>
        </div>
    )
}

export default AddFriend;