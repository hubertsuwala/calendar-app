import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { MainLayout } from './layouts/mainLayout';
import { Calendar_1 } from './feature/Calendar_1/calendar_1';
import { Calendar_2 } from './feature/Calendar_2/calendar_2';
import './App.css';
const router = createBrowserRouter([
    {
        path: '/',
        element: React.createElement(MainLayout, null),
        // element: <div>main page</div>,
        children: [
            { path: '/', element: React.createElement("div", null, "dddd") },
            { path: '/calendar1', element: React.createElement(Calendar_1, null) },
            { path: '/calendar2', element: React.createElement(Calendar_2, null) },
        ],
    },
]);
function App() {
    return React.createElement(RouterProvider, { router: router });
}
export default App;
