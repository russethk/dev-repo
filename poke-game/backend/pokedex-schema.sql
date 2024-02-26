CREATE TABLE users (
  username VARCHAR(25) PRIMARY KEY,
  password TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  is_admin BOOLEAN DEFAULT FALSE
);

CREATE TABLE pokemon (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  type TEXT NOT NULL,
  image_url TEXT NOT NULL,
  type_url TEXT NOT NULL,
  UNIQUE (name)
);

CREATE TABLE pokedex (
  username VARCHAR(25)
    REFERENCES users ON DELETE CASCADE,
  id INTEGER
    REFERENCES pokemon ON DELETE CASCADE,
  PRIMARY KEY (username, id)
);
