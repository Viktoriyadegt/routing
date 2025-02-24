import * as React from "react";
import {createBrowserRouter, Navigate, Outlet, type RouteObject,} from "react-router-dom";
import App from "../../App";
import {Abibas} from "../pages/Abibas";
import {Puma} from "../pages/Puma";
import {Prices} from "../pages/Prices";
import {Adidas} from "../pages/Adidas";
import {Error404} from "../pages/Error404";
import {Model} from "../pages/Model";
import {ProtectedPage} from "../pages/ProtectedPage";
import {Login} from "../pages/Login";

export const PATH = {
    ADIDAS: "/adidas",
    PUMA: "/puma",
    ABIBUS: "/abibas",
    ERROR: "/error",
    MODEL: "/:name/:id",
    PRICES: "/prices",
    PROTECTEDPAGE:"/protected",
    LOGIN:"/login",
} as const


export const PrivateRoute = () => {

    const isAuth = false

    return  <>{isAuth? <Outlet/> : <Navigate to={'/login'}/>}</>
};


const publicRoutes: RouteObject[] = [
    {
        path: '/',
        element: <Navigate to={PATH.ADIDAS}/>,
    },
    {
        path: PATH.ADIDAS,
        element: <Adidas/>,
    },
    {
        path: PATH.PUMA,
        element: <Puma/>,
    },
    {
        path: PATH.ABIBUS,
        element: <Abibas/>,
    },
    {
        path: PATH.PRICES,
        element: <Prices/>,
    },
    {
        path: PATH.MODEL,
        element: <Model/>,
    },

    {
        path: PATH.ERROR,
        element: <Error404/>,
    },
    {
        path: PATH.LOGIN,
        element: <Login/>,
    },

]
const privateRoutes: RouteObject[] = [
    {
        path:PATH.PROTECTEDPAGE,
        element:<ProtectedPage/>

    },
]

export const router = createBrowserRouter([

    {
        path: "/",
        element: <App/>,
        errorElement: <Navigate to={PATH.ERROR}/>,
        children: [
            {
                element: <PrivateRoute/>,
                children: privateRoutes,
            },
            ...publicRoutes
        ]
    },

]);

