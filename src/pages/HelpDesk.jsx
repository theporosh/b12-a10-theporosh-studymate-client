import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const HelpDesk = () => {
  
   const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query.trim()) {
      toast("Please enter your question before submitting!");
      return;
    }

   
    toast("Your question has been submitted successfully!");
    setQuery(""); 
  };

  const handleLogout = () => {
    logOut();
    toast("You have been logged out!");
    navigate("/auth/login");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 p-4">
      <div className="card w-full max-w-lg bg-primary text-primary-content shadow-xl p-6">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold mb-2">Help Desk</h2>
          <p className="mb-4">
            Welcome {user?.displayName || "Student"}! Submit your question and our support team will respond shortly.
          </p>

          {/* HelpDesk Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <textarea
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type your question here..."
              className="textarea textarea-bordered w-full text-base-content"
              rows={4}
            />
            <button type="submit" className="btn btn-neutral w-full">
              Submit Question
            </button>
          </form>

          {/* Footer Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
            <Link to="/" className="btn btn-outline w-full sm:w-auto">
              Home
            </Link>
           
            <button onClick={handleLogout} className="btn btn-outline w-full sm:w-auto">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpDesk;
