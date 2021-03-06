# Generated by Django 3.0.5 on 2020-04-08 19:57

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('frontend', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='task',
            name='assignment_date',
            field=models.DateTimeField(auto_now_add=True, default=datetime.datetime(2020, 4, 8, 19, 56, 59, 406776)),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='task',
            name='completed',
            field=models.BooleanField(default=False),
            preserve_default=False,
        ),
    ]
