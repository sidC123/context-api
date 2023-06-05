import React, { useContext } from 'react'
import { NameContext } from '../context/NameContext'
import UserUpdate from './UserUpdate';

const User = () => {

    const { userName } = useContext(NameContext);

    return (
        <>
            <h1>User</h1>
            <h3>User Name: {userName}</h3>
            <UserUpdate />
        </>
    )
}

export default User