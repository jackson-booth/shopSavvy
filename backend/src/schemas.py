from pydantic import BaseModel
from typing import List


class CreateProductRequest(BaseModel):
    title: str
    description: str
    price: int
    discountPercentage: float
    rating: float
    stock: int
    brand: str
    category: str
    thumbnail: str
    images: List[str]
