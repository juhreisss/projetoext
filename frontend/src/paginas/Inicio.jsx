import { useEffect, useState } from 'react';
import CartaoProjeto from '../componentes/CartaoProjeto';

function Inicio({ onNavigate }) {
  const [projetos, setProjetos] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/projetos/')
      .then((resposta) => {
        if (!resposta.ok) {
          throw new Error('Erro ao carregar projetos');
        }

        return resposta.json();
      })
      .then((dados) => {
        setProjetos(dados);
      })
      .catch((erro) => {
        console.error('Erro ao buscar projetos:', erro);
      });
  }, []);

  const desafios = [
    {
      icone: '💧',
      titulo: 'Água',
      descricao: 'Descubra maneiras de economizar e utilizar a água de forma consciente.',
      categoria: 'RECURSOS NATURAIS',
    },
    {
      icone: '⚡',
      titulo: 'Energia',
      descricao: 'Conheça alternativas para reduzir o consumo e aproveitar melhor a energia.',
      categoria: 'EFICIÊNCIA',
    },
    {
      icone: '🌱',
      titulo: 'Alimentação',
      descricao: 'Incentive hortas, cultivos sustentáveis e hábitos alimentares conscientes.',
      categoria: 'AGRICULTURA',
    },
    {
      icone: '♻️',
      titulo: 'Resíduos',
      descricao: 'Transforme descartes em oportunidades por meio da reutilização e reciclagem.',
      categoria: 'REAPROVEITAMENTO',
    },
  ];

  return (
    <main className="inicio">

      {/* HERO */}
      <section className="hero">
        <div className="hero-conteudo">
          <span className="etiqueta">
            <span className="ponto-verde"></span>
            IDEIAS QUE TRANSFORMAM O FUTURO
          </span>

          <h1>
            O futuro começa
            <br />
            com pequenas
            <br />
            <span>transformações.</span>
          </h1>

          <p>
            Descubra soluções sustentáveis, conheça projetos
            inspiradores e encontre novas maneiras de transformar
            problemas do dia a dia em oportunidades.
          </p>

          <div className="hero-botoes">
            <button
              className="botao-principal"
              onClick={() => onNavigate('/solucoes')}
            >
              Encontrar soluções <span>→</span>
            </button>

            <button
              className="botao-secundario"
              onClick={() => onNavigate('/projetos')}
            >
              Conhecer o projeto
            </button>
          </div>

          <div className="hero-frase">
            <span>🌿</span>
            Sustentabilidade começa com atitudes possíveis.
          </div>
        </div>

        <div className="hero-visual">
          <div className="imagem-principal">
            <div className="circulo-fundo"></div>
            <div className="planta-ilustracao">🌱</div>

            <div className="card-flutuante card-superior">
              <span>🌎</span>
              <div>
                <strong>Um futuro melhor</strong>
                <small>Começa agora</small>
              </div>
            </div>

            <div className="card-flutuante card-inferior">
              <span>♻️</span>
              <div>
                <strong>Faça a diferença</strong>
                <small>Uma ideia de cada vez</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDICADORES */}
      <section className="indicadores">
        <div className="indicador">
          <span>🌍</span>
          <div>
            <strong>Sustentabilidade</strong>
            <p>Consciência ambiental</p>
          </div>
        </div>

        <div className="indicador">
          <span>💡</span>
          <div>
            <strong>Inovação</strong>
            <p>Ideias que geram mudanças</p>
          </div>
        </div>

        <div className="indicador">
          <span>🤝</span>
          <div>
            <strong>Impacto social</strong>
            <p>Transformação coletiva</p>
          </div>
        </div>

        <div className="indicador">
          <span>🌱</span>
          <div>
            <strong>Consumo consciente</strong>
            <p>Atitudes para o futuro</p>
          </div>
        </div>
      </section>

      {/* DESAFIOS */}
      <section className="desafios">
        <div className="titulo-secao">
          <span className="etiqueta">EXPLORE POSSIBILIDADES</span>
          <h2>
            Qual transformação
            <br />
            você quer começar?
          </h2>
          <p>
            Cada desafio pode ser o ponto de partida para uma
            solução sustentável.
          </p>
        </div>

        <div className="categorias">
          {desafios.map((desafio) => (
            <div className="categoria" key={desafio.titulo}>
              <span className="categoria-tag">{desafio.categoria}</span>
              <div className="categoria-icone">{desafio.icone}</div>
              <h3>{desafio.titulo}</h3>
              <p>{desafio.descricao}</p>
              <button onClick={() => onNavigate('/solucoes')}>
                Explorar soluções <span>↗</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="como-funciona">
        <div className="titulo-secao">
          <span className="etiqueta">SIMPLES ASSIM</span>
          <h2>Da necessidade à transformação.</h2>
          <p>
            Um caminho para encontrar ideias e descobrir
            possibilidades sustentáveis.
          </p>
        </div>

        <div className="etapas">
          <div className="etapa">
            <span className="etapa-numero">01</span>
            <div className="etapa-icone">🔎</div>
            <h3>Identifique</h3>
            <p>
              Reconheça um desafio ou uma necessidade presente
              no seu dia a dia.
            </p>
          </div>

          <div className="etapa-seta">→</div>

          <div className="etapa">
            <span className="etapa-numero">02</span>
            <div className="etapa-icone">💡</div>
            <h3>Descubra</h3>
            <p>
              Explore ideias e alternativas que podem ajudar
              a resolver o problema.
            </p>
          </div>

          <div className="etapa-seta">→</div>

          <div className="etapa">
            <span className="etapa-numero">03</span>
            <div className="etapa-icone">🌿</div>
            <h3>Transforme</h3>
            <p>
              Coloque boas ideias em prática e contribua para
              um futuro mais sustentável.
            </p>
          </div>
        </div>
      </section>

      {/* CHATBOT */}
      <section className="chamada-chatbot">
        <div className="chatbot-icone">✳</div>

        <div className="chatbot-texto">
          <span className="etiqueta">PRECISA DE UMA IDEIA?</span>
          <h2>
            Sua próxima solução
            <br />
            pode começar com uma pergunta.
          </h2>
          <p>
            Conte o que você precisa e explore possibilidades
            sustentáveis com nosso assistente.
          </p>
        </div>

        <button
          className="botao-chatbot"
          onClick={() => onNavigate('/chatbot')}
        >
          Conversar com assistente <span>→</span>
        </button>
      </section>

      {/* PROJETOS */}
      <section className="projetos">
        <div className="projetos-cabecalho">
          <div className="titulo-secao">
            <span className="etiqueta">INSPIRAÇÃO EM AÇÃO</span>
            <h2>Ideias que saem do papel.</h2>
            <p>
              Conheça iniciativas e projetos que buscam gerar
              mudanças positivas.
            </p>
          </div>

          <button
            className="botao-link"
            onClick={() => onNavigate('/projetos')}
          >
            Ver todos os projetos →
          </button>
        </div>

        <div className="lista-projetos">
          {projetos.length > 0 ? (
            projetos.slice(0, 3).map((projeto) => (
              <CartaoProjeto
                key={projeto.id}
                projeto={projeto}
              />
            ))
          ) : (
            <div className="projetos-vazio">
              <span>🌱</span>
              <h3>Novos projetos estão chegando!</h3>
              <p>
                Em breve, você poderá conhecer mais iniciativas
                sustentáveis por aqui.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* RODAPÉ DE CHAMADA */}
      <section className="frase-final">
        <span>“</span>
        <h2>
          Não precisamos de poucas pessoas fazendo sustentabilidade
          perfeitamente, mas de muitas pessoas fazendo o possível.
        </h2>
        <p>Pequenas atitudes também constroem grandes futuros.</p>
      </section>

    </main>
  );
}

export default Inicio;