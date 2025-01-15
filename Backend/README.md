# User Registration Endpoint

## POST /users/register

This endpoint is used to register a new user.

### Request

- **URL:** `/users/register`
- **Method:** `POST`
- **Headers:** `Content-Type: application/json`
- **Body:**
  ```json
  {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "password123"
  }
  ```

### Response

- **Status Code:** `201 Created`
  ```json
  {
    "token": "jwt_token_here",
    "user": {
      "_id": "user_id_here",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "password": "hashed_password_here",
      "socketId": null
    }
  }
  ```

- **Status Code:** `400 Bad Request`
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "First Name must be atleast 3 characters long",
        "param": "fullname.firstname",
        "location": "body"
      },
      {
        "msg": "Password must be atleast 6 characters long",
        "param": "password",
        "location": "body"
      }
    ]
  }
  ```

### Description

This endpoint allows a new user to register by providing their first name, last name, email, and password. The password will be hashed before storing in the database. Upon successful registration, a JWT token is generated and returned along with the user details.


