\echo 'Delete and recreate pokedex db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE pokedex;
CREATE DATABASE pokedex;
\connect pokedex

\i pokedex-schema.sql
\i pokedex-seed.sql

\echo 'Delete and recreate pokedex_test db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE pokedex_test;
CREATE DATABASE pokedex_test;
\connect pokedex_test

\i pokedex-schema.sql
