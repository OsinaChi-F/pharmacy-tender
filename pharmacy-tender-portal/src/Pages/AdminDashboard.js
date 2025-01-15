import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const navigate = useNavigate();

  const data = [
    { name: "January", TendersSubmitted: 5 },
    { name: "February", TendersSubmitted: 10 },
    { name: "March", TendersSubmitted: 7 }
  ];

  const deadlines = [
    { name: "Paracetamol Tender", date: "March 20, 2025" },
    { name: "Ibuprofen Tender", date: "April 25, 2025" },
  ];

  const toggleDropdown = () => setIsDropdownVisible((prev) => !prev);

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      navigate("/");
    }
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2>Dashboard</h2>
        <ul>
          <li onClick={() => navigate("/tendernotice")}>Tender Notice</li>
          <li onClick={() => navigate("/employee")}>Employee</li>
          <li onClick={() => navigate("/submissionform")}>Submission Form</li>
          <li onClick={() => navigate("/vendor")}>Vendor</li>
          <li onClick={() => navigate("/stock")}>Stock</li>
          <li>
            <span
              onClick={toggleDropdown}
              style={{ cursor: "pointer" }}
              aria-expanded={isDropdownVisible}
              role="button"
            >
              Tender List
            </span>
            <ul className={isDropdownVisible ? "dropdown visible" : "dropdown hidden"}>
              <li onClick={() => navigate("/create-tender")}>Create Tender</li>
              <li onClick={() => navigate("/view-tender")}>View Tender</li>
              <li onClick={() => navigate("/create-tender-by-usage")}>Create Tender By Usage</li>
              <li onClick={() => navigate("/create-tender-by-date")}>Create Tender by Date</li>
            </ul>
          </li>
          <li onClick={handleLogout}>Log Out</li>
        </ul>
      </div>

      <div className="main-content">
      <h2>Pharmacy Tender Dashboard</h2>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="TendersSubmitted" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
      <div>
        <h3>Upcoming Deadlines</h3>
        <ul>
          {deadlines.map((item, index) => (
            <li key={index}>
              {item.name} - {item.date}
            </li>
          ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
