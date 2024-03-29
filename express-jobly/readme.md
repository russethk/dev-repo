# Jobly
**Jobly** is a Node Express REST API for searching and connecting to jobs in a relational database. All the routes in Jobly require an auth token (provided on successful login).

# Get Started

- Download the project from this repo via Git clone or whichever method you prefer.

**When in project directory:**

- Install dependencies by running `npm install`
- Create PostgreSQL database named `jobly` and seed the database schema from `data.sql` by running `psql jobly < data.sql`
- Start the server by running `npm start`, it should be running on `localhost:3001`
- Run the tests by running `npm test`

# What Can I Do?

Here's some helpful routes to call while playing around with Jobly:

>***NOTE*** - Some routes require an admin account which cannot be created using the API. Using `psql` or an app like `Postico`, you can set a user's `is_admin` column to `True` and it will give that account full access to all routes.

## User Routes

**POST** `localhost:3001/users`<br>
creates a new user.<br>
data input: `username, password, first_name, last_name, email`

**GET** `localhost:3001/users`<br>
returns username, first_name, last_name and email of all users

**GET** `localhost:3001/users/[username]`<br>
return all the fields for a user excluding the password.

**PATCH** `localhost:3001/users/[username]`<br>
*Must be the logged-in user or an admin*<br>
updates an existing user and returns the updated user excluding the password.

**DELETE** `localhost:3001/users/[username]`<br>
*Must be the logged-in user or an admin*<br>
removes an existing user and returns the message "User deleted".


## Company Routes

**GET** `localhost:3001/companies`<br>
This returns the handle and name for all of the company objects.<br>
It also allows for the following query string parameters:

- `search` - If the query string parameter is passed, a filtered list of handles and names handles should be displayed based on the search term and if the name includes it.
- `min_employees` - If the query string parameter is passed, names and company handles should be displayed that have a number of employees greater than the value of the query string parameter.

- `max_employees` - If the query string parameter is passed, a list of names and company handles should be displayed that have a number of employees less than the value of the query string parameter.

**POST** `localhost:3001/companies`<br>
*Must be an admin*<br>
This should create a new company and return the newly created company.<br>
data input: `handle, name, num_employees, description, logo_url`

**GET** `localhost:3001/companies/[handle]`<br>
This should return a single company found by its id. This returns all of the data associated with this company, including all jobs associated with this company. 

**PATCH** `localhost:3001/companies/[handle]`<br>
*Must be an admin*<br>
This should update an existing company and return the updated company.

**DELETE** `localhost:3001/companies/[handle]`<br>
*Must be an admin*<br>
This should remove an existing company and return a message.

## Job Routes

**POST** `localhost:3001/jobs`<br>
*Must be an admin*<br>
This route creates a new job and returns a new job.<br>
data input: `title, salary, equity, company_handle`

**GET** `localhost:3001/jobs`<br>
This route lists all the titles and company handles for all jobs, ordered by the most recently posted jobs. It also allows for the following query string parameters:

- `search` - If the query string parameter is passed, a filtered list of titles and company handles should be displayed based on the search term and if the job title includes it.

- `min_salary` - If the query string parameter is passed, titles and company handles should be displayed that have a salary greater than the value of the query string parameter.

- `min_equity` - If the query string parameter is passed, a list of titles and company handles should be displayed that have an equity greater than the value of the query string parameter.

**GET** `localhost:3001/jobs/[id]`<br>
This route shows information about a specific job including a key of company which is an object that contains all of the information about the company associated with it.

**PATCH** `localhost:3001/jobs/[id]`<br>
*Must be an admin*<br>
This route updates a job by its ID and returns an the newly updated job.

**DELETE** `localhost:3001/jobs/[id]`<br>
*Must be an admin*<br>
This route deletes a job and returns a message.

