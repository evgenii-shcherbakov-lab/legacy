from django.db import models

class Project(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    # tech = [models.CharField(max_length=20)]
    deploy = models.URLField()
    repo = models.URLField()

    def __str__(self):
        return self.name
