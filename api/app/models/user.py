from peewee import Model, CharField, IntegerField
from app.db import db

class User(Model):
    id = IntegerField(primary_key=True)
    name = CharField()
    email = CharField(unique=True)
    password = CharField()
    role = CharField(default="user")

    class Meta:
        database = db