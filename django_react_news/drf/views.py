
from rest_framework import generics
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response

from .models import News ,Comments
from .serializers import NewsSerializers,CommentsSerializers
from .permissions import *

class APIPadination(PageNumberPagination):
    page_size = 15
    page_size_query_param = 'page_size'
    max_page_size = 10000

# news
class NewsAPIListCreate(generics.ListCreateAPIView):
    queryset = News.objects.all().order_by('-id')
    serializer_class = NewsSerializers
    permission_classes = (IsAuthenticatedOrReadOnly,)
    pagination_class = APIPadination


class NewsAPIDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializers
    permission_classes = (IsOwnerOrReadOnly,)

# comment 
class CommentsAPIListCreate(generics.ListCreateAPIView):
    # queryset = Comments.objects.all(news=pk)
    serializer_class = CommentsSerializers
    permissions_classes=(IsAuthenticatedOrReadOnly,)
    pagination_class = APIPadination

    def perform_create(self, serializer):
        news = self.request.parser_context['kwargs']['pk']
        return serializer.save(user=self.request.user,news_id=news)

    def get_queryset(self):
        pk = self.request.parser_context['kwargs']['pk']
        return Comments.objects.filter(news=pk)

# class CommentsAPIDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Comments.objects.all()
#     serializer_class = NewsSerializers
#     permission_classes = (IsOwnerOrReadOnly,)