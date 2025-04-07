from django.contrib import admin
from django.urls import path, include
from django.shortcuts import redirect

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', lambda request: redirect('products:index')),  # this redirects to views.index
    path('products/', include('products.urls', namespace='products')),
]
