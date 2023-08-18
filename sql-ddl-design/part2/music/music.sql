-- from the terminal run:
-- psql < music.sql

DROP DATABASE IF EXISTS music;

CREATE DATABASE music;

\c music

CREATE TABLE songs (
  id int primary key,
  song_title varchar(64) NOT NULL,
  release_date date,
  duration_in_seconds integer,
  album TEXT NOT NULL
);

CREATE TABLE artists (
  id int primary key,
  artist_name varchar(64)
);

CREATE TABLE producers (
  id int primary key,
  producer varchar(64)
);

CREATE TABLE songs_artists (
  song_id int references songs(id),
  artist_id int references artists(id),
  PRIMARY KEY (song_id, artist_id)
);

CREATE TABLE songs_producers (
  song_id int references songs(id),
  producer_id int references producers(id),
  PRIMARY KEY (song_id, producer_id)
);

INSERT INTO songs
VALUES
  (1, 'MMMBop', '1997-04-15', 239, 'Middle of Nowhere'),
  (2, 'Bohemian Rhapsody', '1975-10-31', 354, 'A Night at the Opera'),
  (3, 'All I Want for Christmas Is You', '1994-11-01', 241, 'Merry Christmas'),
  (4, 'Shallow', '2018-09-27', 215, 'A Star Is Born'),
  (5, 'How You Remind Me', '2001-08-21', 223, 'Silver Side Up'),
  (6, 'Empire State of Mind', '2009-09-08', 284, 'The Blueprint 3'),
  (7, 'No One', '2007-09-11', 254, 'As I Am'),
  (8, 'Firework', '2010-08-24', 227, 'Teenage Dream'),
  (9, 'Dark Horse', '2013-12-17', 215, 'Prism'),
  (10, 'Say Something', '2013-09-03', 223, 'Is There Anybody Out There?'),
  (11, 'Moves Like Jagger', '2011-06-21', 201, 'Hands All Over'),
  (12, 'Genie in a Bottle', '1999-06-22', 216, 'Christina Aguilera'),
  (13, 'Complicated', '2002-06-03', 244, 'Let Go'),
  (14, 'Survivor', '2001-05-01', 240, 'Survivor');

INSERT INTO artists
VALUES
  (1, 'Hanson'),
  (2, 'Queen'),
  (3, 'Mariah Cary'),
  (4, 'Lady Gaga'),
  (5, 'Bradley Cooper'),
  (6, 'Nickelback'),
  (7, 'Jay Z'),
  (8, 'Alicia Keys'),
  (9, 'Katy Perry'),
  (10, 'Juicy J'),
  (11, 'Maroon 5'),
  (12, 'Christina Aguilera'),
  (13, 'Avril Lavigne'),
  (14, 'Destiny''s Child');
  

INSERT INTO producers
VALUES
  (1, 'Dust Brothers'),
  (2, 'Stephen Lironi'),
  (3, 'Roy Thomas Baker'),
  (4, 'Walter Afanasieff'),
  (5, 'Benjamin Rice'),
  (6, 'Rick Parashar'),
  (7, 'Al Shux'),
  (8, 'Max Martin'),
  (9, 'Cirkut'),
  (10, 'Shellback'),
  (11, 'Benny Blanco'),
  (12, 'The Matrix'),
  (13, 'Darkchild');

INSERT INTO songs_artists
VALUES
  (1, 1),
  (2, 2),
  (3, 3),
  (4, 4),
  (4, 5),
  (5, 6),
  (6, 7),
  (6, 8),
  (7, 9),
  (7, 10),
  (8, 11),
  (8, 12),
  (9, 13),
  (10, 14);

INSERT INTO songs_producers
VALUES
  (1, 1),
  (1, 2),
  (2, 3),
  (3, 4),
  (4, 5),
  (5, 6),
  (6, 7),
  (7, 8),
  (7, 9),
  (8, 10),
  (8, 11),
  (9, 12),
  (10, 13);
  
  
  







  








  

