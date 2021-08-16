from rest_framework import serializers
from user_api.models import Users

class UserSerializer(serializers.ModelSerializer):
    class Meta:

        model = Users
        fields = ['firstname', 'lastname', 'email', 'mobile', 'gender', 'datebirth']