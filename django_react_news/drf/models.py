from django.db import models
from django.contrib.auth.models import User

class News(models.Model):
    title = models.TextField()
    body = models.TextField()
    user = models.ForeignKey(User,on_delete=models.CASCADE)

    def __str__(self):
        return self.title