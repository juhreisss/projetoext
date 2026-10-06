from django.db import models


class Projeto(models.Model):
    nome = models.CharField(max_length=100)
    descricao = models.TextField()
    problema = models.TextField()
    solucao = models.TextField()
    local = models.CharField(max_length=150)
    status = models.CharField(max_length=50)

    def __str__(self):
        return self.nome