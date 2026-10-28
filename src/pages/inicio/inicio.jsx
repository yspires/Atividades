import { Link } from "react-router-dom";
import "./inicio.scss";


export default function Inicio() {
  return (
    <section className="pagina-inicio">
      <h2>Páginas</h2>

      <div className="menu-paginas">
        <Link to="/calculadora">Calculadora</Link>
        <Link to="/ingressos">Ingressos</Link>
        <Link to="/eventos">Eventos</Link>
        <Link to="/Teste">Teste</Link>
      </div>
    </section>
  );
}