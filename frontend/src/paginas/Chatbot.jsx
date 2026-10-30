
import { useState } from 'react';

function Chatbot() {
  const [mensagem, setMensagem] = useState('');

  const [conversa, setConversa] = useState([
    {
      tipo: 'bot',
      texto: 'Olá! 🌱 Sou o assistente Raiz. Me conte qual problema você gostaria de resolver e vou ajudar você a encontrar uma solução sustentável.',
    },
  ]);

  const [carregando, setCarregando] = useState(false);

  async function enviarMensagem(evento) {
    evento.preventDefault();

    if (!mensagem.trim() || carregando) {
      return;
    }

    const textoUsuario = mensagem.trim();

    setConversa((conversaAtual) => [
      ...conversaAtual,
      {
        tipo: 'usuario',
        texto: textoUsuario,
      },
    ]);

    setMensagem('');
    setCarregando(true);

    try {
      const resposta = await fetch(
        'http://127.0.0.1:8000/api/solucoes/chatbot/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            mensagem: textoUsuario,
          }),
        }
      );

      const dados = await resposta.json();

      if (!resposta.ok) {
        throw new Error(
          dados.erro || 'Não foi possível obter uma resposta.'
        );
      }

      setConversa((conversaAtual) => [
        ...conversaAtual,
        {
          tipo: 'bot',
          texto: dados.resposta,
        },
      ]);
    } catch (erro) {
      console.error('Erro ao enviar mensagem:', erro);

      setConversa((conversaAtual) => [
        ...conversaAtual,
        {
          tipo: 'bot',
          texto: 'Não consegui conectar ao servidor. Verifique se o Django está funcionando e tente novamente. 🌱',
        },
      ]);
    } finally {
      setCarregando(false);
    }
  }

  return (
    <main className="pagina-chatbot">
      <section className="cabecalho-chatbot">
        <span className="etiqueta">
          ASSISTENTE RAIZ
        </span>

        <h1>
          Vamos encontrar
          <br />
          <span>uma solução sustentável?</span>
        </h1>

        <p>
          Descreva seu problema e descubra alternativas
          sustentáveis que podem ajudar.
        </p>
      </section>

      <section className="chat-container">
        <div className="chat-cabecalho">
          <div className="chat-avatar">🌱</div>

          <div>
            <h2>Raiz</h2>
            <p>Assistente de soluções sustentáveis</p>
          </div>
        </div>

        <div className="chat-mensagens">
          {conversa.map((item, index) => (
            <div
              key={index}
              className={`mensagem ${item.tipo}`}
            >
              <div className="mensagem-texto">
                {item.texto}
              </div>
            </div>
          ))}

          {carregando && (
            <div className="mensagem bot">
              <div className="mensagem-texto">
                Buscando soluções sustentáveis...
              </div>
            </div>
          )}
        </div>

        <form
          className="chat-formulario"
          onSubmit={enviarMensagem}
        >
          <textarea
            value={mensagem}
            onChange={(evento) =>
              setMensagem(evento.target.value)
            }
            placeholder="Descreva o problema que você deseja resolver..."
            rows={2}
          />

          <button
            type="submit"
            disabled={!mensagem.trim() || carregando}
          >
            Enviar
            <span>➤</span>
          </button>
        </form>

        <p className="chat-aviso">
          O Raiz recomenda soluções com base nas informações
          cadastradas no sistema.
        </p>
      </section>
    </main>
  );
}

export default Chatbot;
