# Postlight Take-home challenge

This is a web application for postlight take-home challenge, mainly use faker.js to create employees data and operate CRUD. It's finished in 6 hour in total.

## Tools used in this Web App

- React
- Bootstrap 5
- Faker.js
- Axios
- NodeJS && Express.js
- MongoDB && Mongoose

## Features

- React as a client-side framework
- Half completed Search function (some hard bugs encountered), so I commeneted out  the code
- Mobile-responsive design through Bootstrap5
- Faker.js API to seed randomized data
- Ability to display,create,edit,delete an employee
- Modern API through NodeJS and interact with mongoDB database
- Navigation through react-router-dom (client-site router)
- Reusable Card Component
## What I hope I can do better if more time
- Create a reusable component for both create & edit form
- Have inital values for edit form
- Finish Search bar
- Paginated List

## How I approached the problems
1. Seted up everything in Git & Github, navigation between, install dependencies. Ensure what are the core features to be done
2. Added some basic styling in the front-end
3. Seted up a back-end database server with all the needed dependencies
4. Configured all the network access & database access with mongoDB
5. Created Model & Schema for employee, and all the fields
6. Created the CRUD routes and tested it with postman
7. Added a util function to seed the database if the employee is empty
8. Created a reusable card component, interact with the database through axios and display all the data
9. Interact with the database through axios and finished rest of the CRUD operations
10. Styled everything
11. Tried to implement a search function (failed, encounter some bugs )

## Usage: 
Perform a npm install for both backend and frontend folder once cloned
> npm install

