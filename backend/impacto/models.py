from django.db import models


class IndicadorImpacto(models.Model):
    nome = models.CharField(max_length=100)
    descricao = models.TextField()
    valor = models.DecimalField(max_digits=12, decimal_places=2, default=0)
    unidade = models.CharField(max_length=50)
    categoria = models.CharField(max_length=50)
    atualizado_em = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.nome