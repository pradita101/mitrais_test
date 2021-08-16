from django.db import models

# Create your models here.

class Users(models.Model):
    lastname = models.CharField(max_length=30)
    firstname = models.CharField(max_length=30)
    mobile = models.CharField(max_length=15)
    email = models.CharField(max_length=120)
    gender = models.BooleanField()
    birthdate = models.DateField()

    def __str__(self) -> str:
        return self.email
