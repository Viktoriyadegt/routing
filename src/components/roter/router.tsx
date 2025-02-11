import * as React from "react";
import {createBrowserRouter,} from "react-router-dom";
import App from "../../App";
import {Abibas} from "../pages/Abibas";
import {Puma} from "../pages/Puma";
import {Prices} from "../pages/Prices";
import {Adidas} from "../pages/Adidas";
import {Error404} from "../pages/Error404";
import {Model} from "../pages/Model";

export const PATH = {
    ADIDAS: "/adidas",
    PUMA: "/puma",
    ABIBUS: "/abibas",
    ERROR: "/page/error",
    MODEL: "/:name/:id",
    PRICES: "/prices",
} as const

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Error404/>,
        children: [
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

        ]
    },

]);

