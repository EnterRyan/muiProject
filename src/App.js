import { Router } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Editor from './components/Atoms/Editor';
import UserHistoryInput from './components/Molecule/UserHistoryInput';
import AppLogin from './components/Pages/AppLogin';

const router = createBrowserRouter([
  { 
    path : "/",
    element : <AppLogin/>,
    errorElement : <p>404</p>
  },
  { 
    path : "/main", 
    element :<p>MainPage</p>,
  },
  {
    path : "/main/detail",
    element : <p>DetailPage</p>
  },
  {
    path : "/main/FAQ",
    element : <p>FAQPage</p>
  },
  {
    path : "/comtest",
    element : <UserHistoryInput/>
  }
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
