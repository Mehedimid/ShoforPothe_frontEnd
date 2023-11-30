import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

function useIsGuide(props) {

    const {user, loading} = useAuth()
    const axiosSecure = useAxiosSecure()

    const {data:isGuide, isPending:isGuideLoading} = useQuery({
        queryKey:[user?.email
            , 'isGuide'], 
        enabled: !loading ,
        queryFn: async() => {
            const res = await axiosSecure.get(`/users/guide/${user?.email}`)
            return res.data?.guide
        },
       
    })

    return [isGuide, isGuideLoading]
}

export default useIsGuide;