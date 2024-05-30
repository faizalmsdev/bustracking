import React from 'react'
import { Navigate,useLocation } from 'react-router-dom';
// import { UserContext } from '../Contexts/UserContext'



function PublicRoute({ children }) {
        return <Navigate to="/login" />
    return children;
}
export default PublicRoute;