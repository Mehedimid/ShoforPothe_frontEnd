import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

function usePackages(props) {
    const axiosPublic = useAxiosPublic()

    const { isPending, data : packages=[] } = useQuery({
        queryKey: ['packages'],
        queryFn: async () => {
            const res = await axiosPublic.get('/packages') ;
            return res.data ;
        },
      })
    return [packages, isPending]
}

export default usePackages;