
import json

from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator

from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Solucao
from .serializers import SolucaoSerializer

from configuracao.chatbot import responder_chatbot


class SolucaoViewSet(viewsets.ModelViewSet):
    queryset = Solucao.objects.all()
    serializer_class = SolucaoSerializer


@api_view(["POST"])
def chatbot_view(request):
    mensagem = request.data.get("mensagem", "").strip()

    if not mensagem:
        return Response(
            {"erro": "Digite uma mensagem para o chatbot."},
            status=status.HTTP_400_BAD_REQUEST
        )

    solucoes = Solucao.objects.all()

    resposta = responder_chatbot(
        mensagem,
        solucoes
    )

    return Response({
        "resposta": resposta
    })
