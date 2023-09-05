import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './index.css';

import Layout from './components/shared/Layout';
import Main from './pages/Main';
import About from './pages/About';
import Work from './pages/Work';
import Mail from './pages/Mail';
import Customers from './pages/Customers';
import LayoutA from './adminpanel/components/Layout';
import Message from './adminpanel/pages/Message';
import AMain from './adminpanel/pages/Main';
import Register from './adminpanel/pages/Register';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout/>,
//     children:[
//       {
//         path:'/',
//         element: <Main/>
//       },
//     ]
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="/About" element={<About />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/Mail" element={<Mail />} />
        <Route path="/Customers" element={<Customers />} />
        {/* ... etc. */}
      </Route>
      <Route path="/Register" element={<Register />} />
      <Route path="/AdminPanel" element={<LayoutA />}>
        <Route index element={<AMain />} />
        <Route path="/AdminPanel/Message" element={<Message />} />
      </Route>
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
