import axios from "axios";

const axiosPublic = axios.create({
       baseURL:'http://localhost:5000/', 
    //    baseURL:'https://shofor-pothe-server.vercel.app/',
})

function useAxiosPublic(props) {
    return axiosPublic;
}

export default useAxiosPublic;