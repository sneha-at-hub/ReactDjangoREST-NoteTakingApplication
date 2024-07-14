from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny
from .serializers import NoteSerializer
from .models import Note


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


# notes GET
# notes/create POST hence not restful approach
# notes/<id> GET we get object
# notes/<id> PUT updates
# notes/<id> DELETE


@api_view(['GET', 'POST', 'PUT', 'DELETE' ])
def getNotes(request,):
    if request.method == 'GET':
        note = Note.objects.all().order_by('-updated')
        serializer = NoteSerializer(note, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        data = request.data
        note = Note.objects.create(body=data['body'])
        serializer = NoteSerializer(note, many=False)
        return Response(serializer.data)
    
        
        
    
@api_view(['GET', 'PUT', "DELETE"])
def getNote(request, pk):
    if request.method == 'GET':    
        note = Note.objects.get(id=pk)
        serializer = NoteSerializer(note, many=False)  #because serialize only one objecgt
        return Response(serializer.data)

    if request.method == 'PUT':
        data = request.data
        note = Note.objects.get(id=pk)
        serializer=NoteSerializer(instance=note, data=data) #getting data from frontend
        if serializer.is_valid():
            serializer.save()
            
        return Response(serializer.data)
    
    if request.method == 'DELETE':
        try:
            note = Note.objects.get(id=pk)
            note.delete()
            return Response("Note was deleted!", status=status.HTTP_204_NO_CONTENT)
        except Note.DoesNotExist:
            return Response("Note not found", status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response(f"Failed to delete note. Error: {str(e)}", status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    




    
# @api_view(['POST'])
# @permission_classes([AllowAny])
# def createNote(request):
#     data = request.data
#     note = Note.objects.create(body=data['body'])
#     serializer = NoteSerializer(note, many=False)
#     return Response(serializer.data)


# @api_view(['PUT'])
# def updateNote(request, pk):
#     data = request.data
#     note = Note.objects.get(id=pk)
#     serializer=NoteSerializer(instance=note, data=data) #getting data from frontend
    
#     if serializer.is_valid():
#         serializer.save()
        
#     return Response(serializer.data)
    
# @api_view(['DELETE'])
# def deleteNote(request, pk):
#     try:
#         note = Note.objects.get(id=pk)
#         note.delete()
#         return Response("Note was deleted!", status=status.HTTP_204_NO_CONTENT)
#     except Note.DoesNotExist:
#         return Response("Note not found", status=status.HTTP_404_NOT_FOUND)
#     except Exception as e:
#         return Response(f"Failed to delete note. Error: {str(e)}", status=status.HTTP_500_INTERNAL_SERVER_ERROR)