// ❓ Pregunta 1: Estado no reactivo
// 🧩 ¿Cuál es el error? ¿Qué pasa con count++? ¿Cómo lo corregirías?
import { useState } from 'react';

function Counter() {
  let [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => {
      const newCount = prevCount + 1;
      console.log(newCount);
      return newCount;
    });
  };

  return <button onClick={increment}>Count: {count}</button>;
}

export default Counter;
