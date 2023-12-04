import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

function useUsers(props) {
    const axiosSecure= useAxiosSecure()
    const {user}= useAuth()

    const { refetch, isPending, data : users=[] } = useQuery({
        queryKey: ['users', user?.email ],
        queryFn: async () => {
            const res = await axiosSecure.get('/users') ;
            return res.data ;
        },
      })

    return [users, isPending, refetch]
}

export default useUsers;