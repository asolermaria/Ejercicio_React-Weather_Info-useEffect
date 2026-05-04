import { useState, useEffect } from "react";

function Form({ setCity }) {
  const [input, setInput] = useState("");

  // Pasados 20s sin interactuar en el input, si no se envía el mismo, lo vaciamos
  useEffect(() => {
    if (!input.trim()) return; // Con trim quitamos espacios al principio y al final, si el input está vacío termina la función

    // Si hay algo en el input, espera 20s y lo borra
    const timer = setTimeout(() => {
      setInput("");
    }, 20000);

    return () => clearTimeout(timer); // Si el input cambia, reinicia el temporizador
  }, [input]); // Se ejecuta cada vez que cambia el input

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    if (!input.trim()) return;
    setCity(input.trim());
    setInput(""); // Vaciamos el input cuando se envía
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Indica una ciudad..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        {input.trim() && <button type="submit">Buscar</button>}
        {/* input.trim() si el string tiene contenido, será truthy
            && si se cumple la primera condición (truthy), devuelve la siguiente (muestra el botón) */}
      </form>
    </div>
  );
}

export default Form;
