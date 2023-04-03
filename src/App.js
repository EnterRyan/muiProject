import { Router } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Editor from './components/Molecule/Editor';
import TableSelectBox from './components/Atoms/SelectTableType';
import UserHistoryInput from './components/Organism/UserHistoryInput';
import AppLogin from './components/Pages/AppLogin';
import ExitBtn from './components/Atoms/ExitBtn';
import BtnCallCalender from './components/Atoms/BtnCallCalender';
import DialogHeader from './components/Molecule/DialogHeader';

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
