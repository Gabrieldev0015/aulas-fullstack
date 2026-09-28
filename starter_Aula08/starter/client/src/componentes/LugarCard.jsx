import Estrelas from "./Estrelas";
import { ICONES_CATEGORIA } from "../data/iconesCategoria";
import {Link} from "react-router-dom"

function LugarCard({ lugar }) {
  return (
    <article className="card" data-categoria={lugar.categoria.toLowerCase()}>
      <div className="card-banner" aria-hidden="true">
        {ICONES_CATEGORIA[lugar.categoria] ?? "📍"}
      </div>
      <div className="card-body">
        <span className="badge">{lugar.categoria}</span>
        <h2 className="card-title">{lugar.nome}</h2>
        <p className="card-cidade">📍 {lugar.cidade}</p>
        <p className="card-descricao">{lugar.descricao}</p>
        <Estrelas nota={lugar.notaMedia} />
        {}
        <Link className="card-link" to ={`/lugares/${lugar.id}`}>
          Ver detalhes
        </Link>
      </div>
    </article>
  );
}

export default LugarCard;
