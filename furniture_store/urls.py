from django.contrib import admin
from django.urls import path, include
from django.shortcuts import redirect
from django.conf import settings
from django.conf.urls.static import static
from products.views import home

app_name = 'products'

urlpatterns = [ 
    path('', home, name='home'),
    path('admin/', admin.site.urls),
    path('products/', include('products.urls', namespace='products')),
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include('products.api_urls')),  # Add this line for API endpoints
]

# Add this code to serve media files during development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)