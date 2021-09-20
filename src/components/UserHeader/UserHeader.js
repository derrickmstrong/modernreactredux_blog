import React from 'react'
// import { useEffect } from 'react'

const UserHeader = (props) => {
    const { user, getUser, userId } = props
    
    // useEffect(() => {
    //     getUser(userId)  
    // }, [getUser, userId])
    
    
    if (!user) return null

    return (
        <div className='header'>
            <p>{user.name}</p>
        </div>
    )
}

 export default UserHeader

