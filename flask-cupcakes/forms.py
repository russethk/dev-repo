"""Forms for cupcakes."""

from wtforms import StringField, IntegerField
from flask_wtf import FlaskForm

from wtforms.validators import InputRequired, Length, URL


class AddNewCupcakeForm(FlaskForm):
    """Form for adding a new cupcake."""

    flavor = StringField("Flavor", validators=[InputRequired(), Length(max=50)])

    size = StringField("Size", validators=[InputRequired(), Length(max=15)])

    rating = IntegerField("Rating", validators=[InputRequired()])

    image = StringField(
        "Image URL",
        validators=[
            InputRequired(),
            URL(message="Please enter a valid URL"),
        ],
    )