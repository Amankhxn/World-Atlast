import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'

const Error = () => {
    const error = useRouteError();
    return (
        <div>
           {error && <p> {error.data}</p>}

           <NavLink to='/'>
            <button>Go back</button>
           </NavLink>
        </div>
    )
}

export default Error
