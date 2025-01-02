import React from 'react';
import styles from "./components/Site.module.css";
import {PageOne} from "./components/pages/PageOne";
import {PageTwo} from "./components/pages/PageTwo";
import {PageThree} from "./components/pages/PageThree";
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {Error404} from "./components/pages/Error404";
import {s} from './components/pages/navlinkStyles'

const PATH = {
    PAGE1: "/page1",
    PAGE2: "/page2",
    PAGE3: "/page3",
    ERROR: "/page/error"
} as const


function App() {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <div><s.NavWrapper><NavLink to={PATH.PAGE1}>Page1</NavLink></s.NavWrapper></div>
                    <div><s.NavWrapper><NavLink to={PATH.PAGE2}>Page2</NavLink></s.NavWrapper></div>
                    <div><s.NavWrapper><NavLink to={PATH.PAGE3}>Page3</NavLink></s.NavWrapper></div>
                </div>
                <div className={styles.content}>

                    <Routes>
                        <Route path="/" element={<Navigate to={"/page1"}/>}/>

                        <Route path={PATH.PAGE1} Component={PageOne}/>
                        <Route path={PATH.PAGE2} Component={PageTwo}/>
                        <Route path={PATH.PAGE3} Component={PageThree}/>

                        <Route path="/*" Component={Error404}/>
                    </Routes>
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}



export default App;
