import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

function useStories(props) {
    const axiosPublic = useAxiosPublic()

    const { isPending, data : stories=[] } = useQuery({
        queryKey: ['stories'],
        queryFn: async () => {
            const res = await axiosPublic.get('/stories') ;
            return res.data ;
        },
      })

    return [stories, isPending]
}

export default useStories;