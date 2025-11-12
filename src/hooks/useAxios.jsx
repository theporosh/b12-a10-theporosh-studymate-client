import axios from "axios"

const axiosInstance = axios.create({
    baseURL: 'https://b12-a10-theporosh-studymate-server.vercel.app'
})


const useAxios = () => {
    return axiosInstance;
}

export default useAxios;