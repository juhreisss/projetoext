
import { useEffect, useState } from 'react';

function Solucoes() {
  const [solucoes, setSolucoes] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todas');
  const [pesquisa, setPesquisa] = useState('');
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/solucoes/')
      .then((resposta) => {
        if (!resposta.ok) {
          throw new Error('Não foi possível carregar as soluções.');
        }

        return resposta.json();
      })
      .then((dados) => {
        setSolucoes(dados);
      })
      .catch(() => {
        setErro('Não foi possível carregar as soluções. Verifique se o backend está funcionando.');
      })
      .finally(() => {
        setCarregando(false);
      });
  }, []);

  const categorias = [
    'Todas',
    'Água',
    'Energia',
    'Alimentação',
    'Resíduos',
  ];

  const solucoesFiltradas = solucoes.filter((solucao) => {
    const correspondeCategoria =
      categoriaSelecionada === 'Todas' ||
      solucao.categoria.toLowerCase() === categoriaSelecionada.toLowerCase();

    const correspondePesquisa =
      solucao.nome.toLowerCase().includes(pesquisa.toLowerCase()) ||
      solucao.descricao.toLowerCase().includes(pesquisa.toLowerCase());

    return correspondeCategoria && correspondePesquisa;
  });

  return (
    <main className="pagina-solucoes">
      <section className="cabecalho-solucoes">
        <span className="etiqueta">SOLUÇÕES SUSTENTÁVEIS</span>

        <h1>
          Ideias que transformam
          <br />
          <span>o futuro começa aqui.</span>
        </h1>

        <p>
          Explore soluções sustentáveis e acessíveis para transformar
          desafios em oportunidades.
        </p>
      </section>

      <section className="conteudo-solucoes">
        <div className="filtros-solucoes">
          <input
            type="text"
            placeholder="Buscar solução..."
            value={pesquisa}
            onChange={(e) => setPesquisa(e.target.value)}
          />

          <select
            value={categoriaSelecionada}
            onChange={(e) => setCategoriaSelecionada(e.target.value)}
          >
            {categorias.map((categoria) => (
              <option key={categoria} value={categoria}>
                {categoria}
              </option>
            ))}
          </select>
        </div>

        {carregando && <p>Carregando soluções...</p>}

        {erro && <p>{erro}</p>}

        {!carregando && !erro && (
          <div className="lista-solucoes">
            {solucoesFiltradas.length > 0 ? (
              solucoesFiltradas.map((solucao) => (
                <article className="cartao-solucao" key={solucao.id}>
                  <span className="tag">{solucao.categoria}</span>

                  <h2>{solucao.nome}</h2>

                  <p>{solucao.descricao}</p>

                  <div className="detalhes-solucao">
                    <p>
                      <strong>Problema:</strong>
                      {' '}
                      {solucao.problema_resolvido}
                    </p>

                    <p>
                      <strong>Custo:</strong>
                      {' '}
                      {solucao.custo}
                    </p>

                    <p>
                      <strong>Dificuldade:</strong>
                      {' '}
                      {solucao.dificuldade}
                    </p>

                    <p>
                      <strong>Impacto:</strong>
                      {' '}
                      {solucao.impacto}
                    </p>
                  </div>
                </article>
              ))
            ) : (
              <p>Nenhuma solução encontrada.</p>
            )}
          </div>
        )}
      </section>
    </main>
  );
}

export default Solucoes;
