from asgiref.sync import async_to_sync
from channels.layers import get_channel_layer
from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Letter
from .serializers import LetterSerializer


class LetterViewSet(viewsets.ModelViewSet):
    queryset = Letter.objects.all().order_by('-created_at')
    serializer_class = LetterSerializer

@api_view(['GET'])
def get_letters(request):
    letters = Letter.objects.all().order_by('-created_at')
    serializer = LetterSerializer(letters, many=True)
    return Response(serializer.data)