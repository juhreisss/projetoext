
import { useEffect, useState } from 'react';
import CartaoProjeto from '../componentes/CartaoProjeto';

function Inicio({ onNavigate }) {
  const [projetos, setProjetos] = useState([]);
  const [desafioSelecionado, setDesafioSelecionado] = useState(null);
  const [etapaAberta, setEtapaAberta] = useState(1);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/projetos/`)
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
      id: 'agua',
      icone: '💧',
      titulo: 'Desperdício de água',
      pergunta: 'Como posso usar água de maneira mais consciente?',
      sugestao:
        'Observe torneiras, vazamentos e hábitos de consumo. Na horta do projeto, a irrigação por gotejamento ajuda a direcionar a água para as plantas, evitando desperdícios.',
      acao: 'Conhecer soluções',
    },
    {
      id: 'alimentacao',
      icone: '🌱',
      titulo: 'Produção de alimentos',
      pergunta: 'É possível cultivar alimentos em pequenos espaços?',
      sugestao:
        'Sim! Hortas com temperos e hortaliças podem ser cultivadas em quintais, canteiros e até em vasos. Comece escolhendo uma planta adequada ao espaço disponível.',
      acao: 'Explorar soluções',
    },
    {
      id: 'residuos',
      icone: '♻️',
      titulo: 'Descarte de resíduos',
      pergunta: 'O que posso fazer para diminuir o lixo que produzo?',
      sugestao:
        'Separe materiais recicláveis, reutilize embalagens quando possível e procure os pontos de coleta adequados para cada tipo de resíduo.',
      acao: 'Ver ideias sustentáveis',
    },
    {
      id: 'energia',
      icone: '☀️',
      titulo: 'Consumo de energia',
      pergunta: 'Como reduzir o consumo de energia no dia a dia?',
      sugestao:
        'Apague as luzes ao sair dos ambientes, aproveite a iluminação natural e desligue aparelhos que não estão sendo utilizados.',
      acao: 'Encontrar alternativas',
    },
  ];

  const etapas = [
    {
      numero: '01',
      titulo: 'Identificação da necessidade',
      descricao:
        'O projeto parte da observação de necessidades reais e da busca por oportunidades de melhoria no ambiente e na comunidade.',
      icone: '🔎',
    },
    {
      numero: '02',
      titulo: 'Ação no espaço físico',
      descricao:
        'Na Sociedade Pró-Menor, foram realizadas atividades de revitalização de uma área externa, plantio de temperos e instalação de irrigação por gotejamento.',
      icone: '🌿',
    },
    {
      numero: '03',
      titulo: 'Compartilhamento do conhecimento',
      descricao:
        'A plataforma Raiz está sendo desenvolvida para reunir projetos, apresentar soluções sustentáveis e aproximar o conhecimento da comunidade.',
      icone: '💻',
    },
  ];

  const navegar = (rota) => {
    if (onNavigate) {
      onNavigate(rota);
    }
  };

  return (
    <main className="inicio">

      {/* APRESENTAÇÃO */}
      <section className="inicio-hero">
        <div className="inicio-hero-conteudo">
          <span className="inicio-selo">
            <span className="inicio-ponto" />
            PROJETO DE EXTENSÃO UNIVERSITÁRIA
          </span>

          <h1>
            Conhecimento que
            <br />
            sai da sala de aula
            <br />
            <span>e transforma realidades.</span>
          </h1>

          <p>
            O Raiz conecta educação, sustentabilidade e comunidade.
            Um espaço para conhecer iniciativas, descobrir soluções
            e perceber que a transformação começa com ações possíveis.
          </p>

          <div className="inicio-hero-acoes">
            <button
              className="inicio-botao-principal"
              onClick={() => navegar('/projetos')}
            >
              Conheça nossa iniciativa <span>→</span>
            </button>

            <button
              className="inicio-botao-secundario"
              onClick={() => navegar('/solucoes')}
            >
              Buscar uma solução
            </button>
          </div>

          <div className="inicio-assinatura">
            <span>🌱</span>
            <span>Uma iniciativa do projeto Cultivando o Futuro</span>
          </div>
        </div>

        <div className="inicio-hero-ilustracao">
          <div className="inicio-circulo inicio-circulo-externo" />
          <div className="inicio-circulo inicio-circulo-interno" />
          <div className="inicio-planta">🌳</div>

          <div className="inicio-destaque inicio-destaque-topo">
            <span>🤝</span>
            <div>
              <strong>Educação e comunidade</strong>
              <small>Aprender fazendo</small>
            </div>
          </div>

          <div className="inicio-destaque inicio-destaque-baixo">
            <span>🌎</span>
            <div>
              <strong>Impacto positivo</strong>
              <small>Ideias em movimento</small>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE O PROJETO DE EXTENSÃO */}
      <section className="inicio-extensao">
        <div className="inicio-extensao-texto">
          <span className="inicio-etiqueta">POR QUE ESTE SITE EXISTE?</span>
          <h2>
            A universidade também transforma quando se aproxima da comunidade.
          </h2>
          <p>
            O Cultivando o Futuro é um projeto de extensão universitária
            que une conhecimento acadêmico e ação social. A iniciativa
            envolve atividades de sustentabilidade na Sociedade Pró-Menor
            e o desenvolvimento desta plataforma para compartilhar ideias
            e soluções que possam inspirar outras pessoas.
          </p>
          <p>
            O site nasceu para que o aprendizado construído durante o
            projeto não fique restrito a uma única experiência: queremos
            que ele possa ser conhecido, compartilhado e aplicado em
            diferentes realidades.
          </p>

          <button
            className="inicio-link"
            onClick={() => navegar('/projetos')}
          >
            Entenda como o projeto foi desenvolvido <span>→</span>
          </button>
        </div>

        <div className="inicio-extensao-card">
          <span className="inicio-extensao-icone">🎓</span>
          <span className="inicio-extensao-legenda">NOSSA PROPOSTA</span>
          <h3>Aprender, aplicar e compartilhar.</h3>
          <div className="inicio-pilares">
            <div>
              <span>01</span>
              <p>Conhecimento acadêmico</p>
            </div>
            <div>
              <span>02</span>
              <p>Participação comunitária</p>
            </div>
            <div>
              <span>03</span>
              <p>Sustentabilidade na prática</p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIÊNCIA REAL DO PROJETO */}
      <section className="inicio-experiencia">
        <div className="inicio-experiencia-cabecalho">
          <div>
            <span className="inicio-etiqueta">DO PLANEJAMENTO À PRÁTICA</span>
            <h2>Uma ideia que começou no mundo real.</h2>
          </div>
          <p>
            Antes de chegar à plataforma, o projeto também ganhou forma
            em uma área da Sociedade Pró-Menor.
          </p>
        </div>

        <div className="inicio-experiencia-conteudo">
          <div className="inicio-experiencia-imagem">
            <div className="inicio-imagem-emoji">🪴</div>
            <span>HORTA E REVITALIZAÇÃO</span>
          </div>

          <div className="inicio-experiencia-detalhes">
            <h3>Pequenas mudanças no espaço, grandes oportunidades de aprendizado.</h3>
            <p>
              A iniciativa envolveu a preparação do solo, o plantio de
              temperos, a melhoria de áreas verdes e a instalação de um
              sistema de irrigação por gotejamento.
            </p>
            <p>
              Essa experiência prática reforça a proposta do projeto:
              buscar alternativas sustentáveis que possam ser aplicadas
              no cotidiano e compartilhadas com outras pessoas.
            </p>

            <button
              className="inicio-link"
              onClick={() => navegar('/projetos')}
            >
              Ver detalhes do projeto <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* ATIVIDADE INTERATIVA */}
      <section className="inicio-atividade">
        <div className="inicio-atividade-cabecalho">
          <span className="inicio-etiqueta">AGORA É COM VOCÊ</span>
          <h2>Qual desafio você gostaria de transformar?</h2>
          <p>
            Escolha uma situação e descubra uma atitude que pode fazer
            parte da mudança.
          </p>
        </div>

        <div className="inicio-atividade-grade">
          <div className="inicio-opcoes">
            {desafios.map((desafio) => (
              <button
                key={desafio.id}
                className={`inicio-opcao ${
                  desafioSelecionado?.id === desafio.id ? 'selecionada' : ''
                }`}
                onClick={() => setDesafioSelecionado(desafio)}
              >
                <span>{desafio.icone}</span>
                <span>{desafio.titulo}</span>
                <span className="inicio-opcao-seta">→</span>
              </button>
            ))}
          </div>

          <div className="inicio-resultado-atividade">
            {desafioSelecionado ? (
              <>
                <span className="inicio-resultado-icone">
                  {desafioSelecionado.icone}
                </span>
                <span className="inicio-etiqueta">SUA ESCOLHA</span>
                <h3>{desafioSelecionado.pergunta}</h3>
                <p>{desafioSelecionado.sugestao}</p>
                <button
                  className="inicio-botao-principal"
                  onClick={() => navegar('/solucoes')}
                >
                  {desafioSelecionado.acao} <span>→</span>
                </button>
              </>
            ) : (
              <div className="inicio-atividade-vazia">
                <span>👆</span>
                <h3>Escolha um desafio ao lado</h3>
                <p>
                  Sua escolha vai revelar uma sugestão para começar
                  a agir de forma mais sustentável.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CAMINHO DO PROJETO */}
      <section className="inicio-caminho">
        <div className="inicio-caminho-cabecalho">
          <span className="inicio-etiqueta">COMO TUDO SE CONECTA</span>
          <h2>Da experiência à troca de conhecimento.</h2>
          <p>
            Conheça as etapas que conectam a ação presencial à proposta
            digital do Cultivando o Futuro.
          </p>
        </div>

        <div className="inicio-caminho-lista">
          {etapas.map((etapa, indice) => (
            <button
              key={etapa.numero}
              className={`inicio-caminho-item ${
                etapaAberta === indice + 1 ? 'aberta' : ''
              }`}
              onClick={() =>
                setEtapaAberta(etapaAberta === indice + 1 ? null : indice + 1)
              }
            >
              <div className="inicio-caminho-numero">{etapa.numero}</div>
              <div className="inicio-caminho-conteudo">
                <div className="inicio-caminho-titulo">
                  <span>{etapa.icone}</span>
                  <h3>{etapa.titulo}</h3>
                  <span className="inicio-caminho-sinal">
                    {etapaAberta === indice + 1 ? '−' : '+'}
                  </span>
                </div>

                {etapaAberta === indice + 1 && (
                  <p>{etapa.descricao}</p>
                )}
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* ASSISTENTE */}
      <section className="inicio-assistente">
        <div className="inicio-assistente-icone">✳</div>
        <div className="inicio-assistente-texto">
          <span className="inicio-etiqueta">IDEIAS PARA O SEU DIA A DIA</span>
          <h2>Tem um problema? Vamos pensar em uma solução.</h2>
          <p>
            Conte sua necessidade ao assistente e explore possibilidades
            sustentáveis. A plataforma está em desenvolvimento para ampliar
            o acesso a esse conhecimento.
          </p>
        </div>
        <button
          className="inicio-botao-assistente"
          onClick={() => navegar('/chatbot')}
        >
          Explorar assistente <span>→</span>
        </button>
      </section>

      {/* PROJETOS DA PLATAFORMA */}
      <section className="inicio-projetos">
        <div className="inicio-projetos-cabecalho">
          <div>
            <span className="inicio-etiqueta">INICIATIVAS E INSPIRAÇÃO</span>
            <h2>Conhecimento compartilhado gera novas possibilidades.</h2>
            <p>
              Veja projetos que apresentam diferentes formas de enfrentar
              desafios e construir soluções.
            </p>
          </div>

          <button
            className="inicio-link"
            onClick={() => navegar('/projetos')}
          >
            Explorar projetos <span>→</span>
          </button>
        </div>

        <div className="inicio-lista-projetos">
          {projetos.length > 0 ? (
            projetos.slice(0, 3).map((projeto) => (
              <CartaoProjeto
                key={projeto.id}
                projeto={projeto}
              />
            ))
          ) : (
            <div className="inicio-projetos-vazio">
              <span>🌿</span>
              <h3>Estamos preparando este espaço.</h3>
              <p>
                Novas iniciativas poderão ser compartilhadas aqui.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ENCERRAMENTO */}
      <section className="inicio-final">
        <span>🌱</span>
        <h2>O conhecimento ganha força quando é compartilhado.</h2>
        <p>
          Faça parte dessa ideia: conheça, experimente e compartilhe
          caminhos para um futuro mais sustentável.
        </p>
        <button
          className="inicio-botao-principal"
          onClick={() => navegar('/solucoes')}
        >
          Começar a explorar <span>→</span>
        </button>
      </section>

    </main>
  );
}

export default Inicio;
