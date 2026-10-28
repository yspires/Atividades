import { useState } from "react";
import "./Teste.scss";

import { Link } from "react-router-dom";

export default function Teste() {
const [texto1, setTexto1] = useState("");
const [texto2, setTexto2] = useState("");
const [enviado, setEnviado] = useState(false);

function enviar() {
setEnviado(true);
}

return (
    <section className="pagina-teste">
<Link to="/" className="voltar-inicio"> Voltar</Link>
<div className="container">
<h1>Perguntas:</h1>

<h2>Você gosta de pipoca?</h2>

<p className="texto-digitado">
{texto1 || "..."}

</p>

<input
type="text"
placeholder="Digite seu primeiro texto"
value={texto1}
onChange={(e) => {
setTexto1(e.target.value);
setEnviado(false);
}}
/>

<h2>Vamos brincar de boneca?</h2>

<p className="texto-digitado">
{texto2 || "..."}
</p>

<input
type="text"
placeholder="Digite seu segundo texto"
value={texto2}
onChange={(e) => {
setTexto2(e.target.value);
setEnviado(false);
}}
/>

<button onClick={enviar}>
Enviar
</button>

{enviado && (
<div className="resultado">
<h2>Respostas!</h2>
<p>1: {texto1}</p>
<p>2: {texto2}</p>
</div>
)}
</div>
</section>

);
}