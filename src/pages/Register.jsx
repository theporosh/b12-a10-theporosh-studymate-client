import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {

    const { createUser, signInWithGoogle } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from || "/";

    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [photoURL, setPhotoURL] = useState("");
    const [password, setPassword] = useState("");

    const [passwordError, setPasswordError] = useState("");

    // Password validation function
    const validatePassword = (password) => {
        if (!/[A-Z]/.test(password)) {
            return "Password must contain at least one uppercase letter";
        }
        if (!/[a-z]/.test(password)) {
            return "Password must contain at least one lowercase letter";
        }
        if (password.length < 6) {
            return "Password must be at least 6 characters long";
        }
        return "";
    };

    const handleRegister = (e) => {
        e.preventDefault();
        // console.log({ name, email, photoURL, password });
        const error = validatePassword(password);
        if (error) {
            setPasswordError(error);
            return;
        }
        setPasswordError("");

        createUser(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                navigate(from, { replace: true });
                // navigate(`${location.state ? location.state : "/"}`);
                toast.success("Registration successful!");
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                toast.success(errorMessage);
            });

     };

    const handleGoogleRegister = () => {
       
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                //console.log(user);
               
                navigate(from, { replace: true });
              
                toast.success("Google registration successful!");
            })
            .catch(error => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                // setError(errorCode);
                toast.success(errorMessage);
            })
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200">
            <div className="w-full max-w-md p-8 space-y-6 bg-base-100 rounded-2xl shadow-lg">
                <h1 className="text-3xl font-bold text-center text-indigo-600">StudyMate Register</h1>
                <p className="text-center text-gray-500">Join StudyMate and start collaborating!</p>

                <form onSubmit={handleRegister} className="space-y-4">
                    <div>
                        <label className="block text-base-content font-medium mb-1">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            placeholder="Enter your name"
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div>
                        <label className="block text-base-content font-medium mb-1">Email</label>
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
                        <label className="block text-base-content font-medium mb-1">Photo URL</label>
                        <input
                            type="text"
                            value={photoURL}
                            onChange={(e) => setPhotoURL(e.target.value)}
                            required
                            placeholder="Enter your photo URL"
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div>
                        <label className="block text-base-content font-medium mb-1">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Enter your password"
                            className="input input-bordered w-full"
                        />
                        {passwordError && (
                            <p className="text-red-500 text-sm mt-1">{passwordError}</p>
                        )}
                    </div>

                    <button type="submit" className="btn btn-primary w-full text-white">
                        Register
                    </button>
                </form>

                <div className="divider">OR</div>

                <button
                    onClick={handleGoogleRegister}
                    className="btn btn-outline w-full flex items-center justify-center gap-2"
                >
                    <FcGoogle size={24} />
                    Continue with Google
                </button>

                <p className="text-center text-base-content">
                    Already have an account?{" "}
                    <Link
                        to="/auth/login"
                        className="text-indigo-600 font-semibold hover:underline"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
