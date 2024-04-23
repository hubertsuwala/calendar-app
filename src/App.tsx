import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { MainLayout } from './layouts/mainLayout';
import { Calendar_1 } from './feature/Calendar_1/calendar_1';
import { Calendar_2 } from './feature/Calendar_2/calendar_2';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    // element: <div>main page</div>,
    children: [
      { path: '/', element: <div>dddd</div> },
      { path: '/calendar1', element: <Calendar_1 /> },
      { path: '/calendar2', element: <Calendar_2 /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
