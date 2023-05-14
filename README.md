# Fitness Tracker API

## Introduction

### The Fitness Tracker API is a RESTful API that allows users to track their fitness activities such as running, cycling, swimming, weightlifting, and more.

## Endpoints

### The Fitness Tracker API has the following endpoints:

### /auth

- POST /auth/login: Authenticate a user and return a JWT token
- POST /auth/register: Register a new user

### /users

- GET /users/:id: Get a user by ID
- PUT /users/:id: Update a user by ID
- DELETE /users/:id: Delete a user by ID

### /Goal

- GET /goal: Get all goal
- POST /goal: Create a new activity
- GET /goal/:id: Get an activity by ID
- PUT /goal/:id: Update an activity by ID
- DELETE /goal/:id: Delete an activity by ID
