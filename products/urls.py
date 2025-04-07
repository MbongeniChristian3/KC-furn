from django.urls import path
from . import views  # import the views module

app_name = 'products'

urlpatterns = [
    path('', views.index, name='index'),  # main index view
    path('list/', views.product_list, name='product_list'),
    path('<int:pk>/', views.product_detail, name='product_detail'),
    path('create/', views.product_create, name='product_create'),
    path('<int:pk>/edit/', views.product_update, name='product_update'),
    path('<int:pk>/delete/', views.product_delete, name='product_delete'),
]

