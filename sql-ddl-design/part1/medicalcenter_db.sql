CREATE TABLE "doctors" (
  "id" integer PRIMARY KEY,
  "name" text,
  "specialty" varchar
);

CREATE TABLE "patients" (
  "id" integer PRIMARY KEY,
  "name" varchar,
  "birthday" date,
  "insurance" varchar
);

CREATE TABLE "diseases" (
  "id" integer PRIMARY KEY,
  "name" varchar,
  "description" text
);

CREATE TABLE "visits" (
  "id" integer PRIMARY KEY,
  "doctor_id" integer,
  "patient_id" integer,
  "date" date
);

CREATE TABLE "diagnosis" (
  "id" integer PRIMARY KEY,
  "visit_id" integer,
  "disease_id" integer,
  "notes" text
);

ALTER TABLE "visits" ADD FOREIGN KEY ("doctor_id") REFERENCES "doctors" ("id");

ALTER TABLE "visits" ADD FOREIGN KEY ("patient_id") REFERENCES "patients" ("id");

ALTER TABLE "diagnosis" ADD FOREIGN KEY ("disease_id") REFERENCES "diseases" ("id");

ALTER TABLE "diagnosis" ADD FOREIGN KEY ("id") REFERENCES "visits" ("id");
