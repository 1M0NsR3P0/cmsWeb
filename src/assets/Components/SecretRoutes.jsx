import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppContext } from './Context';
import Loading from './Loading';


const SecretRoutes = ({children}) => {
    const location = useLocation()
    const { user } = useAppContext()
    // console.log(user, userLoading)
    if (user) {
        // console.log('user is loading thats why it is loading');
        <Loading/>
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }
    return children;
};

export default SecretRoutes;