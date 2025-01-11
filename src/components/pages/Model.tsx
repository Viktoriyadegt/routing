import React from 'react';
import {adidas, ItemType} from "./Adidas";
import {useParams} from "react-router-dom";
import st from './../Site.module.css'
import {puma} from "./Puma";

type modelType = {
    [key: string]: ItemType[];
}

const modelKey:modelType = {
    adidas: adidas,
    puma: puma
}


export const Model = () => {

    //todo: comments
    const {id, name} = useParams()


    const currentModel = name&&modelKey[name].find((f) => f.id === id)

    return currentModel
        ? <div className={st.model}>
            <h2 className={st.h2}>{currentModel.model}</h2>
            <h4>{currentModel.collection}</h4>
            <h3>{currentModel.price}</h3>
            <img className={st.img} src={currentModel.picture} alt={currentModel.model}/>
        </div>
        : <h2>Model is missing</h2>

};

