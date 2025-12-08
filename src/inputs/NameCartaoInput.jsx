import { useState } from "react";
import NumCartaoInput from "./NumCartaoInput";

export default function NameCartaoInput({ NameCartao, setNameCartao, flip, setFlip }) {

    function NameValidacao() {
        let char = /^[A-Za-zÀ-ÿ\s]+$/
        if (char.test(NameCartao) && NameCartao.length >= 3) {
            return 'Input-valid'
        } 
        if (char.test(isNaN(NameCartao))) {
             return 'Input-invalid'
        }
        else {
            return 'Input-invalid'
        }
    }

    function HandleChange(e) {
        let value = e.target.value.replace(/\s+/g, '')
        if (NameCartao.length >= 1 ) {
            value = e.target.value
        } 
        setNameCartao(value)
    }




    return (
        <>
            <input type="text" onClick={() => setFlip(false)} value={NameCartao} onChange={HandleChange} required maxLength={35} className={`SubmitBox ${NameValidacao()}`} placeholder="Nome completo" />
        </>
    )
}

