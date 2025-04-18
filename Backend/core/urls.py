from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import LetterViewSet

router = DefaultRouter()
router.register(r'letters', LetterViewSet)

urlpatterns = [
    path('', include(router.urls)),
]