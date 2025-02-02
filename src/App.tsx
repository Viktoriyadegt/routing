import React from 'react';
import styles from "./components/Site.module.css";
import {Adidas} from "./components/pages/Adidas";
import {Puma} from "./components/pages/Puma";
import {Abibas} from "./components/pages/Abibas";
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {Error404} from "./components/pages/Error404";
import {s} from './components/pages/navlinkStyles'
import {Model} from "./components/pages/Model";
import {Prices} from "./components/pages/Prices";

export const PATH = {
    PAGE1: "/adidas",
    PAGE2: "/puma",
    PAGE3: "/abibas",
    ERROR: "/page/error",
    MODEL: "/:name/:id",
    PRICES: "/prices",
} as const


function App() {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <div><s.NavWrapper><NavLink to={PATH.PAGE1}>ADIDAS</NavLink></s.NavWrapper></div>
                    <div><s.NavWrapper><NavLink to={PATH.PAGE2}>PUMA</NavLink></s.NavWrapper></div>
                    <div><s.NavWrapper><NavLink to={PATH.PAGE3}>ABIBAS</NavLink></s.NavWrapper></div>
                    <div><s.NavWrapper><NavLink to={PATH.PRICES}>PRICES</NavLink></s.NavWrapper></div>
                </div>
                <div className={styles.content}>

                    <Routes>
                        <Route path="/" element={<Navigate to={"/adidas"}/>}/>

                        <Route path={PATH.PAGE1} Component={Adidas}/>
                        <Route path={PATH.PAGE2} Component={Puma}/>
                        <Route path={PATH.PAGE3} Component={Abibas}/>
                        <Route path={PATH.MODEL} Component={Model}/>
                        <Route path={PATH.PRICES} Component={Prices}/>


                        <Route path="/*" Component={Error404}/>
                    </Routes>
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}



export default App;
