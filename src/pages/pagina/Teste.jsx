import { useState } from "react";
import "./Teste.scss";

export default function Teste() {
const [texto1, setTexto1] = useState("");
const [texto2, setTexto2] = useState("");
const [enviado, setEnviado] = useState(false);

function enviar() {
setEnviado(true);
}

return (
<div className="container">
<h1>Minha Página React</h1>

<img
src="https://placehold.co/200x150"
alt="Imagem de exemplo"
className="imagem"
/>

<h2>Primeiro texto</h2>

<p className="texto-digitado">
{texto1 || "Seu texto aparecerá aqui"}

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

<h2>Segundo texto</h2>

<p className="texto-digitado">
{texto2 || "Seu segundo texto aparecerá aqui"}
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
<h2>Textos enviados!</h2>
<p>Primeiro texto: {texto1}</p>
<p>Segundo texto: {texto2}</p>
</div>
)}
</div>
);
}