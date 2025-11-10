import React, { use, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {

    const { signIn, signInWithGoogle } = use(AuthContext);


    // const navigate = useNavigate();
    // const location = useLocation();
    // const from = location.state?.from?.pathname || "/"; // redirect after login

    // const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Mock login function (replace with actual auth API)
    const handleLogin = (e) => {
        e.preventDefault();
        //console.log({ email, password });
        // if (email === "student@example.com" && password === "123456") {
        //     toast.success("Login successful!");
        //     navigate(from, { replace: true });
        // } else {
        //     toast.error("Invalid email or password!");
        // }

        signIn(email, password)
            .then(result => {
                const user = result.user;
                //console.log(user);
                // navigate(`${location.state ? location.state : "/"}`);
                toast.success("Logged in successfully!");

            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                // alert(errorMessage);
                // setError(errorCode);
                toast.success(errorMessage);
            });
    };

    const handleGoogleLogin = () => {
        // Replace this with real Google auth
        
        // navigate(from, { replace: true });

        signInWithGoogle()
            .then(result => {
                const user = result.user;
                //console.log(user);
                // navigate(`${location.state ? location.state : "/"}`);
                toast.success("Google login successful!");
            })
            .catch(error => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                // setError(errorCode);
                toast.success(errorMessage);
            })
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-lg">
                <h1 className="text-3xl font-bold text-center text-indigo-600">StudyMate Login</h1>
                <p className="text-center text-gray-500">Connect, Collaborate, and Learn!</p>

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Enter your email"
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Enter your password"
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div className="flex justify-between items-center">
                        <Link to="/auth/forgot-password" className="text-sm text-indigo-600 hover:underline">
                            Forgot Password?
                        </Link>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary w-full text-white"
                    >
                        Login
                    </button>
                </form>

                <div className="divider">OR</div>

                <button
                    onClick={handleGoogleLogin}
                    className="btn btn-outline w-full flex items-center justify-center gap-2"
                >
                    <FcGoogle size={24} />
                    Continue with Google
                </button>

                <p className="text-center text-gray-500">
                    Don't have an account?{" "}
                    <Link to="/auth/register" className="text-indigo-600 font-semibold hover:underline">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
