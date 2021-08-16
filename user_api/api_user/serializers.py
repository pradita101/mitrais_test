from django.db.models import fields
from rest_framework import serializers
from api_user.models import Users

class UsersSeriallizer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ["firstname", "lastname", "mobile","email", "gender","birthdate"]