import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import app from "../firebase/firebase.config";
import { toast } from "react-toastify";

const auth = getAuth(app);

const ForgetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Extract email from query string (?email=...)
  const queryParams = new URLSearchParams(location.search);
  const prefilledEmail = queryParams.get("email") || "";

  const [email, setEmail] = useState(prefilledEmail);

  const handleResetPassword = (e) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email first.");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Reset link sent! Check your Gmail inbox.");
        // redirect to Gmail
        window.location.href = "https://mail.google.com";
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="max-w-md mx-auto my-10 bg-base-200 p-8 rounded-2xl shadow">
      <h2 className="text-3xl font-bold text-center mb-6">
        Reset Your Password
      </h2>
      <form onSubmit={handleResetPassword} className="space-y-4">
        <label className="label">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your registered email"
          className="input input-bordered w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button
          type="submit"
          className="btn w-full bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white border-none"
        >
          Reset Password
        </button>
      </form>

      <p className="text-center mt-4 text-sm">
        Remember your password?{" "}
        <a
          onClick={() => navigate("/auth/login")}
          className="text-[#632ee3] font-semibold cursor-pointer"
        >
          Back to Login
        </a>
      </p>
    </div>
  );
};

export default ForgetPassword;
