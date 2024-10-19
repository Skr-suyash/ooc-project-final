# Backend Docs

1. Signup
URL - http://localhost:8000/signup
Request - 
```
{
    "name": "suyash",
    "email": "suyashkumar2005@gmail.com",
    "password": "suyash"
}
```

Response - 
```
{
    "name": "suyash",
    "email": "suyashkumar2005@gmail.com",
    "password": "$2b$10$YJ6zS4nJ2gkRirBUMJdg4e6cLLYz3xQjdApxo25/WKQ1TQ/nhMX0G",
    "reset_token": "",
    "_id": "67139cad41acf2b62d5feb70",
    "__v": 0
}
```

2. Login - 
URL - http://localhost:8000/login
Request - 
```
    "email": "suyashkumar2005@gmail.com",
    "password": "suyash"
```

Cookies - token

Response - 
    1. Status 200 - 
    ```
        {
            "name": "suyash",
            "email": "suyashkumar2005@gmail.com",
            "password": "$2b$10$YJ6zS4nJ2gkRirBUMJdg4e6cLLYz3xQjdApxo25/WKQ1TQ/nhMX0G",
            "reset_token": "",
            "_id": "67139cad41acf2b62d5feb70",
            "__v": 0
        }
        ```

    2. Status 401 - Invalid email or password

3. Forgot Password  - 
URL - http://localhost:8000/forgot-password

Request - 
```
{
    "email": "suyashkumar2005@gmail.com"
}
```

Response - 
    1. Status 404 - Incorrect Email
    2. Status 200 - Check your email for instructions on resetting your password

