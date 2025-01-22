import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Header';
import Content from './Content';


import Signup from './Components/Assets/Signup';
import Login from './Components/Assets/Login';

import AdminDashboard from './Pages/AdminDashboard';
import TenderNotice from './Pages/TenderNotice';
import GrantedTenders from './Pages/GrantedTenders';
import TenderList from './Pages/TenderList';
import Employee from './Pages/Employee';
import SubmissionForm from './Pages/SubmissionForm';
import Vendor from './Pages/Vendor';
import Stock from './Pages/Stock';
import AddEmployee from './Pages/AddEmployee';
import CreateTender from './Pages/CreateTender';
import ErrorBoundary from './ErrorBoundary';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/header" element={<Header />} />
        <Route path="/content" element={<Content />} />
        <Route path="/error-boundary" element={<ErrorBoundary />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Login />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/tender-notice" element={<TenderNotice />} />
        <Route path="/tender-list" element={<TenderList />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/add-employee" element={< AddEmployee />} />
        <Route path="/submission-form" element={<SubmissionForm />} />
        <Route path="/vendor" element={<Vendor />} />
        <Route path="/granted-tenders" element={<GrantedTenders />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/create-tender" element={<CreateTender />} />
      </Routes>
    </Router>
  );
}

export default App;
