import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { Link } from 'react-router-dom'

import './Friend.css'

const Friend = (props) => {
    const [friend, setFriend] = useState({})

    useEffect(() => {
        getFriend();
    }, [])
    console.log(props.history.location.pathname.split('/')[2])

    const getFriend = () => {
        const id = props.history.location.pathname.split('/')[2]
        axiosWithAuth()
            .get(`http://localhost:5000/api/friends/${id}`)
            .then(response => {
                setFriend(response.data)
            })
            .catch(error => console.log(error))
    }
    
    const deleteFriend = () => {
        axiosWithAuth()
            .delete(`http://localhost:5000/api/friends/${friend.id}`)
            .then(response => {
                console.log(response)
                props.history.push('/friends')
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <div className='navbar'>
                <Link className='navbarLink' to='/friends'>Friends List</Link>
            </div>
            <div className='friend'>
                <h2>{friend.name}</h2>
                <h3>{friend.email}</h3>
                <h3>{friend.age}</h3>
                <button><Link className='buttonLink' to={{ pathname: `/friends/${friend.id}/update`, state: {friend: friend}}}>Update Friend</Link></button>
                <button onClick={deleteFriend}>Delete Friend</button>
            </div>
        </div>
    )
}

export default Friend;