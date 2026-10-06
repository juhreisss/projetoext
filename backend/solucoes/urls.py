from django.urls import path
from .views import SolucaoViewSet


solucao_view = SolucaoViewSet.as_view({
    'get': 'list',
    'post': 'create'
})


urlpatterns = [
    path('', solucao_view),
]