# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from .serializer import PostSerializer
from rest_framework import viewsets
from .models import Post

# Create your views here.
class PostView(viewsets.ModelViewSet):
    serializer_class=PostSerializer
    queryset = Post.objects.all()