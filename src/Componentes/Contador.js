import { useState } from 'react'

const Contador = () => {

    const [contador, setContador] = useState(0);

    const sumar = () => {
        setContador(contador + 1)
    }
    const restar = () => {
        setContador(contador - 1)
    }
    const reset = () => {
        setContador(0)
    }

    return (
        <div>
            <h3>El contador esta en: {contador}</h3>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            <button onClick={reset}>Resetear</button>


        </div>
    )
}

export default Contador