import React, { useContext, useState } from 'react'
import { NameContext } from '../context/NameContext'

const UserUpdate = () => {

    const [newName, setNewName] = useState("");

    const { setUserName } = useContext(NameContext);

    const handleChange = (e) => {
        setNewName(e.target.value);
    }

    const handleUpdate = () => {
        setUserName(newName);
        setNewName("");
    }

    return (
        <>
            <input type='text' value={newName} placeholder='Type new username' onChange={handleChange} />

            <button onClick={handleUpdate}>
                Click to update username
            </button >
        </>
    )
}

export default UserUpdate