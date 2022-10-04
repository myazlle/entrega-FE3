import { useState } from "react";

import "./index.css";
import Tarjeta from "./componentes/Tarjeta";

// CONSIGNAS EN APP:
// 1- implementar 2 estados, uno para manejar el tema claro/oscuro del sitio y otro estado que maneje la plataforma favorita seleccionada
// 2- crear los metodos que me permitan asiganarle valor correspondiente a esas variables
// 3- incorporar el componete Tarjeta en 🚩

function App() {
  const [temaOscuro, setTemaOscuro] = useState(false);
  const [favorita, setFavorita] = useState("");


  const handleTema = () => {
    setTemaOscuro(currentTheme => currentTheme = !currentTheme);
  };

  const handleFavorita = (newFav) => {
    setFavorita(currentFav => currentFav = newFav);
  };

  return (
    <div id="App" className={temaOscuro ? "dark" : ""}>
      <h1>¡Bienvenidos!</h1>
      <h2>Contanos, ¿cuál es tu plataforma favorita?</h2>
      { favorita !== "" ? (<h4 className={ favorita === "Twitter" ? "tw" : favorita === "Facebook" ? "fb" : "yt" }> {favorita}</h4>) : ("")}
      <Tarjeta handleFavorita={handleFavorita}/>

      <button onClick={() => { handleTema(); }}>Cambiar tema</button>
    </div>
  );
}


export default App;
