// ❓ Pregunta 4: Uso condicional de hooks
// 🧩 ¿Por qué esto está prohibido en React? ¿Cómo deberías reestructurarlo?

import { useEffect } from 'react';

function Saludo({ nombre }) {
    useEffect(() => {
        if (nombre) {
            console.log('Hola ' + nombre);
        }  
    }, [nombre]);
    

    return <h1>Bienvenido</h1>;
}

export default Saludo;