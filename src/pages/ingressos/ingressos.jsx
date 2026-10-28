import { useState } from "react";
import "./ingressos.scss";

import { Link } from "react-router-dom";

export default function Ingressos() {
  const [quantidade, setQuantidade] = useState("1");
  const [meia, setMeia] = useState(false);
  const [cupom, setCupom] = useState("");

  const preco = 30;
  const qtd = Math.max(1, Number(quantidade) || 1);
  const valor = meia ? preco / 2 : preco;
  const subtotal = qtd * valor;

  const desconto =
    cupom.trim().toUpperCase() === "PROMO10"
      ? subtotal * 0.1
      : 0;

  const total = subtotal - desconto;

  return (
    <section className="pagina-ingressos">
      <Link to="/" className="voltar-inicio"> Voltar</Link>
      <h2>Venda de Ingressos</h2>
      <p>Ingresso inteiro: R$ 30,00</p>
      <p>Meia-entrada: R$ 15,00</p>

      <label>Quantidade de ingressos:</label>
      <input
        type="number"
        min="1"
        value={quantidade}
        onChange={(e) => setQuantidade(e.target.value)}
      />

      <label className="opcao-meia">
        <input
          type="checkbox"
          checked={meia}
          onChange={(e) => setMeia(e.target.checked)}
        />
        Meia-entrada
      </label>

      <label>Cupom de desconto:</label>
      <input
        type="text"
        placeholder="Digite PROMO10"
        value={cupom}
        onChange={(e) => setCupom(e.target.value)}
      />

      <div className="resumo">
        <p>Quantidade: {qtd}</p>
        <p>Subtotal: R$ {subtotal.toFixed(2).replace(".", ",")}</p>
        <p>Desconto: R$ {desconto.toFixed(2).replace(".", ",")}</p>
        <h3>Total: R$ {total.toFixed(2).replace(".", ",")}</h3>
      </div>

      <button onClick={() => alert("Compra simulada com sucesso!")}>
        Comprar ingressos
      </button>
    </section>
  );
}