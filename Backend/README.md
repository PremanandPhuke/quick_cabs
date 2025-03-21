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

# User Login Endpoint

## POST /users/login

This endpoint is used to log in an existing user.

### Request

- **URL:** `/users/login`
- **Method:** `POST`
- **Headers:** `Content-Type: application/json`
- **Body:**
  ```json
  {
    "email": "john.doe@example.com",
    "password": "password123"
  }
  ```

### Response

- **Status Code:** `200 OK`
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
        "msg": "Password must be at least 6 characters long",
        "param": "password",
        "location": "body"
      }
    ]
  }
  ```

### Description

This endpoint allows an existing user to log in by providing their email and password. Upon successful login, a JWT token is generated and returned along with the user details.

# User Profile Endpoint

## GET /user/profile

This endpoint is used to get the profile of the authenticated user.

### Request

- **URL:** `/user/profile`
- **Method:** `GET`
- **Headers:** `Authorization: Bearer <token>`

### Response

- **Status Code:** `200 OK`
  ```json
  {
    "firstname": "John",
    "lastname": "Doe",
    "email": "john.doe@example.com"
  }
  ```

- **Status Code:** `401 Unauthorized`
  ```json
  {
    "message": "Unauthorized"
  }
  ```

### Description

This endpoint allows an authenticated user to get their profile details.

# User Logout Endpoint

## GET /user/logout

This endpoint is used to log out the authenticated user and blacklist the token provided in cookie or headers.

### Request

- **URL:** `/user/logout`
- **Method:** `GET`
- **Headers:** `Authorization: Bearer <token>`

### Response

- **Status Code:** `200 OK`
  ```json
  {
    "message": "Logged out successfully"
  }
  ```

- **Status Code:** `401 Unauthorized`
  ```json
  {
    "message": "Unauthorized"
  }
  ```

### Description

This endpoint allows an authenticated user to log out.

# Captain Endpoints

## Register Captain

**Endpoint:** `/captains/register`

**Method:** `POST`

**Description:** Register a new captain.

**Request Body:**
```json
{
    "fullname": {
        "firstname": "string",
        "lastname": "string"
    },
    "email": "string",
    "password": "string",
    "vehicle": {
        "color": "string",
        "plate": "string",
        "capacity": "number",
        "vehicleType": "string"
    }
}
```

**Response:**
- **201 Created**
    ```json
    {
        "token": "string",
        "captain": {
            "_id": "string",
            "fullname": {
                "firstname": "string",
                "lastname": "string"
            },
            "email": "string",
            "vehicle": {
                "color": "string",
                "plate": "string",
                "capacity": "number",
                "vehicleType": "string"
            },
            "status": "string"
        }
    }
    ```
- **400 Bad Request**
    ```json
    {
        "errors": [
            {
                "msg": "string",
                "param": "string",
                "location": "string"
            }
        ]
    }
    ```

**Validation Errors:**
- `Invalid Email`
- `First Name must be at least 3 characters long`
- `Password must be at least 6 characters long`
- `Color must be at least 3 characters long`
- `Plate must be at least 3 characters long`
- `Capacity must be at least 1`
- `Invalid vehicle Type`

## Login Captain

**Endpoint:** `/captains/login`

**Method:** `POST`

**Description:** Login a captain.

**Request Body:**
```json
{
  "email": "string",
  "password": "string"
}
```

**Responses:**
- **200 OK**
  ```json
  {
    "token": "string",
    "captain": {
      "_id": "string",
      "fullname": {
        "firstname": "string",
        "lastname": "string"
      },
      "email": "string",
      "vehicle": {
        "color": "string",
        "plate": "string",
        "capacity": "number",
        "vehicleType": "string"
      },
      "status": "string"
    }
  }
  ```
- **400 Bad Request**
  ```json
  {
    "errors": [
      {
        "msg": "Invalid email or password format",
        "param": "string",
        "location": "string"
      }
    ]
  }
  ```
- **401 Unauthorized**
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

## Captain Profile

**Endpoint:** `/captains/profile`

**Method:** `GET`

**Description:** Get the profile of the logged-in captain.

**Headers:**
- `Authorization`: Bearer token

**Responses:**
- **200 OK**
  ```json
  {
    "captain": {
      "_id": "string",
      "fullname": {
        "firstname": "string",
        "lastname": "string"
      },
      "email": "string",
      "vehicle": {
        "color": "string",
        "plate": "string",
        "capacity": "number",
        "vehicleType": "string"
      },
      "status": "string"
    }
  }
  ```
- **401 Unauthorized**
  ```json
  {
    "message": "Authentication required"
  }
  ```

## Logout Captain

**Endpoint:** `/captains/logout`

**Method:** `GET`

**Description:** Logout the captain.

**Headers:**
- `Authorization`: Bearer token

**Responses:**
- **200 OK**
  ```json
  {
    "message": "Successfully logged out"
  }
  ```
- **401 Unauthorized**
  ```json
  {
    "message": "Authentication required"
  }
  ```


