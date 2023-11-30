import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

function useUsers(props) {
    const axiosSecure= useAxiosSecure()

    const { refetch, isPending, data : users=[] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users') ;
            return res.data ;
        },
      })

    return [users, isPending, refetch]
}

export default useUsers;