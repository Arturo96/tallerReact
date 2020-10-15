import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const LoginScreen = () => {

    const userLogin = {
        id: 345,
        name: 'Carlos Vargas'
    }

    const {setUser} = useContext(UserContext);

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr/>
            <button onClick={() => setUser(userLogin)} className="btn btn-primary">Login</button>
        </div>
    )
}
