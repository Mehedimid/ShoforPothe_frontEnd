import axios from "axios";

const axiosSecure = axios.create({
       baseURL:'http://localhost:5000/', 
    //    baseURL:'https://shofor-pothe-server.vercel.app/',
})

function useAxiosSecure(props) {
    return axiosSecure;
}

export default useAxiosSecure;