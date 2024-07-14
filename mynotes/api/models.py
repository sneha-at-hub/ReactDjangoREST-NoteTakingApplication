from django.db import models

# Create your models here.
class Note(models.Model):
    body = models.TextField(null=True, blank=True) #doesnt allows empy value
    updated = models.DateTimeField(auto_now=True) #when we updated in the database autonow
    created = models.DateField(auto_now_add=True) #original adition
    
    
    #String value 
    def __str__(self):
        return self.body[0:50]
    