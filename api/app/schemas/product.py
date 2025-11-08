from pydantic import BaseModel

class Rating(BaseModel):
    rate: float
    count: int

class ProductIn(BaseModel):
    title: str
    description: str
    category: str
    image: str
    price: float

class ProductCreate(ProductIn):
    owner_id: int
    rating: Rating

class ProductOut(ProductIn):
    id: int
    owner_id: int
    rating: Rating

    class Config:
        orm_mode = True
