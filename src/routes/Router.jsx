import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CreatePartnerProfile from "../pages/CreatePartnerProfile";
import MyConnections from "../pages/MyConnections";
import AuthLayout from "../layouts/AuthLayout";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "",
                element: <Home></Home>,
            },
            {
                path: "/category/:id",
                element: <CreatePartnerProfile></CreatePartnerProfile>,
            },
            {
                path: "/myConnections",
                element: <MyConnections></MyConnections>,
            },
            
        ]
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <h2>Login</h2>,
            },
            {
                path: "/auth/register",
                element: <h2>Register</h2> ,
            },

        ]   
    },
    {
        path: "/news",
        element: <h2>News Layout</h2>,
    },
    {
        path: "/*",
        element: <h2>Error404</h2>,
    },
]);

export default router;