from rest_framework import viewsets
from .models import Solucao
from .serializers import SolucaoSerializer


class SolucaoViewSet(viewsets.ModelViewSet):
    queryset = Solucao.objects.all()
    serializer_class = SolucaoSerializer