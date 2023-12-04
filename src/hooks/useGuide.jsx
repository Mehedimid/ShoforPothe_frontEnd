import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

function useGuide(props) {
    const axiosPublic = useAxiosPublic()

    const {refetch,  isPending, data : guides=[] } = useQuery({
        queryKey: ['guides'],
        queryFn: async () => {
            const res = await axiosPublic.get('/guides') ;
            return res.data ;
        },
      })

    return [guides, isPending, refetch]
}

export default useGuide;