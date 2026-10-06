from django.db import models


class Solucao(models.Model):
    nome = models.CharField(max_length=100)
    categoria = models.CharField(max_length=100)
    descricao = models.TextField()
    problema_resolvido = models.TextField()
    custo = models.CharField(max_length=50)
    dificuldade = models.CharField(max_length=50)
    impacto = models.CharField(max_length=50)

    def __str__(self):
        return self.nome