
import imagemHorta from '../assets/horta.png';
import imagemPlataforma from '../assets/plataforma.jpeg';

function Projetos() {
  return (
    <main className="pagina-projetos">

      {/* APRESENTAÇÃO */}
      <section className="cabecalho-projetos">
        <span className="etiqueta">
          PROJETO DE EXTENSÃO
        </span>

        <h1>
          Cultivando o Futuro
          <br />
          <span>Sustentabilidade que transforma.</span>
        </h1>

        <p>
          Uma iniciativa que une sustentabilidade, tecnologia
          e responsabilidade socioambiental para construir
          novas possibilidades para o futuro.
        </p>
      </section>

      {/* SOBRE O PROJETO */}
      <section className="conteudo-projetos">

        <div className="texto-projeto">
          <span className="etiqueta">SOBRE A INICIATIVA</span>

          <h2>
            Um projeto, duas frentes de transformação.
          </h2>

          <p>
            O Cultivando o Futuro é um projeto de extensão
            desenvolvido com o propósito de promover a
            sustentabilidade ambiental por meio de ações
            práticas e do uso da tecnologia como ferramenta
            de disseminação do conhecimento.
          </p>

          <p>
            A iniciativa é realizada em parceria com a
            Sociedade Pró-Menor e busca contribuir para a
            melhoria do ambiente da instituição, além de
            ampliar o acesso da comunidade a informações
            sobre práticas sustentáveis.
          </p>

          <h2>Transformação do espaço físico</h2>

          <p>
            Na instituição, o projeto contempla a revitalização
            de uma área verde, com preparação do solo, plantio
            de temperos e ervas, manejo da vegetação e
            recuperação de elementos existentes. Também foi
            instalado um sistema de irrigação por gotejamento,
            facilitando os cuidados com a horta e favorecendo
            o uso racional da água.
          </p>

          <h2>Tecnologia a serviço da sustentabilidade</h2>

          <p>
            A segunda frente consiste no desenvolvimento de
            uma plataforma digital de acesso público, criada
            para reunir projetos sustentáveis, apresentar seus
            impactos ambientais e sociais e divulgar soluções
            que possam ser aplicadas em diferentes realidades.
          </p>

          <p>
            A plataforma também conta com a proposta de um
            chatbot com inteligência artificial, que busca
            responder dúvidas dos usuários e sugerir alternativas
            relacionadas à sustentabilidade, tornando o acesso
            à informação mais simples e acessível.
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
              Plataforma digital Cultivando o Futuro
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

      {/* OBJETIVO */}
      <section className="objetivo-projeto">
        <span className="etiqueta">NOSSO OBJETIVO</span>

        <h2>
          Cultivar hoje as possibilidades de um futuro melhor.
        </h2>

        <p>
          Mais do que realizar melhorias em um espaço físico
          ou desenvolver uma ferramenta digital, o Cultivando
          o Futuro busca integrar conhecimento, inovação e
          responsabilidade ambiental. Acreditamos que a
          transformação começa com iniciativas que aproximam
          as pessoas da sustentabilidade e incentivam mudanças
          positivas na sociedade.
        </p>
      </section>

    </main>
  );
}

export default Projetos;
