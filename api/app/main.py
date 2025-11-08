from fastapi import FastAPI
from app.db import db
from app.models.user import User
from app.models.product import Product
from app.routers.user import router as users_router
from app.routers.product import router as products_router

app = FastAPI()

@app.on_event("startup")
def startup():
    db.connect()
    db.create_tables([User, Product])

@app.on_event("shutdown")
def shutdown():
    db.close()

app.include_router(products_router)
app.include_router(users_router)
