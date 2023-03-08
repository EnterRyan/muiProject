import { Router } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLogin from './components/Pages/AppLogin';

const router = createBrowserRouter([
  { 
    path : "/",
    element : <AppLogin/>,
    errorElement : <p>404</p>
  },
  { 
    path : "/Sample", 
    element :<p>SamplePage</p>,
    children : [{index : true, element : <p>children</p>}]
  }
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
