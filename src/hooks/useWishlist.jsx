import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

function useWishlist(props) {
    const axiosPublic = useAxiosPublic()

    const { isPending, data : wishlist=[] } = useQuery({
        queryKey: ['wishlist'],
        queryFn: async () => {
            const res = await axiosPublic.get('/wishlist') ;
            return res.data ;
        },
      })

    return [wishlist, isPending]
}

export default useWishlist;