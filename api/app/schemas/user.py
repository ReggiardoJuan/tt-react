from pydantic import BaseModel
from enum import Enum

class UserRole(str, Enum):
    user = "user"
    admin = "admin"

class UserIn(BaseModel):
    name: str
    email: str
    role: UserRole = UserRole.user

class UserCreate(UserIn):
    password: str

class UserOut(UserIn):
    id: int
    class Config:
        orm_mode = True