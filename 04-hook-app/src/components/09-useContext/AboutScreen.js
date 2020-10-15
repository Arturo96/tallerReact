import React, { useContext } from 'react'
import { UserContext } from './UserContext';


export const AboutScreen = () => {
    const {user, setUser} = useContext(UserContext);

    return (
        <div>
            <h1>AboutScreen</h1>
            <hr/>

            <pre>
                {JSON.stringify(user, null, 4)}
            </pre>

            <button onClick={() => setUser({})} className="btn btn-secondary">Logout</button>
        </div>
    )
}
