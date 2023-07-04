""" Contains logic for seeding the database with test values. Used when on develop mode. """


import json
from .models import Product


def seed(db):
    db = next(db)
    f = open("seed.json")
    data = json.load(f)
    for i in data["products"]:
        hasProduct = True if db.query(Product).filter(Product.id == id) else False

        if not hasProduct:
            to_create = Product(
                title=i["title"],
                description=i["description"],
                price=i["price"],
                discountPercentage=i["discountPercentage"],
                rating=i["rating"],
                stock=i["stock"],
                brand=i["brand"],
                category=i["category"],
                thumbnail=i["thumbnail"],
                images=i["images"],
            )
            db.add(to_create)
            db.commit()

    # Closing file
    f.close()
