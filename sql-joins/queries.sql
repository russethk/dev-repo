-- PART ONE: Joins Exercise Queries -- 

-- Join the two tables so that every column and record appears, regardless of if there is not an owner_id. --
SELECT * FROM owners FULL JOIN vehicles ON vehicles.owner_id = owners.id;

-- Count the number of cars for each owner. Display the owners first_name, last_name and count of vehicles. The first_name should be ordered in ascending order. --
SELECT first_name, last_name, COUNT(vehicles.id) FROM owners FULL JOIN vehicles ON vehicles.owner_id = owners.id GROUP BY owners.id ORDER BY first_name ASC;

/* Count the number of cars for each owner and display the average price for each of the cars as integers. 
Display the owners first_name, last_name, average price and count of vehicles. 
The first_name should be ordered in descending order. 
Only display results with more than one vehicle and an average price greater than 10000. */

SELECT first_name, last_name, CEILING(AVG(price)) AS average_price, COUNT(vehicles.id) 
FROM owners 
FULL JOIN vehicles ON vehicles.owner_id = owners.id 
GROUP BY owners.id HAVING COUNT(vehicles.id) > 1 AND AVG(price) > 10000 
ORDER BY first_name DESC;


-- PART TW0:  SQL Zoo Queries --

-- 6 JOIN --

/* 
1 - The first example shows the goal scored by a player with the last name 'Bender'. 
The * says to list all the columns in the table 
Modify it to show the matchid and player name for all goals scored by Germany. 
To identify German players, check for: teamid = 'GER'
*/
SELECT matchid, player FROM goal WHERE teamid = 'GER';

/*
2 - From the previous query you can see that Lars Bender's scored a goal in game 1012. 
Now we want to know what teams were playing in that match.

Notice in the that the column matchid in the goal table corresponds to the id column in the game table. 
We can look up information about game 1012 by finding that row in the game table.

Show id, stadium, team1, team2 for just game 1012
*/
SELECT id, stadium, team1, team2 FROM game WHERE id = 1012;

/*
3 - The code below shows the player (from the goal) and stadium name (from the game table) for every goal scored.
SELECT player,stadium
  FROM game JOIN goal ON (id=matchid)
Modify it to show the player, teamid, stadium and mdate for every German goal
*/
SELECT player,teamid,stadium,mdate
  FROM game JOIN goal ON game.id = goal.matchid
WHERE teamid = 'GER'

/*
4 - Show the team1, team2 and player for every goal scored by a player called Mario player LIKE 'Mario%'
*/
SELECT team1,team2,player
  FROM game JOIN goal ON game.id = goal.matchid
WHERE player LIKE 'Mario%';

/*  
5 - The table eteam gives details of every national team including the coach. 
You can JOIN goal to eteam using the phrase goal JOIN eteam on teamid=id

Show player, teamid, coach, gtime for all goals scored in the first 10 minutes gtime<=10
*/
SELECT player, teamid, coach, gtime
  FROM goal JOIN eteam ON goal.teamid = eteam.id
WHERE gtime<=10;


/*
6 - To JOIN game with eteam you could use either
game JOIN eteam ON (team1=eteam.id) or game JOIN eteam ON (team2=eteam.id)

List the dates of the matches and the name of the team in which 'Fernando Santos' was the team1 coach.
*/
SELECT mdate, teamname 
FROM game JOIN eteam ON (team1=eteam.id)
WHERE coach = 'Fernando Santos';

/*
7 - List the player for every goal scored in a game where the stadium was 'National Stadium, Warsaw'
*/
SELECT player
  FROM game JOIN goal ON game.id = goal.matchid
WHERE stadium = 'National Stadium, Warsaw';

/*
8 - The example query shows all goals scored in the Germany-Greece quarterfinal.
Instead show the name of all players who scored a goal against Germany.
*/
SELECT DISTINCT player
  FROM game JOIN goal ON game.id = goal.matchid
WHERE (team1 = 'GER' OR team2 = 'GER') AND teamid != 'GER';

/*
9 - Show teamname and the total number of goals scored.
*/
SELECT teamname, COUNT(teamid) AS goals
  FROM eteam JOIN goal ON eteam.id = goal.teamid
GROUP BY teamname;

/*
10 - Show the stadium and the number of goals scored in each stadium.
*/
SELECT stadium, COUNT(teamid) AS Goals
  FROM game JOIN goal ON game.id = goal.matchid
GROUP BY stadium;

/*
11 - For every match involving 'POL', show the matchid, date and the number of goals scored.
*/
SELECT matchid, mdate, COUNT(player) AS Goals
FROM goal JOIN game ON matchid = id
WHERE (team1 = 'POL' OR team2 = 'POL')
GROUP BY matchid, mdate;

/*
12 - For every match where 'GER' scored, show matchid, match date and the number of goals scored by 'GER'
*/

SELECT matchid, mdate, COUNT(teamid) AS Goals
FROM goal JOIN game ON goal.matchid = game.id
WHERE teamid = 'GER'
GROUP BY matchid, mdate;

/*
13 - List every match with the goals scored by each team as shown. This will use "CASE WHEN" which has not been explained in any previous exercises.
Notice in the query given every goal is listed. If it was a team1 goal then a 1 appears in score1, otherwise there is a 0.
You could SUM this column to get a count of the goals scored by team1. Sort your result by mdate, matchid, team1 and team2.
*/
SELECT mdate,
  team1,
  SUM(CASE WHEN teamid=team1 THEN 1 ELSE 0 END) AS score1,
  team2,
  SUM(CASE WHEN teamid=team2 THEN 1 ELSE 0 END) AS score2  
FROM game LEFT JOIN goal ON matchid = id
GROUP BY mdate, matchid, team1, team2;


-- 7 More JOIN Operations --

/*
1 - List the films where the yr is 1962 [Show id, title]
*/

SELECT id, title
  FROM movie
WHERE yr = 1962;

/*
2 - Give year of 'Citizen Kane'.
*/
SELECT yr FROM movie
WHERE title = 'Citizen Kane';

/*
3 - List all of the Star Trek movies, include the id, title and yr (all of these movies include the words Star Trek in the title). Order results by year.
*/
SELECT id, title, yr
  FROM movie
WHERE title LIKE 'Star Trek%'
ORDER BY yr;

/*
4 - What id number does the actress 'Glenn Close' have?
*/
SELECT id FROM actor WHERE name = 'Glenn Close';
/*

5 - What is the id of the film 'Casablanca'
*/
SELECT id FROM movie
WHERE title = 'Casablanca';

/*
6 - Obtain the cast list for 'Casablanca'.
*/
SELECT actor.name 
FROM actor 
INNER JOIN casting ON casting.actorid = actor.id
WHERE casting.movieid = 132689 OR casting.movieid = 60576357;


/*
7 - Obtain the cast list for the film 'Alien'
*/
SELECT name FROM casting JOIN actor ON actorid = actor.id
WHERE movieid = 117905;

/*
8 - List the films in which 'Harrison Ford' has appeared
*/
SELECT title FROM movie JOIN casting ON movie.id = movieid
JOIN actor ON actorid = actor.id
WHERE name = 'Harrison Ford';

/*
9 - List the films where 'Harrison Ford' has appeared - but not in the starring role. [Note: the ord field of casting gives the position of the actor. If ord=1 then this actor is in the starring role]
*/
SELECT title FROM movie JOIN casting ON movie.id = movieid
JOIN actor ON actorid = actor.id
WHERE name = 'Harrison Ford' AND ord != 1;

/*
10 - List the films together with the leading star for all 1962 films.
*/
SELECT title, name FROM movie
JOIN casting ON movie.id = casting.movieid
JOIN actor ON casting.actorid = actor.id
WHERE yr = 1962 AND ord=1;

/*
11 - Which were the busiest years for 'Rock Hudson', show the year and the number of movies he made each year for any year in which he made more than 2 movies.
*/
SELECT yr, COUNT(title) FROM movie
JOIN casting ON movie.id = casting.movieid
JOIN actor ON casting.actorid = actor.id
WHERE name = 'Rock Hudson'
GROUP BY yr
HAVING COUNT(title) > 2;

/*
12 - List the film title and the leading actor for all of the films 'Julie Andrews' played in.
*/
SELECT title, name FROM movie
JOIN casting ON movie.id = casting.movieid
JOIN actor ON casting.actorid = actor.id
WHERE ord=1 AND movie.id IN (SELECT movieid FROM casting 
                            JOIN actor ON actorid = actor.id
                            WHERE name = 'Julie Andrews');


/*
13 - Obtain a list, in alphabetical order, of actors who've had at least 30 starring roles.
*/
SELECT name FROM actor
JOIN casting ON actorid = actor.id
WHERE ord=1
GROUP BY name HAVING COUNT(movieid) >= 15;

/*
14 - List the films released in the year 1978 ordered by the number of actors in the cast, then by title.
*/
SELECT title, COUNT(actorid) FROM movie
  JOIN casting ON movie.id=casting.movieid
WHERE yr=1978
GROUP BY title
ORDER BY COUNT(actorid) DESC, title;

/*
15 - List all the people who have worked with 'Art Garfunkel'.
*/
SELECT name FROM actor 
JOIN casting ON actorid = actor.id
WHERE movieid IN (SELECT movieid FROM casting 
    JOIN actor ON actorid = actor.id
    WHERE name = 'Art Garfunkel') AND name != 'Art Garfunkel'
ORDER BY name ASC;








