import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Home from "./routes/Home.jsx"
import Features from "./routes/Features.jsx"
import Login from './components/Login.jsx'
import SignUp from './components/SignUp.jsx'
import AddTask from './components/AddTask.jsx'
import { Provider } from 'react-redux'
import taskStore from './store/Index.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {path: "/tasks", element: <Features />},
      {path: "/login", element: <Login />},
      {path: "/signUp", element: <SignUp />},
      {path: "/addTask", element: <AddTask />},
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={taskStore}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>,
)
