
import { useState } from 'react';
import imagemHorta from '../assets/horta.png';
import imagemPlataforma from '../assets/plataforma.jpeg';

function Projetos() {
  const [etapaAberta, setEtapaAberta] = useState(1);

  const etapas = [
    {
      numero: '01',
      data: '05 de outubro de 2026',
      titulo: 'O início: preparação do espaço',
      icone: '🧹',
      descricao:
        'A primeira etapa foi dedicada à preparação da área escolhida na Sociedade Pró-Menor. O trabalho começou com a limpeza do espaço, retirada de plantas invasoras, organização do terreno e preparação do solo para receber os novos plantios.',
      detalhes: [
        'Limpeza e organização da área;',
        'Retirada de ervas daninhas;',
        'Nivelamento do terreno;',
        'Preparação e adubação do solo;',
        'Início do plantio de temperos e plantas.'
      ]
    },
    {
      numero: '02',
      data: '13 de outubro de 2026',
      titulo: 'Revitalização e cuidado com a área verde',
      icone: '🌱',
      descricao:
        'Na segunda etapa, o trabalho avançou para a revitalização do ambiente. Além de ampliar o plantio, foram realizadas melhorias na vegetação e em elementos já existentes no espaço. Também foi instalado um sistema de irrigação por gotejamento, pensado para facilitar os cuidados com a horta e favorecer o uso consciente da água.',
      detalhes: [
        'Poda de árvores e manutenção da vegetação;',
        'Corte da grama e melhoria da área verde;',
        'Plantio de novos temperos;',
        'Instalação de grama em parte do espaço;',
        'Instalação do sistema de irrigação por gotejamento;',
        'Recuperação e pintura de um banco;',
        'Orientação ao representante da instituição sobre o uso da irrigação.'
      ]
    },
    {
      numero: '03',
      data: 'Em desenvolvimento',
      titulo: 'A criação da plataforma digital Raiz',
      icone: '💻',
      descricao:
        'Depois das atividades presenciais, surgiu a oportunidade de ampliar o alcance do projeto por meio da tecnologia. Assim, começou o desenvolvimento da plataforma Raiz, pensada como um espaço digital público para reunir iniciativas sustentáveis, apresentar soluções e compartilhar conhecimentos com a comunidade.',
      detalhes: [
        'Desenvolvimento da estrutura da plataforma;',
        'Organização de conteúdos sobre sustentabilidade;',
        'Criação de áreas para apresentação de projetos e soluções;',
        'Desenvolvimento da proposta de um assistente virtual com inteligência artificial.'
      ]
    },
    {
      numero: '04',
      data: '20 de novembro de 2026 — etapa planejada',
      titulo: 'Finalização, testes e avaliação',
      icone: '🚀',
      descricao:
        'A etapa final está planejada para reunir os resultados das atividades realizadas, revisar o funcionamento da plataforma e organizar os registros do projeto. Também será o momento de avaliar o desenvolvimento da iniciativa e identificar possibilidades de continuidade.',
      detalhes: [
        'Finalização e revisão da plataforma;',
        'Testes das funcionalidades desenvolvidas;',
        'Organização dos registros e materiais do projeto;',
        'Avaliação das atividades realizadas;',
        'Análise dos resultados e aprendizados.'
      ]
    }
  ];

  return (
    <main className="pagina-projetos">

      {/* APRESENTAÇÃO */}
      <section className="cabecalho-projetos">
        <span className="etiqueta">PROJETO DE EXTENSÃO UNIVERSITÁRIA</span>

        <h1>
          Cultivando o Futuro
          <br />
          <span>Uma experiência que une prática e tecnologia.</span>
        </h1>

        <p>
          Uma iniciativa que aproxima o conhecimento acadêmico da
          comunidade, promovendo a sustentabilidade por meio de ações
          presenciais e do desenvolvimento de uma plataforma digital.
        </p>

        <div className="projeto-identificacao">
          <span>🎓 Engenharia de Software</span>
          <span>🌿 ODS 02 — Fome Zero e Agricultura Sustentável</span>
          <span>🤝 Sociedade Pró-Menor</span>
        </div>
      </section>

      {/* COMO SURGIU */}
      <section className="conteudo-projetos">

        <div className="texto-projeto">
          <span className="etiqueta">COMO TUDO COMEÇOU</span>

          <h2>Uma proposta que precisava sair do papel.</h2>

          <p>
            O Cultivando o Futuro surgiu como uma iniciativa de extensão
            universitária, com o propósito de aplicar conhecimentos
            desenvolvidos durante a formação acadêmica em uma experiência
            que pudesse contribuir com a comunidade.
          </p>

          <p>
            A proposta foi construída a partir de um desafio: como
            transformar o conhecimento sobre sustentabilidade em ações
            concretas e, ao mesmo tempo, permitir que essas experiências
            fossem compartilhadas com outras pessoas?
          </p>

          <p>
            Foi assim que o projeto passou a integrar duas frentes
            complementares: a revitalização de uma área na Sociedade
            Pró-Menor e o desenvolvimento de uma plataforma digital
            voltada à divulgação de iniciativas e soluções sustentáveis.
          </p>

          <h2>Por que a Sociedade Pró-Menor?</h2>

          <p>
            A parceria com a Sociedade Pró-Menor possibilitou levar a
            proposta para um espaço real, no qual as ações de
            sustentabilidade pudessem ser planejadas e colocadas em
            prática. A ideia foi aproveitar uma área da instituição e
            contribuir para sua melhoria, valorizando o contato com a
            natureza e o uso consciente dos recursos.
          </p>

          <h2>Duas frentes, um mesmo propósito.</h2>

          <p>
            A primeira frente foi voltada à transformação do espaço
            físico, com limpeza, preparação do solo, plantio e melhorias
            na área verde. A segunda surgiu para ampliar o alcance dessa
            experiência: uma plataforma digital capaz de reunir
            conhecimentos, projetos e alternativas sustentáveis.
          </p>
        </div>

        {/* IMAGENS DO PROJETO */}
        <div className="imagens-projeto">

          <div className="espaco-imagem">
            <img
              src={imagemHorta}
              alt="Revitalização da horta na Sociedade Pró-Menor"
            />

            <p>
          Desenvolvimento da plataforma digital Raiz
            </p>
          </div>

          <div className="espaco-imagem">
            <img
              src={imagemPlataforma}
              alt="Plataforma digital Cultivando o Futuro"
            />

            <p>
              Revitalização da horta na Sociedade Pró-Menor
            </p>
          </div>

        </div>
      </section>

      {/* LINHA DO TEMPO */}
      <section className="linha-tempo-projeto">
        <div className="linha-tempo-cabecalho">
          <span className="etiqueta">NOSSA TRAJETÓRIA</span>
          <h2>Veja como o projeto foi acontecendo.</h2>
          <p>
            Cada etapa representa uma parte da construção do Cultivando
            o Futuro. Selecione os momentos para conhecer as atividades
            realizadas e os próximos passos.
          </p>
        </div>

        <div className="linha-tempo-lista">
          {etapas.map((etapa, indice) => (
            <div
              className={`linha-tempo-item ${
                etapaAberta === indice + 1 ? 'ativa' : ''
              }`}
              key={etapa.numero}
            >
              <button
                className="linha-tempo-botao"
                onClick={() =>
                  setEtapaAberta(
                    etapaAberta === indice + 1 ? null : indice + 1
                  )
                }
              >
                <span className="linha-tempo-numero">
                  {etapa.numero}
                </span>

                <span className="linha-tempo-icone">
                  {etapa.icone}
                </span>

                <span className="linha-tempo-titulo">
                  <small>{etapa.data}</small>
                  <strong>{etapa.titulo}</strong>
                </span>

                <span className="linha-tempo-sinal">
                  {etapaAberta === indice + 1 ? '−' : '+'}
                </span>
              </button>

              {etapaAberta === indice + 1 && (
                <div className="linha-tempo-detalhes">
                  <p>{etapa.descricao}</p>

                  <h4>
                    {indice === 3
                      ? 'Próximas atividades previstas'
                      : 'O que fez parte desta etapa'}
                  </h4>

                  <ul>
                    {etapa.detalhes.map((detalhe, detalheIndice) => (
                      <li key={detalheIndice}>{detalhe}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* DUAS FRENTES */}
      <section className="frentes-projeto">
        <div className="frentes-cabecalho">
          <span className="etiqueta">O QUE ESTAMOS CONSTRUINDO</span>
          <h2>O projeto acontece em dois espaços.</h2>
          <p>
            Uma experiência prática na instituição e uma iniciativa
            digital que busca levar o conhecimento ainda mais longe.
          </p>
        </div>

        <div className="frentes-grade">
          <article className="frente-card">
            <span className="frente-icone">🌿</span>
            <span className="etiqueta">AÇÃO PRESENCIAL</span>
            <h3>Revitalização e sustentabilidade</h3>
            <p>
              Ações de melhoria da área verde da Sociedade Pró-Menor,
              com plantio de temperos, cuidado com a vegetação e
              instalação de irrigação por gotejamento.
            </p>
            <span className="frente-status">Atividades realizadas</span>
          </article>

          <article className="frente-card">
            <span className="frente-icone">💻</span>
            <span className="etiqueta">AÇÃO DIGITAL</span>
            <h3>Plataforma Raiz</h3>
            <p>
              Desenvolvimento de um ambiente público para apresentar
              projetos, compartilhar soluções sustentáveis e aproximar
              as pessoas de informações sobre sustentabilidade.
            </p>
            <span className="frente-status">Em desenvolvimento</span>
          </article>
        </div>
      </section>

      {/* TECNOLOGIA */}
      <section className="tecnologia-projeto">
        <div className="tecnologia-conteudo">
          <span className="etiqueta">TECNOLOGIA COMO FERRAMENTA</span>

          <h2>Da experiência presencial para o ambiente digital.</h2>

          <p>
            A plataforma Raiz representa a continuidade da proposta
            de extensão no ambiente digital. A intenção é permitir
            que diferentes pessoas conheçam projetos, encontrem
            alternativas e tenham acesso a conteúdos relacionados
            à sustentabilidade.
          </p>

          <p>
            Também está sendo desenvolvida a proposta de um assistente
            virtual com inteligência artificial. A ferramenta pretende
            receber dúvidas e sugerir possibilidades de acordo com
            as necessidades apresentadas pelos usuários.
          </p>

          <p>
            Essa parte do projeto ainda está em desenvolvimento.
            Por isso, a plataforma representa uma etapa em construção,
            que será testada e aprimorada ao longo do trabalho.
          </p>
        </div>

        <div className="tecnologia-destaque">
          <span>✳</span>
          <h3>Conhecimento acessível e compartilhado.</h3>
          <p>
            A tecnologia é utilizada como um meio para aproximar
            informações e soluções sustentáveis da comunidade.
          </p>
        </div>
      </section>

      {/* OBJETIVO */}
      <section className="objetivo-projeto">
        <span className="etiqueta">O PROPÓSITO DO CULTIVANDO O FUTURO</span>

        <h2>
          Cultivar hoje as possibilidades de um futuro melhor.
        </h2>

        <p>
          Mais do que revitalizar um espaço ou desenvolver uma
          plataforma, o Cultivando o Futuro busca aproximar
          universidade e comunidade. O projeto mostra como o
          conhecimento acadêmico pode ser aplicado em situações
          reais, contribuindo para a sustentabilidade ambiental
          e incentivando a troca de experiências.
        </p>

        <p>
          Cada atividade realizada, cada melhoria no espaço e cada
          funcionalidade desenvolvida fazem parte de um mesmo
          propósito: transformar aprendizado em participação,
          conhecimento em ação e ideias em possibilidades.
        </p>
      </section>

    </main>
  );
}

export default Projetos;
