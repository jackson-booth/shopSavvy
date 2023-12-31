from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from .schemas import CreateProductRequest
from .database import get_db
from .models import Product
from .seed import seed
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
import os


@asynccontextmanager
async def lifespan(app: FastAPI, db: Session = get_db()):
    # startup
    if os.getenv("MODE", "develop") == "develop":
        seed(db)

    yield
    # shutdown
    pass


app = FastAPI(lifespan=lifespan)

origins = [
    "http://localhost:5173",
    "https://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/create-product")
def create(details: CreateProductRequest, db: Session = Depends(get_db)):
    to_create = Product(
        title=details.title,
        description=details.description,
        price=details.price,
        discountPercentage=details.discountPercentage,
        rating=details.rating,
        stock=details.stock,
        brand=details.brand,
        category=details.category,
        thumbnail=details.thumbnail,
        images=details.images,
    )
    db.add(to_create)
    db.commit()
    return {"success": True, "created_id": to_create.id}


@app.get("/products/{id}")
def get_by_id(id: int, db: Session = Depends(get_db)):
    return db.query(Product).filter(Product.id == id).first()


@app.get("/products")
def get_all(limit=None, category=None, db: Session = Depends(get_db)):
    print("Yo")
    query = db.query(Product)
    if category:
        query = query.filter_by(category=category)

    return query.limit(limit).all()


@app.delete("/delete-product/{id}")
def delete(id: int, db: Session = Depends(get_db)):
    db.query(Product).filter(Product.id == id).delete()
    db.commit()
    return {"success": True}
