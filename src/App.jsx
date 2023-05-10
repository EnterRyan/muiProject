/* eslint-disable no-unused-vars */
import {
  Routes, useNavigate, Route,
} from 'react-router-dom';
import React, { useEffect, useState } from 'react';

// Component
import AppHome from './components/Pages/AppHome';
import AppLogin from './components/Pages/AppLogin';
import UserHistoryInput from './components/Organism/UserHistoryInput';

function ProtectedRoute({ children, ...rest }) {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (isLoggedIn === false) {
      navigate('/AppLogin');
    }
  }, [isLoggedIn]);

  return children;
}
// TODO :  비로그인시 접근이 불가능 페이지 리스트를 오브젝트로 나열하여 map하기.
function App() {
  return (
    <Routes>
      <Route path="/*" element={<ProtectedRoute><AppHome /></ProtectedRoute>} />
      <Route path="/comtest" element={<ProtectedRoute><UserHistoryInput /></ProtectedRoute>} />
      <Route path="/AppLogin" element={<AppLogin />} />
    </Routes>
  );
}

export default App;
