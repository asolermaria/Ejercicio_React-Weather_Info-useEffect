import { useState, useEffect } from "react"; // Importamos hooks de React
import { v4 as uuidv4 } from "uuid"; // Importamos libreria de identificadores únicos

import Form from "./components/Form";

function App() {
  return (
    <main>
      <h1>Weather App</h1>
      <Form />
    </main>
  );
}

export default App;
