CREATE TABLE "teams" (
  "id" integer PRIMARY KEY,
  "name" varchar NOT NULL,
  "city" varchar NOT NULL
);

CREATE TABLE "goals" (
  "id" integer PRIMARY KEY,
  "player_id" int UNIQUE NOT NULL,
  "match_id" int NOT NULL
);

CREATE TABLE "results" (
  "id" integer PRIMARY KEY,
  "team_id" integer,
  "match_id" integer,
  "result" text
);

CREATE TABLE "players" (
  "id" integer PRIMARY KEY,
  "name" vachar UNIQUE NOT NULL,
  "birthday" date,
  "height" text,
  "current_team_id" int NOT NULL
);

CREATE TABLE "matches" (
  "id" integer PRIMARY KEY,
  "home_team_id" int UNIQUE NOT NULL,
  "away_team_id" int UNIQUE NOT NULL,
  "location" text,
  "match_date" date,
  "start_time" timestamp,
  "season_id" int,
  "head_referee_id" int NOT NULL,
  "asst_referee_1_id" int,
  "asst_referee_2_id" int
);

CREATE TABLE "referees" (
  "id" integer PRIMARY KEY,
  "name" vachar UNIQUE NOT NULL
);

CREATE TABLE "roster" (
  "id" integer PRIMARY KEY,
  "player_id" int,
  "match_id" int,
  "team_id" int
);

CREATE TABLE "season" (
  "id" integer PRIMARY KEY,
  "start_date" date,
  "end_date" date
);

COMMENT ON COLUMN "results"."result" IS 'win, loss, or draw';

ALTER TABLE "roster" ADD FOREIGN KEY ("team_id") REFERENCES "teams" ("id");

ALTER TABLE "players" ADD FOREIGN KEY ("current_team_id") REFERENCES "teams" ("id");

ALTER TABLE "matches" ADD FOREIGN KEY ("home_team_id") REFERENCES "teams" ("id");

ALTER TABLE "matches" ADD FOREIGN KEY ("away_team_id") REFERENCES "teams" ("id");

ALTER TABLE "results" ADD FOREIGN KEY ("team_id") REFERENCES "teams" ("id");

ALTER TABLE "matches" ADD FOREIGN KEY ("head_referee_id") REFERENCES "referees" ("id");

ALTER TABLE "matches" ADD FOREIGN KEY ("asst_referee_1_id") REFERENCES "referees" ("id");

ALTER TABLE "matches" ADD FOREIGN KEY ("asst_referee_2_id") REFERENCES "referees" ("id");

ALTER TABLE "roster" ADD FOREIGN KEY ("player_id") REFERENCES "players" ("id");

ALTER TABLE "goals" ADD FOREIGN KEY ("player_id") REFERENCES "players" ("id");

ALTER TABLE "goals" ADD FOREIGN KEY ("match_id") REFERENCES "matches" ("id");

ALTER TABLE "results" ADD FOREIGN KEY ("match_id") REFERENCES "matches" ("id");

ALTER TABLE "roster" ADD FOREIGN KEY ("match_id") REFERENCES "matches" ("id");

ALTER TABLE "matches" ADD FOREIGN KEY ("season_id") REFERENCES "season" ("id");
