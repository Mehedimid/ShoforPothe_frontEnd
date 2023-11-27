import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';
import axios from 'axios';

function useGallary(props) {

    const axiosPublic = useAxiosPublic()

    const { isPending, data : gallary=[] } = useQuery({
        queryKey: ['gallary'],
        queryFn: async () => {
            const res = await axios.get('gallary.json') ;
            return res.data ;
        },
      })

    return [gallary, isPending]
}

export default useGallary;