from rest_framework import serializers
from .models import Solucao


class SolucaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Solucao
        fields = '__all__'