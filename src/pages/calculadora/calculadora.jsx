import { useState } from "react";
import "./calculadora.scss";

import { Link } from "react-router-dom";

export default function Calculadora() {
  const [n1, setN1] = useState("");
  const [n2, setN2] = useState("");
  const [operacao, setOperacao] = useState("+");
  const [resultado, setResultado] = useState("");

  function calcular() {
    if (n1 === "" || n2 === "") {
      setResultado("Digite os dois números!");
      return;
    }

    const a = Number(n1);
    const b = Number(n2);

    if (operacao === "+") {
      setResultado(a + b);
    } else if (operacao === "-") {
      setResultado(a - b);
    } else if (operacao === "*") {
      setResultado(a * b);
    } else if (operacao === "/") {
      setResultado(b === 0 ? "Não pode dividir por zero!" : a / b);
    }
  }

  return (
    <section className="pagina-calculadora">
      <Link to="/" className="voltar-inicio">Voltar</Link>
      <h2>Calculadora</h2>

      <input
        type="number"
        placeholder="Primeiro número"
        value={n1}
        onChange={(e) => setN1(e.target.value)}
      />

      <select
        value={operacao}
        onChange={(e) => setOperacao(e.target.value)}
      >
        <option value="+">Somar (+)</option>
        <option value="-">Subtrair (-)</option>
        <option value="*">Multiplicar (*)</option>
        <option value="/">Dividir (/)</option>
      </select>

      <input
        type="number"
        placeholder="Segundo número"
        value={n2}
        onChange={(e) => setN2(e.target.value)}
      />

      <button onClick={calcular}>Calcular</button>

      <h3>Resultado: {resultado}</h3>
    </section>
  );
}