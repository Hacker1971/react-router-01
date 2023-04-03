import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './assets/components/About/About';
import Contact from './assets/components/Contact/Contact';
import ErrorPage from './assets/components/ErrorPage/ErrorPage';
import First from './assets/components/First/First';
import Friends from './assets/components/Friends/Friends';
import FriendDetale from './assets/components/FriendDetale/FriendDetale';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <First></First>,
      },
      {
        path: "friends",
        element: <Friends></Friends>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: "friend/:friendId",
        element: <FriendDetale></FriendDetale>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About></About>,
      },
    ],
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
