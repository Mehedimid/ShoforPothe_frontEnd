import axios from "axios";

const axiosPublic = axios.create({
       baseURL:'/', 
    //    baseURL:'https://final-practice1.vercel.app',
})

function useAxiosPublic(props) {
    return axiosPublic;
}

export default useAxiosPublic;