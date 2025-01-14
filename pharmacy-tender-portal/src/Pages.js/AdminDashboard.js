import React, {useState} from 'react'
import {Bar} from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { useNavigate} from 'react-router-dom';


// Register required components for Chart.js
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Dashboard = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible((prev) => !prev);
  };
  const navigate= useNavigate();

  const data = {
    labels: ["January", "February", "March"],
    datasets: [
      {
        label: "Tenders Submitted",
        data: [5, 10, 7],
        backgroundColor: ["#4CAF50", "#2196F3", "#FFC107"],
      
      },
    ],
  };
   const handleLogout = () => {
    navigate("/login"); // Redirect to login on logout
  };
 

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Dashboard</h2>
        <ul>
          <li onClick={() => navigate("/tendernotice")}>Tender Notice</li>
          <li onClick={() => navigate("/employee")}>Employee</li>
          <li onClick={() => navigate("/submissionform")}>Submission Form</li>
          <li onClick={() => navigate("/vendor")}>Vendor</li>

          <li onClick={() => navigate("/stock")}>Stock</li>
          <li>
        <span onClick={toggleDropdown} style={{ cursor: "pointer" }}>
          Tender List
        </span>
        {isDropdownVisible && (
          <ul>
            <li onClick={() => navigate("/create-tender")}>Create Tender</li>
            <li onClick={() => navigate("/view-tender")}>View Tender</li>
            <li onClick={() => navigate("/create-tender-by-usage")}>Create Tender By drug Usage</li>
            <li onClick={() => navigate("/create-tender-by-date")}>Create Tender by Date</li>
          </ul>
        )}
      </li>
          <li onClick={handleLogout}>Log Out</li>
        </ul>
      </div>

    <div className='main-content'>
      <h2>Pharmacy Tender Dashboard</h2>
      <Bar data={data} height={240} />
      <div>
        <h3>Upcoming Deadlines</h3>
        <ul>
          <li>Paracetamol Tender - March 20, 2025</li>
          <li>Ibuprofen Tender - April 25, 2025</li>
        </ul>
      </div>
    </div>
   </div>
  )
}

export default Dashboard

