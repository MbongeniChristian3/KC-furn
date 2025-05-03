from django.contrib import admin
from django.urls import path, include
from django.shortcuts import redirect
from products.views import home 


app_name = 'products'

urlpatterns = [ 
    path('', home, name='home'),
    path('admin/', admin.site.urls),
    path('products/', include('products.urls', namespace='products')),
    path('api-auth/', include('rest_framework.urls')),
]