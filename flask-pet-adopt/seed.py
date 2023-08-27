from app import db
from models import Pet

db.create_all()

pet = Pet(name="Fido", species="dog", age=4)
db.session.add(pet)
db.session.commit()
