/* 1 - SQL Basics: Simple WHERE and ORDER BY */

/*
people table schema
id
name
age
Return all people fields where their age is over 50 and order by the age descending
*/

SELECT * FROM people
WHERE age > 50
ORDER BY age DESC;

/* 2 - SQL Basics: Simple SUM */

/*
For this challenge you need to create a simple SUM statement that will sum all the ages.

people table schema
id
name
age

select table schema
age_sum (sum of ages)

NOTE: You need to use ALIAS for creating age_sum
*/

SELECT SUM(age) AS age_sum
FROM people

/* 3 - SQL Basics: Simple MIN / MAX */

/*
For this challenge you need to create a simple MIN / MAX statement that will return the Minimum and Maximum ages out of all the people.

people table schema
id
name
age
select table schema
age_min (minimum of ages)
age_max (maximum of ages)
*/

SELECT MIN(age) AS age_min, MAX(age) as age_max
FROM people

/* 4 - Find all active students */

/*
Create a simple SELECT query to display student information of all ACTIVE students.

TABLE STRUCTURE:

students
Id (integer)	FirstName (text)	LastName (text)	IsActive (boolean)
*/

SELECT * FROM students
WHERE IsActive


/* 5 - SQL Basics: Simple GROUP BY */

/*
create a simple GROUP BY statement, you want to group all the people by their age and count the people who have the same age.

people table schema
id
name
age
select table schema
age [group by]
people_count (people count)
*/

SELECT age, COUNT(*) AS people_count
FROM people
GROUP BY age

/* 6 - SQL Basics: Simple HAVING */

/*
create a simple HAVING statement, you want to count how many people have the same age 
and return the groups with 10 or more people who have that age.

people table schema
id
name
age
return table schema
age
total_people
*/

SELECT age, COUNT(*) AS total_people
FROM people
GROUP BY age
HAVING COUNT(*) >= 10
