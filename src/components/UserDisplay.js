import React from 'react';
import { NameContext } from '../context/NameContext';
import { useContext } from 'react';
import UpdateUser from './UpdateUser';

export const UserDisplay = () => {
    const { userName } = useContext(NameContext);
    return (
        <>
            <h1>UserDisplay</h1>
            <h3>{userName}</h3>
            <UpdateUser />
        </>
    )
}
