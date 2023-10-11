# expressShoppingList
## About
Simple shopping list application with the purpose of practicing integration testing with supertest
## More info
### expressError.js
Error classs is extended to create a new class of errors that can be used to print useful info into console and specify the error message to the user
### routes.js
Routes are placed in different js file to reduce clutter of app.js file
### server.js
A seperate file is used to start server, to avoid conflicts when testing using supertest
### routes.test.js
All routes are tested in different scenarios
