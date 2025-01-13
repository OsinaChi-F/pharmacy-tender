import React  from 'react';
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Content from './Content';
import Signup from './Components.js/Assets/Signup'
import Login from './Components.js/Assets/Login'
import Dashboard from './Pages.js/AdminDashboard';
import TenderNotice from './Pages.js/TenderNotice';
import TenderList from './Pages.js/TenderList'
import Employee from './Pages.js/Employee';
import SubmissionForm from './Pages.js/SubmissionForm';
import Vendor from './Pages.js/Vendor'
import Stock from './Pages.js/Stock'
import CreateTender from './Pages.js/CreateTender'
import ViewTender from './Pages.js/ViewTender'
import CreateTenderByusage from './Pages.js/CreateTenderByUsage'
import CreateTenderByDate from './Pages.js/CreateTenderByDate'


function App() {
  return (
    <Router>
    <div className='App'>
      <Routes>
        <Route path="/header" element={<Header />} />
        <Route path="/content" element={<Content />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard/>} />
         {/* Placeholder routes for sidebar items */}
        <Route path="/tendernotice" element= {<TenderNotice/>} />
    
        <Route path="/employee" element={<Employee />} />
        <Route path="/submissionform" element={<SubmissionForm/>} />
        <Route path="/vendor" element={<Vendor />} />
        <Route path="/stock" element={<Stock />} />
        <Route path='/tenderlist'  element={<TenderList/>}/>
        <Route path='/create-tender' element={<CreateTender/>}/>
        <Route path='/view-tender' element={<ViewTender/>}/>
        <Route path='/createtenderbydrugusage' element={<CreateTenderByusage/>}/>
        <Route path='/createtenderbydate' element={<CreateTenderByDate/>}/>
        

      </Routes>
    </div>  
    </Router>
  

  

      
    

  );
}

export default App;
