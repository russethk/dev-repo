"""Create a model for Pet database."""

from flask_sqlalchemy import SQLAlchemy

DEFAULT_IMG = "https://mylostpetalert.com/wp-content/themes/mlpa-child/images/nophoto.gif"

db = SQLAlchemy()


class Pet(db.Model):
    """Pets Model."""

    __tablename__ = "pets"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.Text, nullable=False)
    species = db.Column(db.Text, nullable=False)
    photo_url = db.Column(db.Text, nullable=True)
    age = db.Column(db.Integer, nullable=True)
    notes = db.Column(db.Text, nullable=True)
    available = db.Column(db.Boolean, nullable=False, default=True)
    
    def image_url(self):
        """Return photo_url or placeholder if none."""

        return self.photo_url or DEFAULT_IMG
    
def connect_db(app):
    """Connect to database."""

    db.app = app
    db.init_app(app)


    



