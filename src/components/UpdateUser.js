import React, { useState } from 'react';
import { NameContext } from '../context/NameContext';
import { useContext } from 'react';

const UpdateUser = () => {
    const [newName, setNewname] = useState('');
    const { setUserName } = useContext(NameContext)

    const handleUpdate = (e) => {
        setNewname(e.target.value);
    }

    const handleContext = () => {
        setUserName(newName);
        setNewname('');
    }

    console.log(newName);

    return (
        <div>
            <input type='text' placeholder='Type new name' value={newName} onChange={handleUpdate} />
            <button onClick={handleContext}>Click to update name</button>
        </div>
    )
}

export default UpdateUser