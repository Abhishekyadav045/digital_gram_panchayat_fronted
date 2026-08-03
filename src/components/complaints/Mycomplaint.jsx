import React, { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const MyComplaint = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchComplaints = async () => {
      const user = JSON.parse(localStorage.getItem("user"));
      console.log(user);

      const res = await axios.get(`${BASE_URL}/api/my-complaints/${user._id}`);
      console.log(res.data.complaints);

      setComplaints(res.data.complaints);
    };

    fetchComplaints();
  }, []);

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-success">My Complaint List</h2>

      <table className="table table-bordered table-hover">
        <thead className="table-success">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Village</th>
            <th>complaint_details</th>
            <th>image</th>

            <th>status</th>
          </tr>
        </thead>

        <tbody>
          {complaints.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>

              <td>{item.email}</td>

              <td>{item.mobile}</td>

              <td>{item.village}</td>

              <td>{item.complaindetails}</td>

              <td>
                {item.image ? (
                  <img
                    src={`${BASE_URL}/uploads/${item.image}`}
                    alt="Complaint"
                    className="img-fluid rounded"
                    width="250"
                    height="200"
                    style={{ objectFit: "cover", borderRadius: "8px" }}
                    onError={(e) => {
                      console.log("Image URL:", e.target.src);
                    }}
                  />
                ) : (
                  "No Image"
                )}
              </td>

              <td>
                <span className="badge bg-warning text-dark">
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
