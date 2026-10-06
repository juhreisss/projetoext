function CartaoProjeto({ projeto }) {
  return (
    <article className="cartao-projeto">
      <span className="tag">{projeto.status}</span>

      <h3>{projeto.nome}</h3>

      <p>{projeto.descricao}</p>

      <button>
        Conhecer projeto →
      </button>
    </article>
  );
}

export default CartaoProjeto;