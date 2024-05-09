# API Design - Task 3: Forum App

## Requirement
- [x] As a user, I want to be able to register.  
- [x] As a user, I want to be able to log in.  
- [x] As a user, I want to be able to create a new thread.
- [x] As a user, I want to be able to create a new reply on a thread.
- [x] As a user, I want to be able to update my personal profile.
- [x] As a user, I want to be able to save/bookmark threads.
- [x] As a user, I want to be able to unsave/unbookmark threads.

## Core Entity

User: `(id, email, password)`  
Thread: `(id, title, content, user_id, created_at)`  
Reply: `(id, thread_id, content, user_id, created_at)`  
Bookmark: `(id, user_id, thread_id)`  
https://drawsql.app/teams/inyx/diagrams/forumapp
## API

### Authentication

#### Register
- **Endpoint**: `/api/register`
- **Method**: `POST`
- **Request Body**:  
  ```json
  {
    "name": "String required",
    "email": "String required",
    "password": "String required"
  }
- **Response Body**:  
  ```json
  {
  "status": 200,
  "message": "User registered successfully",
  "data": []
  }
- **Error Response**:  
  ```json
  {
  "status": 400,
  "message": "User registration error"
  }
  
#### Login
- **Endpoint**: `/api/login`
- **Method**: `POST`
- **Request Body**:  
  ```json
  {
  "email": "string",
  "password": "string"
  }
- **Response Body**:  
  ```json
  {
  "status": number (200),
  "message": "string",
  "user": {
    "id": "string",
    "name": "string",
    "email": "string",
  }
  }
- **Error Response**:  
  ```json
  {
  "status": 401,
  "message": "Invalid username or password"
  }

## Thread Menu

#### Create Thread
- **Endpoint**: `/api/threads`
- **Method**: `POST`
- **Request Body**:  
  ```json
  {
  "title": "String required",
  "content": "String required"
  }
- **Response Body**:  
  ```json
   {
  "status": 200,
  "message": "Thread created successfully",
  "data": {
    "id": "String",
    "title": "String",
    "content": "String",
    "user_id": "String",
    "created_at": "timestamp"
  }
  }
- **Error Response**:  
  ```json
   {
  "status": 400,
  "message": "Error creating thread"
  }
  
#### Reply Thread
- **Endpoint**: `/api/threads/{thread_id}/replies`
- **Method**: `POST`
- **Request Body**:  
  ```json
  {
    "content": "String required",
    "user_id": "String required"
  }
- **Response Body**:  
  ```json
  {
    "status": 200,
    "message": "Reply posted successfully",
    "data": {
      "id": "String",
      "thread_id": "String",
      "content": "String",
      "user_id": "String",
      "created_at": "timestamp"
    }
  }
- **Error Response**:  
  ```json
  {
    "status": 400,
    "message": "Error posting reply"
  }
  or
  {
    "status": 401,
    "message": "Error creating thread"
  }
## Profile

#### Edit email & password
- **Endpoint**: `/api/users/{user_id}`
- **Method**: `PUT`
- **Request Body**:  
  ```json
  {
    "name": "String",
    "email": "String",
  }
- **Response Body**:  
  ```json
  {
    "status": 200,
    "message": "Profile updated successfully",
    "data": {
      "id": "String",
      "name": "String",
      "email": "String",
    }
  }
- **Error Response**:  
  ```json
  {
    "status": 400,
    "message": "Error updating profile"
  }
## Bookmark Page

#### Bookmark Thread
- **Endpoint**: `/api/bookmarks`
- **Method**: `POST`
- **Request Body**:  
  ```json
  {
    "user_id": "String required",
    "thread_id": "String required"
  }
- **Response Body**:  
  ```json
  {
    "status": 200,
    "message": "Thread bookmarked successfully",
    "data": {
      "id": "String",
      "user_id": "String",
      "thread_id": "String"
    }
  }
- **Error Response**:  
  ```json
  {
    "status": 400,
    "message": "Error bookmarking thread"
  }
#### Remove Bookmark Thread
- **Endpoint**: `/api/bookmarks/{bookmark_id}`
- **Method**: `DELETE`
- **Request Body**:  
  ```json
  {
    "user_id": "String required",
    "bookmark_id": "String required"
  }
- **Response Body**:  
  ```json
  {
    "status": 200,
    "message": "Bookmark removed successfully",
    "data": {}
  }
- **Error Response**:  
  ```json
  {
    "status": 404,
    "message": "Bookmark not found"
  }
