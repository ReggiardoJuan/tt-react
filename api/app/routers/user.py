from fastapi import APIRouter, HTTPException
from app.models.user import User
from app.models.product import Product
from app.schemas.user import UserCreate, UserOut
from app.schemas.product import ProductOut

router = APIRouter(prefix="/users", tags=["user"])

@router.post("/register", response_model=UserOut)
def register(data: UserCreate):
    return User.create(
        name=data.name,
        email=data.email,
        password=data.password,
        role=data.role.value,
    )

@router.get("/list", response_model=list[UserOut])
def get_users():
    return list(User.select())
