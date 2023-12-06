

---

# SpeedyFeast Backend Documentation

This repository serves as the backend for the SpeedyFeast. It provides APIs to manage food items and user authentication.

## Table of Contents
- [Setup](#setup)
- [API Endpoints](#api-endpoints)
  - [User](#user)
  - [Food](#food)
- [Authentication](#authentication)

## Setup

1. Clone the repository:

   ```bash
     git clone https://github.com/eldhopaulose/foodBackend.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following:

   ```env
   MONG_URI=<Your MongoDB URI>
   SECRET=<Your Secret Key for JWT>
   ```

4. Run the application:

   ```bash
   npm start
   ```

The backend will be running on `http://localhost:4000` by default.

## API Endpoints

### User

#### 1. **Signup**

   - **Endpoint:** `POST /api/user/signup`
   - **Example Request:**
     ```json
     {
        "name": "John Doe",
        "email": "john.doe@example.com",
        "password": "your_password_here"
     }
     ```
   - **Example Response:**
     ```json
     {
       "name": "John Doe",
       "email": "example@example.com",
       "token": "<JWT Token>"
     }
     
     ```

#### 2. **Login**

   - **Endpoint:** `POST /api/user/login`
   - **Example Request:**
     ```json
     {
     "email": "test@test.com",
     "password": "test123"
     }
     ```
   - **Example Response:**
     ```json
     {
       "email": "john.doe@example.com",
       "token": "<JWT Token>"
     }
     ```

### Food

#### 1. **Get All Food**

   - **Endpoint:** `GET /api/food`
   - **Query Parameters:**
     - `page` (optional): Current page number (default is 1)
     - `pageSize` (optional): Number of items per page (default is 10)
   - **Example Request:**
     ```bash
     curl http://localhost:4000/api/food?page=1&pageSize=10
     ```
   - **Example Response:**
     ```json
     {
       "pageInfo": {
         "status": 200,
         "isError": false,
         "currentPage": 1,
         "totalPages": 5,
         "pageSize": 10,
         "totalItems": 50
       },
       "data": [
          {
      "_id": "6198f4c214f42f1024164441",
      "title": "Pizza",
      "description": "A delicious Italian dish with cheese and tomato sauce",
      "image": "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47",
      "category": "Italian",
      "star": 4,
      "location": "Rome",
      "createdAt": "2021-11-20T08:01:06.092Z",
      "updatedAt": "2021-11-20T08:01:06.092Z",
      "__v": 0
     },
      // more food items
     ]
     }
    
     ```

#### 2. **Get Single Food**

   - **Endpoint:** `GET /api/food/:id`
   - **Example Request:**
     ```bash
     curl http://localhost:4000/api/food/1234567890
     ```
   - **Example Response:**
     ```json
     {
      "_id": "6198f4c214f42f1024164441",
      "title": "Pizza",
      "description": "A delicious Italian dish with cheese and tomato sauce",
      "image": "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47",
      "category": "Italian",
      "star": 4,
      "location": "Rome",
      "createdAt": "2021-11-20T08:01:06.092Z",
      "updatedAt": "2021-11-20T08:01:06.092Z",
      "__v": 0
      }

     ```

#### 3. **Get Food by Category**

   - **Endpoint:** `GET /api/food/category/:category`
   - **Example Request:**
     ```bash
     curl http://localhost:4000/api/food/category/Dessert
     ```
   - **Example Response:**
     ```json
      {
      "data": [
          {
              "_id": "655518a694f55ad54beb5018",
              "title": "Fish and Chips",
              "description": "A classic British dish of deep-fried fish in crispy batter, served with chunky chips and mushy peas.",
              "image": "https://i.imgur.com/0Z9Q7Tn.jpg",
              "category": "Seafood",
              "star": 4,
              "location": "London",
              "createdAt": "2023-11-15T19:14:46.432Z",
              "updatedAt": "2023-11-15T19:14:46.432Z",
              "__v": 0
          }
      ]
     }
     ```

#### 4. **Create New Food**

   - **Endpoint:** `POST /api/food`
   - **Example Request:**
     ```json
     {
        "title": "Croissant",
        "description": "A buttery and flaky pastry shaped like a crescent, often eaten for breakfast with jam or chocolate.",
        "image": "https://i.imgur.com/2fCvYs4.jpg",
        "category": "French",
        "star": 4,
        "location": "Paris"
     }
     ```
   - **Example Response:**
     ```json
     {
          "title": "Croissant",
          "description": "A buttery and flaky pastry shaped like a crescent, often eaten for breakfast with jam or chocolate.",
          "image": "https://i.imgur.com/2fCvYs4.jpg",
          "category": "French",
          "star": 4,
          "location": "Paris",
          "_id": "655b1db071d5645dccfe73cf",
          "createdAt": "2023-11-20T08:49:52.952Z",
          "updatedAt": "2023-11-20T08:49:52.952Z",
          "__v": 0
      }
     ```

## Authentication

For protected routes, include the JWT token in the `Authorization` header.

Example:

```bash
curl -H "Authorization: Bearer <JWT Token>" http://localhost:4000/api/food
```

---

Feel free to customize this documentation based on your specific requirements. If you have any questions or issues, please contact the author: [@eldhopaulose](https://github.com/eldhopaulose).
