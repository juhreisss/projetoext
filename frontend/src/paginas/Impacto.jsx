
import { useState } from 'react';

function Impacto() {
  const [areaSelecionada, setAreaSelecionada] = useState(null);
  const [respostaQuiz, setRespostaQuiz] = useState(null);
  const [desafioConcluido, setDesafioConcluido] = useState(false);
  const [respostaJogo, setRespostaJogo] = useState(null);
  const [habitos, setHabitos] = useState([]);

  const indicadores = [
    {
      numero: 'Água',
      titulo: 'Uso consciente',
      descricao: 'Incentivo ao uso responsável da água e à redução do desperdício.',
      icone: '💧',
      detalhe: 'A água é essencial para a vida e para a produção de alimentos. Pequenas mudanças na rotina ajudam a preservar esse recurso.',
      acoes: [
        'Utilizar sistemas de irrigação por gotejamento.',
        'Evitar deixar torneiras abertas.',
        'Reaproveitar água sempre que possível.',
      ],
    },
    {
      numero: 'Energia',
      titulo: 'Eficiência energética',
      descricao: 'Valorização de alternativas sustentáveis e acessíveis.',
      icone: '⚡',
      detalhe: 'O consumo consciente de energia contribui para reduzir desperdícios e incentivar hábitos mais sustentáveis.',
      acoes: [
        'Apagar as luzes ao sair dos ambientes.',
        'Priorizar lâmpadas econômicas.',
        'Desligar aparelhos que não estão em uso.',
      ],
    },
    {
      numero: 'Alimentação',
      titulo: 'Produção sustentável',
      descricao: 'Estímulo ao cultivo e à alimentação consciente.',
      icone: '🌱',
      detalhe: 'O cultivo de alimentos e temperos aproxima as pessoas da natureza e incentiva uma alimentação mais consciente.',
      acoes: [
        'Cultivar temperos e hortaliças.',
        'Valorizar alimentos naturais e locais.',
        'Planejar refeições para evitar desperdícios.',
      ],
    },
    {
      numero: 'Resíduos',
      titulo: 'Menos desperdício',
      descricao: 'Incentivo ao reaproveitamento e à destinação adequada.',
      icone: '♻️',
      detalhe: 'O descarte correto e o reaproveitamento de materiais ajudam a diminuir a quantidade de resíduos no meio ambiente.',
      acoes: [
        'Separar materiais recicláveis.',
        'Reutilizar embalagens e objetos.',
        'Evitar produtos descartáveis.',
      ],
    },
  ];

  const perguntaQuiz = {
    pergunta: 'Qual atitude ajuda a economizar água na horta?',
    opcoes: [
      'Regar as plantas durante o sol forte',
      'Utilizar irrigação por gotejamento',
      'Deixar a mangueira aberta',
    ],
    correta: 1,
    explicacao:
      'A irrigação por gotejamento leva água diretamente às plantas e ajuda a reduzir desperdícios.',
  };

  const opcoesJogo = [
    {
      texto: 'Jogar óleo de cozinha na pia',
      correta: false,
    },
    {
      texto: 'Armazenar o óleo para descarte adequado',
      correta: true,
    },
  ];

  const habitosDisponiveis = [
    'Apago as luzes quando saio de um ambiente',
    'Evito deixar a torneira aberta',
    'Separo materiais recicláveis',
    'Evito desperdiçar alimentos',
    'Reutilizo materiais sempre que possível',
  ];

  function alternarHabito(habito) {
    setHabitos((atuais) =>
      atuais.includes(habito)
        ? atuais.filter((item) => item !== habito)
        : [...atuais, habito]
    );
  }

  return (
    <main className="pagina-impacto">

      {/* APRESENTAÇÃO */}

      <section className="hero-impacto">
        <div className="hero-impacto-conteudo">
          <span className="etiqueta">NOSSO IMPACTO</span>

          <h1>
            Pequenas atitudes.
            <br />
            <span>Grandes transformações.</span>
          </h1>

          <p>
            A sustentabilidade começa nas escolhas do dia a dia.
            Descubra como pequenas ações podem contribuir para
            um futuro mais consciente e sustentável.
          </p>

          <a href="#areas-impacto" className="botao-impacto">
            Explorar áreas
            <span>↓</span>
          </a>
        </div>

        <div className="hero-impacto-visual">
          <div className="circulo-impacto">
            <span>🌎</span>
          </div>

          <div className="folha-decorativa">🌿</div>

          <div className="texto-visual">
            <strong>O futuro é construído agora.</strong>
            <span>Cada atitude faz a diferença.</span>
          </div>
        </div>
      </section>

      {/* ÁREAS DE TRANSFORMAÇÃO */}

      <section className="conteudo-impacto" id="areas-impacto">
        <div className="titulo-impacto">
          <span className="etiqueta">ÁREAS DE TRANSFORMAÇÃO</span>

          <h2>Onde podemos gerar impacto?</h2>

          <p>
            Selecione uma das áreas abaixo e descubra atitudes
            que ajudam a construir um mundo melhor.
          </p>
        </div>

        <div className="lista-impacto">
          {indicadores.map((indicador, index) => (
            <article
              className={`cartao-impacto ${
                areaSelecionada === index ? 'cartao-ativo' : ''
              }`}
              key={indicador.numero}
            >
              <button
                className="botao-cartao-impacto"
                onClick={() =>
                  setAreaSelecionada(
                    areaSelecionada === index ? null : index
                  )
                }
                aria-expanded={areaSelecionada === index}
              >
                <div className="topo-cartao-impacto">
                  <div className="icone-impacto">
                    {indicador.icone}
                  </div>

                  <span className="seta-impacto">
                    {areaSelecionada === index ? '−' : '+'}
                  </span>
                </div>

                <span className="tag">{indicador.numero}</span>

                <h3>{indicador.titulo}</h3>

                <p>{indicador.descricao}</p>

                <span className="texto-clique">
                  {areaSelecionada === index
                    ? 'Fechar informações'
                    : 'Clique para descobrir mais'}
                </span>
              </button>

              {areaSelecionada === index && (
                <div className="detalhes-impacto">
                  <p>{indicador.detalhe}</p>

                  <strong>O que podemos fazer?</strong>

                  <ul>
                    {indicador.acoes.map((acao) => (
                      <li key={acao}>{acao}</li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* EXPERIÊNCIAS INTERATIVAS */}

      <section className="experiencias-impacto">
        <div className="titulo-impacto">
          <span className="etiqueta">APRENDA PARTICIPANDO</span>

          <h2>Vamos transformar conhecimento em atitude?</h2>

          <p>
            Explore as atividades, teste seus conhecimentos e descubra
            como suas escolhas podem contribuir com o meio ambiente.
          </p>
        </div>

        <div className="grade-experiencias">

          {/* QUIZ */}

          <article className="experiencia-card quiz-card">
            <div className="experiencia-icone">🧠</div>

            <span className="experiencia-tag">
              QUIZ SUSTENTÁVEL
            </span>

            <h3>Teste seus conhecimentos!</h3>

            <p>{perguntaQuiz.pergunta}</p>

            <div className="opcoes-quiz">
              {perguntaQuiz.opcoes.map((opcao, index) => (
                <button
                  key={opcao}
                  className={`opcao-interativa ${
                    respostaQuiz === index
                      ? index === perguntaQuiz.correta
                        ? 'opcao-correta'
                        : 'opcao-errada'
                      : ''
                  }`}
                  onClick={() => setRespostaQuiz(index)}
                  disabled={respostaQuiz !== null}
                >
                  {opcao}
                </button>
              ))}
            </div>

            {respostaQuiz !== null && (
              <div className="feedback-interacao">
                <strong>
                  {respostaQuiz === perguntaQuiz.correta
                    ? '🎉 Resposta correta!'
                    : '💡 Não foi dessa vez!'}
                </strong>

                <p>{perguntaQuiz.explicacao}</p>

                <button onClick={() => setRespostaQuiz(null)}>
                  Tentar novamente
                </button>
              </div>
            )}
          </article>

          {/* DESAFIO DO DIA */}

          <article className="experiencia-card desafio-card">
            <div className="experiencia-icone">🎯</div>

            <span className="experiencia-tag">
              DESAFIO SUSTENTÁVEL
            </span>

            <h3>Missão do dia</h3>

            <div className="desafio-ilustracao">💧</div>

            <h4>Economize água hoje!</h4>

            <p>
              Escolha uma atitude para evitar o desperdício de água
              durante o seu dia.
            </p>

            <button
              className={`botao-concluir ${
                desafioConcluido ? 'concluido' : ''
              }`}
              onClick={() => setDesafioConcluido(!desafioConcluido)}
            >
              {desafioConcluido
                ? '✓ Desafio concluído!'
                : 'Concluir desafio'}
            </button>

            {desafioConcluido && (
              <p className="mensagem-sucesso">
                Parabéns! Uma pequena atitude já faz diferença. 🌱
              </p>
            )}
          </article>

          {/* JOGO DE ESCOLHAS */}

          <article className="experiencia-card jogo-card">
            <div className="experiencia-icone">🎮</div>

            <span className="experiencia-tag">
              JOGO RÁPIDO
            </span>

            <h3>Qual é a melhor escolha?</h3>

            <p>
              Você terminou de cozinhar e precisa descartar o óleo
              usado. O que faria?
            </p>

            <div className="opcoes-jogo">
              {opcoesJogo.map((opcao) => (
                <button
                  key={opcao.texto}
                  className={`opcao-interativa ${
                    respostaJogo === opcao.correta
                      ? opcao.correta
                        ? 'opcao-correta'
                        : 'opcao-errada'
                      : ''
                  }`}
                  onClick={() => setRespostaJogo(opcao.correta)}
                  disabled={respostaJogo !== null}
                >
                  {opcao.texto}
                </button>
              ))}
            </div>

            {respostaJogo !== null && (
              <div className="feedback-interacao">
                <strong>
                  {respostaJogo
                    ? '🌟 Boa escolha!'
                    : '🤔 Vamos tentar outra vez?'}
                </strong>

                <p>
                  O óleo não deve ser despejado na pia. Armazene-o
                  em uma garrafa e procure um ponto de coleta.
                </p>

                <button onClick={() => setRespostaJogo(null)}>
                  Jogar novamente
                </button>
              </div>
            )}
          </article>

          {/* TESTE DE HÁBITOS */}

          <article className="experiencia-card habitos-card">
            <div className="experiencia-icone">🌿</div>

            <span className="experiencia-tag">
              MEUS HÁBITOS
            </span>

            <h3>Como está sua rotina sustentável?</h3>

            <p>Marque as atitudes que você já pratica:</p>

            <div className="lista-habitos">
              {habitosDisponiveis.map((habito) => (
                <label key={habito}>
                  <input
                    type="checkbox"
                    checked={habitos.includes(habito)}
                    onChange={() => alternarHabito(habito)}
                  />

                  <span>{habito}</span>
                </label>
              ))}
            </div>

            <div className="progresso-habitos">
              <div className="progresso-texto">
                <strong>Seu resultado</strong>
                <span>{habitos.length} de 5 hábitos</span>
              </div>

              <div className="barra-progresso">
                <div
                  style={{
                    width: `${(habitos.length / 5) * 100}%`,
                  }}
                />
              </div>
            </div>

            <p className="mensagem-habitos">
              {habitos.length === 5
                ? 'Incrível! Você marcou todos os hábitos. Continue assim! 🌎'
                : habitos.length >= 3
                  ? 'Você está no caminho certo! Continue cultivando bons hábitos.'
                  : 'Toda mudança começa com uma pequena atitude. Que tal escolher mais uma?'}
            </p>
          </article>

        </div>
      </section>

      {/* DESTAQUE DO PROJETO */}

      <section className="destaque-projeto-impacto">
        <div className="icone-destaque">🌱</div>

        <span className="etiqueta">CULTIVANDO O FUTURO</span>

        <h2>
          O impacto começa quando
          <span> transformamos ideias em atitudes.</span>
        </h2>

        <p>
          Nosso projeto une sustentabilidade, revitalização de
          espaços verdes e tecnologia para incentivar práticas
          conscientes e compartilhar soluções com a comunidade.
        </p>

        <div className="destaques-impacto">
          <div>
            <strong>🌿</strong>
            <span>Revitalização de áreas verdes</span>
          </div>

          <div>
            <strong>💧</strong>
            <span>Uso consciente da água</span>
          </div>

          <div>
            <strong>💻</strong>
            <span>Compartilhamento de soluções</span>
          </div>
        </div>
      </section>

      {/* CHAMADA FINAL */}

      <section className="mensagem-impacto">
        <span className="etiqueta">FAÇA PARTE DA MUDANÇA</span>

        <h2>
          Que tal começar
          <span> hoje mesmo?</span>
        </h2>

        <p>
          Conheça ideias e iniciativas que podem ajudar você
          a adotar hábitos mais sustentáveis.
        </p>

        <a href="/solucoes" className="botao-impacto botao-secundario">
          Conhecer soluções
          <span>→</span>
        </a>
      </section>

    </main>
  );
}

export default Impacto;
