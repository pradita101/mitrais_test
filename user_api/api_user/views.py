from copy import error
from rest_framework import serializers
from rest_framework.serializers import Serializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from api_user.models import Users
from .serializers import UsersSeriallizer

# Create your views here.

class UsersListApiView (APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, *args, **kwargs):
        users = Users.objects.filter(user = request.user.id)
        serializer = UsersSeriallizer(users, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, *args, **kwargs):

        data = {
            'firstname': request.data.get('firstname'),
            'lastname': request.data.get('lastname'),
            'mobile' : request.data.get('mobile'),
            'email': request.data.get('email'),
            'gender': request.data.get('gender'),
            'datebirth': request.data.get('datebirth')
        }

        serializer = UsersSeriallizer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
            
        return Response(serializer.error, status=status.status.HTTP_400_BAD_REQUEST)