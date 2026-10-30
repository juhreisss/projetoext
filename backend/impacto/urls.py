from django.urls import path
from .views import IndicadorImpactoViewSet


indicador_view = IndicadorImpactoViewSet.as_view({
    'get': 'list',
    'post': 'create',
})

urlpatterns = [
    path('', indicador_view),
]