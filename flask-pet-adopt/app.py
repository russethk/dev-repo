from flask import Flask, url_for, render_template, redirect, jsonify
from flask_debugtoolbar import DebugToolbarExtension


from models import db, connect_db, Pet
from forms import AddPetForm, EditPetForm


app = Flask(__name__)

app.config["SECRET_KEY"] = "oh-so-secret"
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql:///petadopt_db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

connect_db(app)


app.config["DEBUG_TB_INTERCEPT_REDIRECTS"] = False
toolbar = DebugToolbarExtension(app)


@app.route("/")
def list_pets():
    """Show all pets."""

    pets = Pet.query.all()
    return render_template("pet_list.html", pets=pets)


@app.route("/add", methods=["GET", "POST"])
def add_pet():
    """Add a pet."""

    form = AddPetForm()

    if form.validate_on_submit():
        data = {k: v for k, v in form.data.items() if k != "csrf_token"}
        new_pet = Pet(**data)
        # new_pet = Pet(name=form.name.data, species=form.species.data, photo_url=form.photo_url.data, age=form.age.data, notes=form.notes.data, available=form.available.data)
        db.session.add(new_pet)
        db.session.commit()
        return redirect(url_for('list_pets'))

    else:
        return render_template("pet_add.html", form=form)
    
    
@app.route("/<int:pet_id>", methods=["GET", "POST"])
def edit_pet(pet_id):
    """Edit pet."""

    pet = Pet.query.get_or_404(pet_id)
    form = EditPetForm(obj=pet)

    if form.validate_on_submit():
        pet.notes = form.notes.data
        pet.available = form.available.data
        pet.photo_url = form.photo_url.data
        db.session.commit()
        return redirect(url_for('list_pets'))

    else:
        # failed; re-present form for editing
        return render_template("pet_edit.html", form=form, pet=pet)
    
    
@app.route("/api/pets/<int:pet_id>", methods=["GET"])
def get_pet(pet_id):
    """Get pet by id"""

    pet = Pet.query.get_or_404(pet_id)
    return jsonify(pet=pet.serialize())
