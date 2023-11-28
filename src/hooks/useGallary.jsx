import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

function useGallary(props) {

    const axiosPublic = useAxiosPublic()

    const { isPending, data : gallary=[] } = useQuery({
        queryKey: ['gallary'],
        queryFn: async () => {
            const res = await axiosPublic.get('/gallary') ;
            return res.data ;
        },
      })

    return [gallary, isPending]
}

export default useGallary;