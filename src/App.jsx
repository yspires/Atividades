import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/inicio/inicio";
import Calculadora from "./pages/calculadora/calculadora";
import Ingressos from "./pages/ingressos/ingressos";
import Eventos from "./pages/eventos/eventos"
import Teste from "./pages/pagina/Teste"
import "./App.scss";

export default function App() {
  return (
    <div className="container">
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/calculadora" element={<Calculadora />} />
          <Route path="/ingressos" element={<Ingressos />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/Teste" element={<Teste />} />
        </Routes>
      </main>
    </div>
  );
}