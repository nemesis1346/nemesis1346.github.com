from rest_framework import serializers
from blog.models import Post
class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Port
        fields = '__all__'