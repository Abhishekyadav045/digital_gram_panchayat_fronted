import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const Edit = () => {
  const navigate = useNavigate();

  // localStorage se user data lena
  const user = JSON.parse(localStorage.getItem("user"));

  const [profileData, setProfileData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    mobile: user?.mobile || "",
    village: user?.village || "",
    aadhar: user?.aadhar || "",
  });

  // input handle karna
  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  // Update Profile
  const updateProfile = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(
        `${BASE_URL}/api/update-profile/${user._id}`,
        profileData,
      );

      if (res.data.success) {
        toast.success("Profile Updated Successfully");

        // local storage update
        localStorage.setItem("user", JSON.stringify(res.data.user));

        setTimeout(() => {
          navigate("/my-profile");
        }, 1000);
      }
    } catch (error) {
      console.log(error);
      toast.error("Profile Update Failed");
    }
  };

  return (
    <div className="container mt-5">
      <Toaster />

      <div className="card shadow p-4">
        <h2 className="text-success mb-4">Edit Profile</h2>

        <form onSubmit={updateProfile}>
          {/* Name */}

          <div className="mb-3">
            <label>Name</label>

            <input
              type="text"
              className="form-control"
              name="name"
              value={profileData.name}
              onChange={handleChange}
            />
          </div>

          {/* Email */}

          <div className="mb-3">
            <label>Email</label>

            <input
              type="email"
              className="form-control"
              name="email"
              value={profileData.email}
              onChange={handleChange}
            />
          </div>

          {/* Mobile */}

          <div className="mb-3">
            <label>Mobile Number</label>

            <input
              type="text"
              className="form-control"
              name="mobile"
              value={profileData.mobile}
              onChange={handleChange}
            />
          </div>

          {/* Village */}

          <div className="mb-3">
            <label>Village</label>

            <input
              type="text"
              className="form-control"
              name="village"
              value={profileData.village}
              onChange={handleChange}
            />
          </div>

          {/* Aadhar */}

          <div className="mb-3">
            <label>Aadhar Number</label>

            <input
              type="text"
              className="form-control"
              name="aadhar"
              value={profileData.aadhar}
              onChange={handleChange}
            />
          </div>

          <button className="btn btn-success px-4">Save Changes</button>
        </form>
      </div>
    </div>
  );
};
