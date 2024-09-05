import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Components/MainLayout";
import Home from "./Components/Home/Home ";
import Listbook from "./Components/Listbooks/Listbook";
import PageToRead from "./Components/PageToRead/PageToRead";
import Login from "./Components/Login/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/listbooks',
                element: <Listbook />,
            },
            {
                path: '/pagetoRead',
                element: <PageToRead />
            },
            {
                path: '/login',
                element: <Login />
            }
        ]
    }
])

export default router;