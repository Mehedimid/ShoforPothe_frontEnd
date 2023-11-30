import React from 'react';
import { Navigate,} from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useAdmin from '../hooks/useAdmin';
import Loading from '../shared components/Loading';

function AdminRoute({children}) {
   const {user, loading} = useAuth()
   const [isAdmin, isAdminLoading] = useAdmin()

   if(loading || isAdminLoading) {
    return <Loading></Loading>
   }

   if (user && isAdmin) {
    return children
   }

   return <Navigate to='/' ></Navigate>
}

export default AdminRoute;