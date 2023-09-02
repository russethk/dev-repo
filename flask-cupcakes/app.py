from flask import Flask, jsonify, redirect, render_template, flash, request
from flask_debugtoolbar import DebugToolbarExtension

from models import db, connect_db, Cupcake

from forms import AddNewCupcakeForm


app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql:///cupcakes"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SQLALCHEMY_ECHO"] = True

connect_db(app)

app.config["SECRET_KEY"] = "I'LL NEVER TELL!!"

# Having the Debug Toolbar show redirects explicitly is often useful;
# however, if you want to turn it off, you can uncomment this line:
#
# app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

debug = DebugToolbarExtension(app)

"""Flask app for Cupcakes"""


@app.get("/")
def show_homepage():
    """Show the homepage."""

    form = AddNewCupcakeForm()

    return render_template("home.html", form=form)


@app.get("/api/cupcakes")
def show_all_cupcakes():
    """Return data about all the cupcakes.

    Returns JSON {'cupcakes': [{id, flavor, size, rating, image}, ...]}
    """

    cupcakes = Cupcake.query.all()
    serialized = [c.serialize() for c in cupcakes]

    return jsonify(cupcakes=serialized)


@app.get("/api/cupcakes/<int:cupcake_id>")
def show_one_cupcake(cupcake_id):
    """Return data about a single cupcake.

    Returns JSON Return JSON {'cupcake': {id, flavor, size, rating, image}}
    """

    cupcake = Cupcake.query.get_or_404(cupcake_id)

    return jsonify(cupcake=cupcake.serialize())


# add validation to cupcakes in WTForms
# until then, be explicit about precise keys to extract from data


@app.post("/api/cupcakes")
def create_one_cupcake():
    """Adds a new cupcake to the database, and returns data about a single cupcake.

    Returns JSON {'cupcake': {id, flavor, size, rating, image_url}}
    """

    flavor = request.json["flavor"]
    size = request.json["size"]
    rating = request.json["rating"]
    image = request.json["image"]

    new_cupcake = Cupcake(flavor=flavor, size=size, rating=rating, image=image)

    # data = {k: v or None for k, v in request.json.items()}
    # new_cupcake = Cupcake(**data)

    db.session.add(new_cupcake)
    db.session.commit()

    serialized = new_cupcake.serialize()

    return (jsonify(cupcake=serialized), 201)


@app.patch("/api/cupcakes/<int:cupcake_id>")
def edit_cupcake(cupcake_id):
    """Updates the cupcake with the given id

    Returns JSON {'cupcake': {id, flavor, size, rating, image_url}}
    """

    cupcake = Cupcake.query.get_or_404(cupcake_id)

    cupcake.flavor = request.json.get("flavor", cupcake.flavor)
    cupcake.size = request.json.get("size", cupcake.size)
    cupcake.rating = request.json.get("rating", cupcake.rating)
    cupcake.image = request.json.get("image") or cupcake.image

    db.session.add(cupcake)
    db.session.commit()

    return jsonify(cupcake=cupcake.serialize())


@app.delete("/api/cupcakes/<int:cupcake_id>")
def delete_cupcake(cupcake_id):
    """Deletes the cupcake with the given id

    Returns JSON {deleted: [cupcake-id]}
    """

    cupcake = Cupcake.query.get_or_404(cupcake_id)

    db.session.delete(cupcake)
    db.session.commit()

    return jsonify({"deleted": cupcake_id})