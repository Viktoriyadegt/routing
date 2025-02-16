import type {ReactNode} from "react";
import {Navigate} from "react-router-dom";

type Props = {
    children: ReactNode
}
 const ProtectedRoute = ({children }: Props) => {

    const logged = false

    return  <>{logged? children : <Navigate to={'/login'}/>}</>
};

