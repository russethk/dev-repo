-- from the terminal run:
-- psql < outer_space.sql

DROP DATABASE IF EXISTS outer_space;

CREATE DATABASE outer_space;

\c outer_space



CREATE TABLE stars (
    star TEXT PRIMARY KEY,
    temp_in_kelvin INT NOT NULL
);

CREATE TABLE galaxies (
    galaxy TEXT PRIMARY KEY
);

CREATE TABLE planets (
    planet TEXT PRIMARY KEY,
    orbital_period_in_years FLOAT,
    star TEXT REFERENCES stars,
    galaxy TEXT REFERENCES galaxies
);

CREATE TABLE moons (
    moon TEXT PRIMARY KEY,
    planet TEXT REFERENCES planets
);



INSERT INTO stars (star, temp_in_kelvin)
VALUES
    ('The Sun', 5800),
    ('Proxima Centauri', 3042),
    ('Gliese 876', 3192);

INSERT INTO galaxies (galaxy)
VALUES
    ('Milky Way'),
    ('Andromeda'),
    ('Messier 81'),
    ('NGC 1300');

INSERT INTO planets (planet, orbital_period_in_years, star, galaxy)
VALUES
    ('Earth', 1.00, 'The Sun', 'Milky Way'),
    ('Mars', 1.88, 'The Sun', 'Milky Way'),
    ('Venus', 0.62, 'The Sun', 'Milky Way'),
    ('Neptune', 164.8, 'The Sun', 'Milky Way'),
    ('Mercury', 0.24, 'The Sun', 'Milky Way'),
    ('Proxima Centauri b', 11.2, 'Proxima Centauri', 'Milky Way'),
    ('Gliese 876 b', 61.1, 'Gliese 876', 'Milky Way');

INSERT INTO moons (moon, planet)
VALUES
    ('The Moon', 'Earth'),
    ('Phobos', 'Mars'),
    ('Deimos', 'Mars'),
    ('Naiad', 'Neptune'),
  	('Thalassa','Neptune'),
  	('Despina', 'Neptune'),
 	('Galatea', 'Neptune'),
 	('Larissa', 'Neptune'),
 	('S/2004 N 1', 'Neptune'),
 	('Proteus', 'Neptune'),
  	('Triton', 'Neptune'),
 	('Nereid', 'Neptune'),
 	('Halimede', 'Neptune'),
  	('Sao', 'Neptune'),
  	('Laomedeia', 'Neptune'),
  	('Psamathe', 'Neptune'),
  	('Neso', 'Neptune');

ALTER TABLE "planets" ADD FOREIGN KEY ("star") REFERENCES "stars" ("star");

ALTER TABLE "planets" ADD FOREIGN KEY ("galaxy") REFERENCES "galaxies" ("galaxy");

ALTER TABLE "moons" ADD FOREIGN KEY ("planet") REFERENCES "planets" ("planet");
