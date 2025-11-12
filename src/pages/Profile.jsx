import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";


const Profile = () => {
  
  const { user, updateUser, setUser } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);

  // Local state to hold form input values
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  if (!user) {
    return (
      <div className="text-center mt-10">
        <p className="text-lg text-gray-500">Please log in to see your profile.</p>
      </div>
    );
  }

  // Handle Profile Update
  const handleUpdate = (e) => {
    e.preventDefault();

    updateUser({ displayName: name, photoURL: photo })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photo }); 
        toast.success("Profile updated successfully!");
        setIsEditing(false);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="max-w-lg mx-auto my-10 bg-base-200 p-8 rounded-2xl shadow">
      <div className="flex flex-col items-center">
        <img
          src={user.photoURL || "https://i.ibb.co.com/8Dz69p7m/profile.jpg"}
          alt={user.displayName || "User Avatar"}
          className="w-24 h-24 rounded-full border-4 border-[#632ee3]"
        />

        <h2 className="text-2xl font-bold mt-4">{user.displayName || "No Name Found"}</h2>
        <p className="text-gray-500">{user.email}</p>

        <p className="mt-2 text-sm text-gray-400">
          Joined:{" "}
          {user.metadata?.creationTime
            ? new Date(user.metadata.creationTime).toLocaleDateString()
            : "Unknown"}
        </p>

        {/* Toggle between view and edit mode */}
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="btn btn-primary my-3"
          >
            Update Profile
          </button>
        ) : (
          <form
            onSubmit={handleUpdate}
            className="mt-4 w-full space-y-3 border-t pt-4"
          >
            <div>
              <label className="label">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="label">Photo URL</label>
              <input
                type="text"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="flex gap-2 justify-center">
              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>

              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="btn btn-ghost"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Profile;
