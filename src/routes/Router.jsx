import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CreatePartnerProfile from "../pages/CreatePartnerProfile";
import MyConnections from "../pages/MyConnections";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import ForgetPassword from "../pages/ForgetPassword";
import FindPartners from "../pages/FindPartners";
import ProfileDetails from "../components/ProfileDetails";
import PrivateRoute from "../provider/PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/profileDetails/:id",
                element: <ProfileDetails></ProfileDetails>,
            },
            {
                path: "/findPartners",
                element: <FindPartners></FindPartners>,
            },
            {
                path: "/createPartnerProfile",
                element: <PrivateRoute>
                    <CreatePartnerProfile></CreatePartnerProfile>
                </PrivateRoute>,
            },
            {
                path: "/myConnections",
                element: <MyConnections></MyConnections>,
            },
            {
                path: "/profile",
                element: <Profile></Profile>,
            },

        ]
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>,
            },
            {
                path: "/auth/register",
                element: <Register></Register>,
            },
            {
                path: "/auth/forgot-password",
                element: <ForgetPassword></ForgetPassword>,
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