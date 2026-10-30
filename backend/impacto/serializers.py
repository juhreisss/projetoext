from rest_framework import serializers
from .models import IndicadorImpacto


class IndicadorImpactoSerializer(serializers.ModelSerializer):
    class Meta:
        model = IndicadorImpacto
        fields = '__all__'