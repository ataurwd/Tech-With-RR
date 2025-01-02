import { createBrowserRouter } from "react-router-dom";
import Home from './../pages/Home';
import MainLayout from "../layouts/MainLayout";
import Statistics from './../pages/Statistics';
import Dashboard from './../pages/Dashboard';
import AllCards from "../components/AllCards";
import ProductDetails from "../components/ProductDetails";
import News from "../pages/News";
import ErrorPage from "../pages/ErrorPage";




const routes = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children:[
            {
            path:'/',
            element:<Home/>,
            loader: () => fetch('../categorys.json'),
            children:[
                {
                    path: '/',
                    element: <AllCards/>,
                    loader: () => fetch('../products.json'),
                },
                {
                    path: '/card/:categoryId',
                    element: <AllCards/>,
                    loader: () => fetch('../products.json'),
                }
            ]
            },
            {
                path: '/statistics',
                element: <Statistics/>
            },
            {
                path: '/dashboard',
                element: <Dashboard/>,
                loader: () => fetch('../products.json'),
            },
            {
                path: '/news',
                element: <News/>,
                loader: () => fetch('../newsData.json'),
            }
            ,
            {
                path: '/product/:id',
                element: <ProductDetails/>,
                loader: () => fetch('../products.json'),
            },
            {
                path: '*',
                element: <ErrorPage/>,
            }
        ]
    }
])

export default routes;