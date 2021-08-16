from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from user_api.models import Users
from .serializers import UserSerializer


class UserListApiView(APIView):

    # permission_classes = [permissions.IsAuthenticated]

    def get(self, request, *args, **kwargs):
        users = Users.objects.all
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, *args, **kwargs):

        data = {
            'lastname':request.data.get('lastname'),
            'firstname':request.data.get('firstname'),
            'mobile':request.data.get('mobile'),
            'email':request.data.get('email'),
            'gender':request.data.get('gender'),
            'datebirth':request.data.get('datebirth')
        }

        serializer = UserSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)