CREATE TABLE "region" (
  "id" integer PRIMARY KEY,
  "name" text
);

CREATE TABLE "users" (
  "id" integer PRIMARY KEY,
  "username" varchar UNIQUE NOT NULL,
  "encrypted_password" varchar UNIQUE NOT NULL,
  "preferred_region_id" int
);

CREATE TABLE "categories" (
  "id" integer PRIMARY KEY,
  "name" varchar
);

CREATE TABLE "posts" (
  "id" integer PRIMARY KEY,
  "title" vachar,
  "post_text" text,
  "location" text,
  "user_id" integer,
  "region_id" integer,
  "category_id" integer
);

ALTER TABLE "posts" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "posts" ADD FOREIGN KEY ("region_id") REFERENCES "region" ("id");

ALTER TABLE "posts" ADD FOREIGN KEY ("category_id") REFERENCES "categories" ("id");
