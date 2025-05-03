from rest_framework import viewsets
from .models import Category, Product
from django.http import HttpResponse
from .serializers import CategorySerializer, ProductSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

def home(request):
    return HttpResponse("Welcome to KC Furn Store!")