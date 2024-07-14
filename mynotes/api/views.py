from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Note
from .serializers import NoteSerializer

# Create your views here.
@api_view(['GET'])
def getRoutes(request):
    routes = [
        {
            'Endpoint': '/notes',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of notes'
        },
        {
            'Endpoint': '/notes/<id>',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single note object'
        },
        {
            'Endpoint': '/notes/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new notes with data sent in POST request'
        },
        {
            'Endpoint': '/notes/update/<id>/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Updates an existing note with data sent in PUT request'
        }
    ]
    return Response(routes)

@api_view(['GET'])
def getNotes(request):
    note = Note.objects.all()
    serializer = NoteSerializer(note, many=True)
    return Response(serializer.data)
    
@api_view(['GET'])
def getNote(request, pk):
    note = Note.objects.get(id=pk)
    serializer = NoteSerializer(note, many=False)  #because serialize only one objecgt
    return Response(serializer.data)
    