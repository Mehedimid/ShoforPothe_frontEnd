import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useIsGuide from '../hooks/useIsGuide';
import Loading from '../shared components/Loading';

function GuideRoute({children}) {
    const {user, loading} = useAuth()
    const [isGuide, isGuideLoading] = useIsGuide()

    if(loading || isGuideLoading){
        return <Loading></Loading>
    }

    if(user && isGuide) {
       return children
    }

   return <Navigate to='/'></Navigate>
}

export default GuideRoute;