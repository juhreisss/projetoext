import { useEffect, useState } from 'react';
import CartaoProjeto from '../componentes/CartaoProjeto';

function Inicio() {
  const [projetos, setProjetos] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/projetos/')
      .then((resposta) => resposta.json())
      .then((dados) => setProjetos(dados));
  }, []);

  return (
    <main>
      <section className="hero">
        <span className="etiqueta">SOLUÇÕES SUSTENTÁVEIS</span>

        <h1>
          Pequenas soluções.
          <br />
          <span>Grandes transformações.</span>
        </h1>

        <p>
          Soluções sustentáveis, acessíveis e aplicáveis
          à realidade de cada comunidade.
        </p>

        <div className="hero-botoes">
          <button className="botao-principal">
            Explorar soluções
          </button>

          <button className="botao-secundario">
            Conhecer projetos
          </button>
        </div>
      </section>

      <section className="desafios">
        <div className="titulo-secao">
          <span className="etiqueta">DESAFIOS</span>

          <h2>Quais desafios podemos transformar?</h2>

          <p>
            Soluções pensadas para diferentes necessidades
            das comunidades.
          </p>
        </div>

        <div className="categorias">
          <div className="categoria">
            <div className="categoria-icone">💧</div>
            <h3>Água</h3>
            <p>Uso consciente e acesso à água.</p>
          </div>

          <div className="categoria">
            <div className="categoria-icone">⚡</div>
            <h3>Energia</h3>
            <p>Alternativas acessíveis e sustentáveis.</p>
          </div>

          <div className="categoria">
            <div className="categoria-icone">🌱</div>
            <h3>Alimentação</h3>
            <p>Produção e alimentação sustentável.</p>
          </div>

          <div className="categoria">
            <div className="categoria-icone">♻️</div>
            <h3>Resíduos</h3>
            <p>Reaproveitamento e redução de desperdícios.</p>
          </div>
        </div>
      </section>

      <section className="projetos">
        <div className="titulo-secao">
          <span className="etiqueta">PROJETOS</span>

          <h2>Projetos que transformam</h2>

          <p>
            Conheça iniciativas que transformam problemas
            reais em soluções.
          </p>
        </div>

        <div className="lista-projetos">
          {projetos.map((projeto) => (
            <CartaoProjeto
              key={projeto.id}
              projeto={projeto}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Inicio;