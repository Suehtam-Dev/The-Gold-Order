import { useState } from "react";

export default function NumCartaoInput({ NumCartao, setNumCartao, flip, setFlip }) {


    function NumCartaoValidacao() {
        NumCartao = NumCartao.replace(/\s+/g, "")

        if (NumCartao > 0 && NumCartao.length >= 16) {
            return 'Input-valid'
        }
        
        else {
            return 'Input-invalid'
        }

    }


    function HandleChange(e) {
        let value = e.target.value.replace(/\D+/g, '')

        value = (value.replace(/(.{4})/g, '$1 ').trim())
        setNumCartao(value)
    }

    return (
        <>
            <input type="text" onClick={() => setFlip(false)} value={NumCartao} onChange={HandleChange} required pattern="[0-9 ]+" className={`SubmitBox  ${NumCartaoValidacao()}`} maxLength={19} placeholder="Nº do cartão" />

        </>
    )

} 