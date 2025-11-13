import axios from "axios";
import useAuth from "./useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const instance = axios.create({
    baseURL: 'https://b12-a10-theporosh-studymate-server.vercel.app'
})

const useAxiosSecure = () => {

    const { user, logOut } = useAuth();
    const navigate = useNavigate();

    // set token in the header for all the api call using axiosSecure hook
    useEffect(() => {
        // request interceptor
        const requestInterceptor = instance.interceptors.request.use((config) => {
            // console.log(config)
            const token = user.accessToken;
            if (token) {
                config.headers.authorization = `Bearer ${token}`
            }
            return config;
        })

        // response interceptor
        const responseInterceptor = instance.interceptors.response.use(res => {
            return res;
        }, err => {
            // console.log('error inside the interceptor', err);
            const status = err.status;
            if (status === 401 || status === 403) {
                // console.log('user bad request')
                logOut()
                    .then(() => {
                        navigate('/auth/login');
                    })
            }
        })

        return () => {
            instance.interceptors.request.eject(requestInterceptor);
            instance.interceptors.response.eject(responseInterceptor);
        }

    }, [user, logOut, navigate])

    return instance;
}

export default useAxiosSecure;