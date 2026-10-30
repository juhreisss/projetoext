
import re
import unicodedata


def normalizar_texto(texto):
    texto = texto.lower()

    texto = unicodedata.normalize("NFD", texto)

    texto = "".join(
        caractere
        for caractere in texto
        if unicodedata.category(caractere) != "Mn"
    )

    texto = re.sub(r"[^a-z0-9\s]", " ", texto)

    return texto


def responder_chatbot(mensagem, solucoes):

    mensagem = normalizar_texto(mensagem)

    palavras = set(mensagem.split())

    palavras_agua = {
        "agua",
        "irrigacao",
        "irrigar",
        "regar",
        "regando",
        "planta",
        "plantas",
        "solo",
        "umidade",
        "economizar",
        "economia",
        "desperdicio",
        "desperdicar",
        "horta",
        "cultivo",
        "cultivar",
        "seca",
        "seco",
        "sensor",
        "automatico",
        "automatizado",
    }

    resultados = []

    for solucao in solucoes:

        texto_solucao = normalizar_texto(
            f"{solucao.nome} "
            f"{solucao.categoria} "
            f"{solucao.descricao} "
            f"{solucao.problema_resolvido}"
        )

        palavras_solucao = set(texto_solucao.split())

        coincidencias = palavras.intersection(palavras_solucao)

        pontuacao = len(coincidencias)

        if palavras.intersection(palavras_agua):
            if normalizar_texto(solucao.categoria) == "agua":
                pontuacao += 3

        if pontuacao > 0:

            resultados.append({
                "solucao": solucao,
                "pontuacao": pontuacao
            })

    resultados.sort(
        key=lambda resultado: resultado["pontuacao"],
        reverse=True
    )

    if not resultados:

        return (
            "Ainda não encontrei uma solução cadastrada "
            "para esse problema. 🌱 "
            "Tente perguntar sobre água, irrigação, "
            "plantas ou economia de recursos."
        )

    resposta = (
        "Encontrei uma solução sustentável que pode ajudar! 🌱"
    )

    for resultado in resultados[:3]:

        solucao = resultado["solucao"]

        resposta += (
            f"\n\n🌿 {solucao.nome}"
            f"\nCategoria: {solucao.categoria}"
            f"\nDescrição: {solucao.descricao}"
            f"\nProblema resolvido: {solucao.problema_resolvido}"
            f"\nCusto: {solucao.custo}"
            f"\nDificuldade: {solucao.dificuldade}"
            f"\nImpacto: {solucao.impacto}"
        )

    return resposta
