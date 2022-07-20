from pyexpat import model
from django.db import models
from django.contrib.auth.models import User

class News(models.Model):
    title = models.TextField()
    body = models.TextField()
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.title)

class Comments(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    news = models.ForeignKey(News,on_delete=models.CASCADE)
    comment = models.TextField()
    def __str__(self):
        return str(self.user)