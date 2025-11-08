from peewee import Model, CharField, IntegerField, FloatField, ForeignKeyField
from app.db import db
from .user import User

class Product(Model):
    id = IntegerField(primary_key=True)
    title = CharField()
    description = CharField()
    category = CharField()
    image = CharField()
    price = FloatField()
    owner = ForeignKeyField(User, backref="products")

    rating_rate = FloatField(default=0)
    rating_count = IntegerField(default=0)

    @property
    def rating(self):
        return {
            "rate": float(self.rating_rate),
            "count": int(self.rating_count)
        }

    class Meta:
        database = db