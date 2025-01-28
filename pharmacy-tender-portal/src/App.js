import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Header';
import Signup from './Components/Assets/Signup';
import Login from './Components/Assets/Login';
import AdminDashboard from './Pages/AdminDashboard';
import TenderNotice from './Pages/TenderNotice';
import GrantedTenders from './Pages/GrantedTenders';
import TenderList from './Pages/TenderList';
import SubmissionForm from './Pages/SubmissionForm';
import Vendor from './Pages/Vendor';
import Stock from './Pages/Stock';
import CreateTender from './Pages/CreateTender';
import ErrorBoundary from './ErrorBoundary';
import PageWrapper from './Components/Assets/PageWrapper';

function App() {
  return (
    <Router>
      <PageWrapper>
        <Routes>
          <Route path="/header" element={<Header />} />
          <Route path="/error-boundary" element={<ErrorBoundary />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Login />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/tender-notice" element={<TenderNotice />} />
          <Route path="/tender-list" element={<TenderList />} />
          <Route path="/submission-form" element={<SubmissionForm />} />
          <Route path="/vendor" element={<Vendor />} />
          <Route path="/granted-tenders" element={<GrantedTenders />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/create-tender" element={<CreateTender />} />
        </Routes>
      </PageWrapper>
    </Router>
  );
}

export default App;
