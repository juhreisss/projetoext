
from django.urls import path

from .views import SolucaoViewSet, chatbot_view


solucao_view = SolucaoViewSet.as_view({
    'get': 'list',
    'post': 'create'
})


urlpatterns = [
    path('', solucao_view, name='solucoes'),
    path('chatbot/', chatbot_view, name='chatbot'),
]
