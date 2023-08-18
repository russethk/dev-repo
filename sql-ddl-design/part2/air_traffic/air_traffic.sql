-- from the terminal run:
-- psql < air_traffic.sql

DROP DATABASE IF EXISTS air_traffic;

CREATE DATABASE air_traffic;

\c air_traffic

CREATE TABLE passengers (
  id serial PRIMARY KEY,
  first_name text NOT NULL,
  last_name text NOT NULL
);

CREATE TABLE airline (
  id serial PRIMARY KEY,
  airline_name varchar NOT NULL UNIQUE
);

CREATE TABLE flights (
  id serial PRIMARY KEY,
  flight_num varchar NOT NULL,
  from_city varchar NOT NULL,
  from_country varchar NOT NULL,
  to_city varchar NOT NULL,
  to_country varchar NOT NULL
);

CREATE TABLE tickets (
  id serial PRIMARY KEY,
  first_name varchar NOT NULL,
  last_name varchar NOT NULL,
  seat varchar NOT NULL UNIQUE,
  airline varchar NOT NULL,
  departure timestamp NOT NULL,
  arrival timestamp NOT NULL
);



INSERT INTO passengers
  (first_name, last_name)
VALUES
  ('Jennifer', 'Finch'),
  ('Thadeus', 'Gathercoal'),
  ('Sonja', 'Pauley'),
  ('Waneta', 'Skeleton'),
  ('Thadeus', 'Gathercoal'),
  ('Berkie', 'Wycliff'),
  ('Alvin', 'Leathes'),
  ('Cory', 'Squibbes');

INSERT INTO airline
  (airline_name)
VALUES
  ('United'),
  ('British Airways'),
  ('Delta'),
  ('TUI Fly Belgium'),
  ('Air China'),
  ('American Airlines'),
  ('Avianca Brasil');

INSERT INTO flights
  (flight_num, from_city, from_country, to_city, to_country)
VALUES
  ('UN-535', 'Washington DC', 'United States', 'Seattle', 'United, States'),
  ('BA-608', 'Tokyo', 'Japan', 'London', 'United Kingdom' ),
  ('DL-724', 'Los Angeles', 'United States', 'Las Vegas', 'United States'),
  ('DL-141', 'Seattle', 'United States', 'Mexico City', 'Mexico'),
  ('TU-223', 'Paris', 'France', 'Casablanca', 'Morocco'),
  ('AC-3002','Dubai', 'UAE', 'Beijing', 'China'),
  ('UN-802', 'New York', 'United States', 'Charlotte', 'United States'),
  ('AA-303', 'Cedar Rapids', 'United States', 'Chicago', 'United States'),
  ('AA-802', 'Charlotte', 'United States', 'New Orleans', 'United States'),
  ('AB-909', 'Sao Paolo', 'Brazil', 'Santiago', 'Chile');
  

INSERT INTO tickets
  (first_name, last_name, seat, airline, departure, arrival)
VALUES
  ('Jennifer', 'Finch','16C', 'United', '2018-04-08 09:00:00','2018-04-08 12:00:00'),
  ('Thadeus', 'Gathercoal', '8A', 'British Airways','2018-12-19 12:45:00', '2018-12-19 16:15:00'),
  ('Sonja', 'Pauley', '12F', 'Delta', '2018-01-02 07:00:00','2018-01-02 08:03:00'),
  ('Jennifer', 'Finch', '20A', 'Delta', '2018-04-15 21:00:00','2018-04-15 21:00:00'),
  ('Waneta', 'Skeleton', '27C', 'TUI Fly Belgium', '2018-08-01 18:30:00', '2018-08-01 21:50:00' ),
  ('Thadeus', 'Gathercoal', '18C', 'Air China', '2018-10-31 01:15:00', '2018-10-31 12:55:00'),
  ('Berkie', 'Wycliff', '9E', 'United', '2019-02-06 06:00:00','2019-02-06 07:47:00'),
  ('Alvin', 'Leathes', '1A', 'American Airlines', '2018-12-22 14:42:00', '2018-12-22 15:56:00'),
  ('Berkie', 'Wycliff', '32B', 'American Airlines', '2019-02-06 16:28:00', '2019-02-06 19:18:00'),
  ('Cory', 'Squibbes', '10D', 'Avianca Brasil', '2019-01-20 19:30:00', '2019-01-20 22:45:00');