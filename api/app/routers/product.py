from fastapi import APIRouter, HTTPException, Depends
from app.models.product import Product
from app.models.user import User
from app.schemas.product import ProductCreate, ProductOut

router = APIRouter(prefix="/products", tags=["products"])

@router.get("/", response_model=list[ProductOut])
def list_products(
    category: str = None,
    owner_id: int = None,
):
    query = Product.select()
    if category:
        query = query.where(Product.category == category)
    if owner_id:
        query = query.where(Product.owner == owner_id)
    return list(query)

@router.get("/{id}", response_model=ProductOut)
def get_product_details(id: int):
    product = Product.get_or_none(Product.id == id)
    if not product:
        raise HTTPException(404, "Producto no encontrado")
    return {
        "id": product.id,
        "title": product.title,
        "description": product.description,
        "price": product.price,
        "category": product.category,
        "image": product.image,
        "owner_id": product.owner_id,
        "stock": product.stock,
        "rating": {
            "rate": product.rating_rate,
            "count": product.rating_count
        }
    }

@router.post("/", response_model=ProductOut)
def create_product(data: ProductCreate):
    current_user = User.get_or_none(User.id == data.owner_id)
    if current_user.role != "admin":
        raise HTTPException(403, "Solo los administradores pueden crear productos")

    product = Product.create(
        title=data.title,
        description=data.description,
        price=data.price,
        category=data.category,
        image=data.image,
        owner_id=current_user,
        stock=data.stock,
        rating_rate=data.rating.rate,
        rating_count=data.rating.count
    )
    return product

@router.delete("/{id}", response_model=ProductOut)
def delete_product(id: int):
    product = Product.get_or_none(Product.id == id)
    if not product:
        raise HTTPException(404, "Producto no encontrado")

    product.delete_instance()
    return {
        "id": product.id,
        "title": product.title,
        "description": product.description,
        "price": product.price,
        "category": product.category,
        "image": product.image,
        "owner_id": product.owner_id,
        "stock": product.stock,
        "rating": {
            "rate": product.rating_rate,
            "count": product.rating_count
        }
    }