import { useState } from "react";
import "./eventos.scss";

import { Link } from "react-router-dom";

export default function Eventos() {
  const [eventoSelecionado, setEventoSelecionado] = useState("");

  const eventos = [
    {
      id: 1,
      nome: "Show de Música",
      data: "15/11/2026",
      local: "São Paulo"
    },
    {
      id: 2,
      nome: "Festival de Arte",
      data: "20/11/2026",
      local: "São Paulo"
    },
    {
      id: 3,
      nome: "Feira de Tecnologia",
      data: "05/12/2026",
      local: "São Paulo"
    }
  ];

  return (
    <section className="pagina-eventos">
      
      <h2>Eventos</h2>
      <p>Confira os eventos disponíveis.</p>

      <div className="lista-eventos">
        {eventos.map((evento) => (
          <div className="card-evento" key={evento.id}>
            <h3>{evento.nome}</h3>
            <p>Data: {evento.data}</p>
            <p>Local: {evento.local}</p>

            <button
              onClick={() => setEventoSelecionado(evento.nome)}
            >
              Selecionar evento
            </button>
          </div>
        ))}
      </div>

      {eventoSelecionado !== "" && (
        <div className="evento-selecionado">
          <h3>Evento selecionado:</h3>
          <p>{eventoSelecionado}</p>
        </div>
      )}

        <Link to="/" className="voltar-inicio">Voltar</Link>

    </section>
  );
}