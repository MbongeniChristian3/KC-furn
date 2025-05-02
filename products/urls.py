from django.urls import path
from rest_framework.routers import DefaultRouter
from . import views

app_name = 'products'  # Add this line

router = DefaultRouter()
router.register(r'products', views.ProductViewSet)
router.register(r'categories', views.CategoryViewSet)
# ... your other router registrations or urlpatterns

urlpatterns = router.urls
# ... any other urlpatterns you might have