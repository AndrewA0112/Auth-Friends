import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const UpdateFriend = (props) => {
    const [friend, setFriend] = useState(props.history.location.state.friend)

    const handleChange = event => {
        setFriend({
            ...friend,
            [event.target.name]: event.target.value
        })
    }

    const addFriend = event => {
        event.preventDefault();
        console.log(friend)
        axiosWithAuth()
            .put(`http://localhost:5000/api/friends/${friend.id}`, friend)
            .then(response => {
                props.history.push(`/friends/${friend.id}`)
            })
            .catch(error => console.log(error));
    }

    return (
        <div>
            <h1>UpdateFriend</h1>
            <div>
                <form onSubmit={addFriend}>
                    <input
                        type="text"
                        name="name"
                        value={friend.name}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="email"
                        value={friend.email}
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        name="age"
                        value={friend.age}
                        onChange={handleChange}
                    />
                    <button>Update Friend</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateFriend;