import React from 'react';
import { useLocation } from 'react-router-dom';

const PageWrapper = ({ children }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';
  const isSignupPage = location.pathname === '/signup';

  let className = '';
  if (isLoginPage) {
    className = 'login-page';
  } else if (isSignupPage) {
    className = 'signup-page';
  }

  return <div className={className}>{children}</div>;
};

export default PageWrapper;