from django.urls import path, include, re_path
from .views import *

urlpatterns = [
    path('news/',NewsAPIListCreate.as_view()),
    path('news/<int:pk>',NewsAPIDetail.as_view()),
    path('auth/', include('djoser.urls')),
    re_path(r'^auth/', include('djoser.urls.authtoken')),
]