from django.contrib import admin
from django.urls import include, path


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/projetos/', include('projetos.urls')),
    path('api/solucoes/', include('solucoes.urls')),
    path('api/impacto/', include('impacto.urls')),
]