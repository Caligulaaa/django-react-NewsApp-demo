from dataclasses import field
from pyexpat import model
from rest_framework import serializers
from .models import Comments, News

class NewsSerializers(serializers.ModelSerializer):
    # user = serializers.HiddenField(default=serializers.CurrentUserDefault())
    class Meta:
        model = News
        fields = '__all__'

class CommentsSerializers(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(
        read_only=True, 
        default=serializers.CurrentUserDefault()
    )
    news = serializers.PrimaryKeyRelatedField(
        read_only=True, 
        default=serializers.CurrentUserDefault()
    )
    class Meta:
        model = Comments
        fields = '__all__'