# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from datetime import datetime    

from django.db import models

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(default = "None")
    pub_date = models.DateTimeField(default=datetime.now, blank=True)
    
    