from django.contrib import admin
from django.urls import path, include
from django.shortcuts import redirect

def redirect_to_index(request):
    return redirect('products:index')  # Ensure 'index' is a valid URL name in 'products.urls'

urlpatterns = [
    path('admin/', admin.site.urls),
    path('products/', include('products.urls')),
    path('', redirect_to_index),
]
