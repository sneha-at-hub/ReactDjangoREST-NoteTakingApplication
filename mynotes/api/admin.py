from django.contrib import admin
from api.models import Note

# Register your models here.

class apiAdmin(admin.ModelAdmin):
    list_display = ('body', 'updated', 'created')
    
admin.site.register(Note, apiAdmin)