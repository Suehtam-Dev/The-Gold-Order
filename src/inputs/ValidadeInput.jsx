import { useState } from "react";

export default function ValidadeInput({ Validade, setValidade, flip, setFlip }) {

    function HandleChange(e) {
        let value = e.target.value.replace(/\D/g, '');

        if (value.length > 2) {
            value = value.slice(0, 2) + '/' + value.slice(2)
        }

        setValidade(value)

    }

    function Validacao() {

        if (Validade.length === 5) {
            return 'Input-valid'
        } else {
            return 'Input-invalid'
        }
    }

    return (
        <>
            <input type="text" value={Validade} onChange={HandleChange}  onClick={() => setFlip(true)} onBlur={() => setFlip(true)} maxLength={5} required className={`SubmitBox ${Validacao()}`} placeholder="MM / YY" />
        </>
    )
}
