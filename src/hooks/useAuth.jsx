import { useContext } from "react";
import { authContext } from "../auth provider/AuthProvider";


function useAuth(props) {
    return useContext(authContext)
}

export default useAuth;