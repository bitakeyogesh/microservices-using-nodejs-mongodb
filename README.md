# Microservices 

A basic application to demonstrate the microservices architecture using books store management.

![image](https://user-images.githubusercontent.com/26835951/112730281-c0d3d680-8f56-11eb-9cd3-07d1965db708.png)

# Prerequisites before run the project 
- install latest version of [nodejs](https://nodejs.org/en/download)
- install latest version of [mongodb](https://www.mongodb.com/try/download/community?tck=docs_server)

## Commands

| Name | Description |
--- | --- |
| npm run startuserserver | Starts user server |
| npm run startbookserver| Starts book server|
| npm run startorderserver|Starts order Server|
| npm test unit | Starts unit tests |
| npm test integration | Starts integration tests |

## Users API
| API | Method| Description |
|--- | --- |--- |
| /api/v1/user/add |POST| Add new user |
|/api/v1/users|GET|Get all the users|
| /api/v1/user/:uuid |GET| Get user by id |
| /api/v1/user/:uuid |PUT| Update user by id |
| /api/v1/user/:uuid |DELETE| Delete user by id |

## Books API
| API | Method| Description |
|--- | --- |--- |
| /api/v1/book/add |POST| Add new book |
|/api/v1/books|GET|Get all the books|
| /api/v1/book/:uuid |GET| Get book by id |
| /api/v1/book/:uuid |PUT| Update book by id |
| /api/v1/book/:uuid |DELETE| Delete book by id |

## Orders API
| API | Method| Description |
|--- | --- |--- |
| /api/v1/order/add |POST| Add new order |
|/api/v1/orders|GET|Get all the orders|
| /api/v1/order/:uuid |GET| Get order by id |
| /api/v1/order/:uuid |PUT| Update order by id |
| /api/v1/order/:uuid |DELETE| Delete order by id |

# Environment Variables

| Name | Description |
--- | --- |
| USERS_API_PORT | Users API port. If it is not specified defaults to 8082 |
| BOOKS_API_PORT | Books API port. If it is not specified defaults to 8080 |
| ORDERS_API_PORT | Orders API port. If it is not specified defaults to 8081 |
| BOOKS_API_DATABASE_NAME|Name of the books database. If it is not specified defaults to BOOKS|
| ORDERS_API_DATABASE_NAME|Name of the orders database. If it is not specified defaults to ORDERS|
| USERS_API_DATABASE_NAME|Name of the users database. If it is not specified defaults to USERS|
| USER_API_ENDPOINT|users api endpoint.If it is not specified defaults to http://localhost:8082|
| BOOK_API_ENDPOINT|book api endpoint.  If it is not specified defaults to http://localhost:8080|
| ORDER_API_ENDPOINT|order api endpoint.  If it is not specified defaults to http://localhost:8081|

