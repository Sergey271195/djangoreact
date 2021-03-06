from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('', include('frontend.urls')),
    path('base/', include('frontend.urls')),
    path('admin/', admin.site.urls),
    path('api/', include('frontend.api.urls'))
]
