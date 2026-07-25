A simple backend API built with Express.js (Node.js) to manage a cafe/restaurant menu. This project demonstrates core backend development skills including RESTful API design, request handling, and data validation.

## Overview

This project was developed as part of the DecodeLabs Full Stack Development Internship (Batch 2026), fulfilling Project 2 requirements: Backend API Development.

## Features

- GET /menu - Retrieves the full list of menu items
- POST /menu - Adds a new item to the menu
- Input validation - Returns an error if required fields (name, price) are missing

## Tech Stack

- Node.js
- Express.js

## How to Run

1. Clone this repository
2. Open the project folder in your terminal
3. Run npm install to install dependencies
4. Run npm start to start the server
5. The server will run on http://localhost:3000

## API Endpoints

### GET /menu

Returns the complete list of menu items.

Response Example:
[
  { "id": 1, "name": "Chai", "price": 50 },
  { "id": 2, "name": "Samosa", "price": 30 }
]

### POST /menu

Adds a new menu item. Requires name and price in the request body.

Request Body Example:
{
  "name": "Pizza",
  "price": 250
}

Success Response (201 Created):
{ "id": 3, "name": "Pizza", "price": 250 }

Validation Error (400 Bad Request):
If name or price is missing, the API returns:
{ "error": "Name and price are required" }

## Author

Hermain Fatima
DecodeLabs Full Stack Development Internship - Batch 2026
