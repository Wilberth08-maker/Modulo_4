// ❓ Pregunta 3: Limpieza olvidada en efectos
// 🧩 ¿Qué pasa si este componente se monta y desmonta repetidamente? ¿Cómo solucionarlo?

import { useEffect } from "react";

function ClickLogger() {

    useEffect(() => {
        const handleClick = () => console.log('Click!');
        window.addEventListener("click", () => handleClick);

        return () => {
            window.removeEventListener('click', handleClick);
        };

    }, []);

    return <p>Haz clic en cualquier parte</p>;
}

export default ClickLogger;