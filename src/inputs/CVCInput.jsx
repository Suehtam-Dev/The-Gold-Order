import { useState } from "react";
import NumCartaoInput from "./NumCartaoInput";

export default function CVCInput({ CVC, setCVC, flip, setFlip }) {

    CVC = CVC.replace(/\s+\D/g, '');
    function CVCValidacao() {

        if (CVC.length === 3) {
            return 'Input-valid'
        }
        else {
            return 'Input-invalid'
        }
    }

    function HandleChange(e) {
        let value = e.target.value.replace(/\D/g, '');

        setCVC(value)
    }




    return (
        <>
            <input type="text" onClick={() => setFlip(true)} onBlur={() => setFlip(true)} onChange={HandleChange} value={CVC} required  maxLength={3} className={`SubmitBox ${CVCValidacao()}`} placeholder="Digite o CVC" />
        </>
    )
}
