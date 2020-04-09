from rest_framework import serializers
from frontend.models import Task


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ('title', 'content', 'completed', 'assignment_date')
