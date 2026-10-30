
function Impacto() {
  const indicadores = [
    {
      numero: 'Água',
      titulo: 'Uso consciente',
      descricao: 'Incentivo ao uso responsável da água e à redução do desperdício.',
      icone: '💧',
    },
    {
      numero: 'Energia',
      titulo: 'Eficiência energética',
      descricao: 'Valorização de alternativas sustentáveis e acessíveis.',
      icone: '⚡',
    },
    {
      numero: 'Alimentação',
      titulo: 'Produção sustentável',
      descricao: 'Estímulo ao cultivo e à alimentação consciente.',
      icone: '🌱',
    },
    {
      numero: 'Resíduos',
      titulo: 'Menos desperdício',
      descricao: 'Incentivo ao reaproveitamento e à destinação adequada.',
      icone: '♻️',
    },
  ];

  return (
    <main className="pagina-impacto">
      <section className="cabecalho-impacto">
        <span className="etiqueta">NOSSO IMPACTO</span>

        <h1>
          Cultivando mudanças.
          <br />
          <span>Transformando futuros.</span>
        </h1>

        <p>
          Cada solução sustentável representa uma oportunidade de
          transformar hábitos, preservar recursos e melhorar a vida
          das comunidades.
        </p>
      </section>

      <section className="conteudo-impacto">
        <div className="titulo-impacto">
          <span className="etiqueta">ÁREAS DE TRANSFORMAÇÃO</span>

          <h2>Onde podemos gerar impacto?</h2>

          <p>
            Conheça os principais desafios que buscamos transformar
            por meio de soluções sustentáveis.
          </p>
        </div>

        <div className="lista-impacto">
          {indicadores.map((indicador) => (
            <article className="cartao-impacto" key={indicador.numero}>
              <div className="icone-impacto">
                {indicador.icone}
              </div>

              <span className="tag">{indicador.numero}</span>

              <h3>{indicador.titulo}</h3>

              <p>{indicador.descricao}</p>
            </article>
          ))}
        </div>

        <section className="mensagem-impacto">
          <span className="etiqueta">CULTIVANDO O FUTURO</span>

          <h2>
            Pequenas atitudes podem gerar
            <span> grandes transformações.</span>
          </h2>

          <p>
            Nosso objetivo é incentivar iniciativas que aproximem
            sustentabilidade, inovação e comunidade.
          </p>
        </section>
      </section>
    </main>
  );
}

export default Impacto;
