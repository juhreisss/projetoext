from django.urls import path
from .views import ProjetoViewSet

projeto_view = ProjetoViewSet.as_view({
    'get': 'list',
    'post': 'create'
})

urlpatterns = [
    path('', projeto_view),
]