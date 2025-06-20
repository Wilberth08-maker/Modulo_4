// ❓ Pregunta 5: Falta cleanup en temporizador
// 🧩 ¿Qué falta aquí? ¿Por qué es peligroso no hacer cleanup?

import { useEffect } from 'react';

function Temporizador() {
    useEffect(() => {
        const id = setInterval(() => {
            console.log('Tick');
        }, 1000);

        return () => clearInterval(id);

    }, []);

    return <p>Contando...</p>;
}

export default Temporizador;