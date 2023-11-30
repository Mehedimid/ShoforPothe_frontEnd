import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

function useBooking(props) {
    const axiosPublic = useAxiosPublic()

    const { refetch, isPending, data : bookings=[] } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await axiosPublic.get('/bookings') ;
            return res.data ;
        },
      })

    return [bookings, isPending ,refetch]
}

export default useBooking;