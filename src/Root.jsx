import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Components/MainLayout";
import Home from "./Components/Home/Home ";
import Listbook from "./Components/Listbooks/Listbook";
import PageToRead from "./Components/PageToRead/PageToRead";

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
            }
        ]
    }
])

export default router;