from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic.base import TemplateView
from rest_framework.permissions import IsAuthenticated

# Create your views here.

class HomeView(TemplateView):
    template_name='web/index.html'

class PublicView(TemplateView):
    template_name='web/public.html'

class PrivateView(TemplateView):
    template_name='web/private.html'
    permission_classes = (IsAuthenticated,)

class PlayerView(TemplateView):
    permission_classes = (IsAuthenticated,)
    template_name='web/player.html'

class DMView(TemplateView):
    permission_classes = (IsAuthenticated,)
    template_name='web/dm.html'