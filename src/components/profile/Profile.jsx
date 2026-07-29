import React from "react";
import { Link } from "react-router-dom";

export const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="container py-5">
      <div className="card shadow p-4">
        <div className="text-center">
          <i
            className="bi bi-person-circle text-success"
            style={{ fontSize: "90px" }}
          ></i>

          <h2>{user?.name}</h2>
        </div>

        <hr />

        <p>
          <strong>Name :</strong> {user?.name}
        </p>

        <p>
          <strong>Email :</strong> {user?.email}
        </p>

        <p>
          <strong>Mobile :</strong> {user?.mobile}
        </p>

        <p>
          <strong>Village :</strong> {user?.village}
        </p>

        <p>
          <strong>Aadhar :</strong> {user?.aadhar}
        </p>

        <Link to="/edit-profile" className="btn btn-success">
          Edit Profile
        </Link>
      </div>
    </div>
  );
};
