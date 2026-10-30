from rest_framework import viewsets
from .models import IndicadorImpacto
from .serializers import IndicadorImpactoSerializer


class IndicadorImpactoViewSet(viewsets.ModelViewSet):
    queryset = IndicadorImpacto.objects.all()
    serializer_class = IndicadorImpactoSerializer