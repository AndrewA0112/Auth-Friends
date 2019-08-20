import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { Link } from 'react-router-dom'

import './FriendList.css'

const FriendList = () => {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        getFriends();
    }, [])

    const getFriends = () => {
        axiosWithAuth()
            .get('http://localhost:5000/api/friends')
            .then(response => {
                setFriends(response.data)
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <div className='navbar'>
                <Link className='navbarLink' to='/friends'>Friends List</Link>
            </div>
            <div className='friendList'>
            {
                friends && friends.map(friend => {
                    return (
                        <Link className='friendLink' to={`friends/${friend.id}`}>
                            <div className='friendLinkInfo' key={friend.id}>
                                <h1>{friend.name}</h1>
                                <h2>{friend.email}</h2>
                                <h2>{friend.age}</h2>
                            </div>
                        </Link>
                    )
                })
            }
            </div>
        </div>
    )
}

export default FriendList;