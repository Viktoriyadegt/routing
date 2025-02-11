import React from 'react';
import styles from "./components/Site.module.css";
import {NavLink, Outlet} from 'react-router-dom';
import {s} from './components/pages/navlinkStyles'

export const PATH = {
    ADIDAS: "/adidas",
    PUMA: "/puma",
    ABIBAS: "/abibas",
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
                    <div><s.NavWrapper><NavLink to={PATH.ADIDAS}>ADIDAS</NavLink></s.NavWrapper></div>
                    <div><s.NavWrapper><NavLink to={PATH.PUMA}>PUMA</NavLink></s.NavWrapper></div>
                    <div><s.NavWrapper><NavLink to={PATH.ABIBAS}>ABIBAS</NavLink></s.NavWrapper></div>
                    <div><s.NavWrapper><NavLink to={PATH.PRICES}>PRICES</NavLink></s.NavWrapper></div>
                </div>
                <div className={styles.content}>

                    <Outlet/>

                   {/* <Routes>
                        <Route path="/" element={<Navigate to={"/adidas"}/>}/>

                        <Route path={PATH.ADIDAS} Component={Adidas}/>
                        <Route path={PATH.PUMA} Component={Puma}/>
                        <Route path={PATH.ABIBUS} Component={Abibas}/>
                        <Route path={PATH.MODEL} Component={Model}/>
                        <Route path={PATH.PRICES} Component={Prices}/>

                        <Route path="/*" Component={Error404}/>
                    </Routes>*/}

                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}



export default App;
