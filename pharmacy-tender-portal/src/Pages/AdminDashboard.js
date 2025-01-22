import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer as BarResponsiveContainer 
} from 'recharts';
import { 
  PieChart, Pie, Cell, ResponsiveContainer as PieResponsiveContainer 
} from 'recharts';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

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
    { name: "Aspirin Tender", date: "May 30, 2025" },
    { name: "Naproxen Tender", date: "June 30, 2025" }
  ];

  const pieData = [
    { name: 'Category A', value: 400 },
    { name: 'Category B', value: 300 },
    { name: 'Category C', value: 300 },
    { name: 'Category D', value: 200 },
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

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
          <li onClick={() => navigate("/tender-notice")}>Tender Notice</li>
       
         
          <li onClick={() => navigate("/submission-form")}>Submission Form</li>
          <li onClick={() => navigate("/vendor")}>Vendor</li>
        
          <li onClick={() => navigate("/granted-tenders")}>Granted Tenders</li>
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
            {isDropdownVisible && (
              <ul className="dropdown">
                <li onClick={() => navigate("/create-tender")}>Create Tender</li>
                <li onClick={() => navigate("/view-tender")}>View Tender</li>
                <li onClick={() => navigate("/create-tender-by-usage")}>Create Tender By Usage</li>
                <li onClick={() => navigate("/create-tender-by-date")}>Create Tender by Date</li>
              </ul>
            )}
          </li>
          <li onClick={handleLogout}>Log Out</li>
        </ul>
      </div>

      <div className="main-content">
        <h2>Pharmacy Tender Dashboard</h2>
       <div className="chart-container">
        {/* Bar Chart */}
        <BarResponsiveContainer width="50%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="TendersSubmitted" fill="#8884d8" />
          </BarChart>
        </BarResponsiveContainer>
       

        {/* Pie Chart */}
        <PieResponsiveContainer width="50%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </PieResponsiveContainer>
      </div> 
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