from django.db import models

# Create your models here.
class Letter(models.Model):
    title = models.CharField(max_length=100, null=True, blank=True)
    body = models.TextField()
    author = models.CharField(max_length=50, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    x = models.FloatField()
    y = models.FloatField()
    template = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return self.title