
import { useState } from "react";
import "./ingressos.scss";
import { Link } from "react-router-dom";

export default function Ingressos() {
  const [quantidade, setQuantidade] = useState("0");
  const [meia, setMeia] = useState(false);
  const [cupom, setCupom] = useState("");
  const [compraFinalizada, setCompraFinalizada] = useState(false);

  const preco = 30;

  const qtd = Math.max(0, Math.floor(Number(quantidade) || 0));

  const valor = meia ? preco / 2 : preco;

  const subtotal = qtd * valor;

  const desconto =
    cupom.trim().toUpperCase() === "PROMO10"
      ? subtotal * 0.1
      : 0;

  const total = subtotal - desconto;

  function formatar(valor) {
    return valor.toFixed(2).replace(".", ",");
  }

  function comprar() {
    if (qtd <= 0) {
      alert("Escolha a quantidade de ingressos!");
      return;
    }

    setCompraFinalizada(true);
  }

  return (
    <section className="pagina-ingressos">

      <h2>Venda de Ingressos</h2>

      <p>Ingresso inteiro: R$ 30,00</p>
      <p>Meia-entrada: R$ 15,00</p>

      <label>Quantidade de ingressos:</label>

      <input
        type="number"
        min="0"
        value={quantidade}
        onChange={(e) => {
          setQuantidade(e.target.value);
          setCompraFinalizada(false);
        }}
      />

      <label className="opcao-meia">
        <input
          type="checkbox"
          checked={meia}
          onChange={(e) => {
            setMeia(e.target.checked);
            setCompraFinalizada(false);
          }}
        />
        Meia-entrada
      </label>

      <label>Cupom de desconto:</label>

      <input
        type="text"
        placeholder="Digite PROMO10"
        value={cupom}
        onChange={(e) => {
          setCupom(e.target.value);
          setCompraFinalizada(false);
        }}
      />

      {!compraFinalizada && (
        <button onClick={comprar}>
          Comprar ingressos
        </button>
      )}

      {compraFinalizada && (
        <div className="resumo">

          <h3>Compra realizada!</h3>

          <p>Quantidade: {qtd}</p>

          <p>
            Tipo: {meia ? "Meia-entrada" : "Inteira"}
          </p>

          <p>
            Subtotal: R$ {formatar(subtotal)}
          </p>

          <p>
            Desconto: R$ {formatar(desconto)}
          </p>

          <h3>
            Total: R$ {formatar(total)}
          </h3>

          <p>Obrigado pela sua compra!</p>

        </div>
      )}

      <Link to="/" className="voltar-inicio">
        Voltar
      </Link>

    </section>
  );
}
