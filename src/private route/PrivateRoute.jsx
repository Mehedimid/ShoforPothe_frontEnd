import React from 'react';
import useAuth from '../hooks/useAuth';

function PrivateRoute({children}) {
    const {user, loading} = useAuth()

    if(loading) {
        return 
    }

    if(user){
        return children
    }


}

export default PrivateRoute;