## NUPAT USER CRUD API

This API documentation can be found [Here](https://documenter.getpostman.com/view/21130368/2s93Y2QgAk).

The PAAS (Render) link is [Here](https://nupat-user.onrender.com).

## ENDPOINTS

url = PAAS Link

- url/api/users/register (POST)
- url/api/users/:userId (GET)
- url/api/users/ (GET)
- url/api/users/gender/:genderType (GET)
- url/api/users/:userId (PATCH)
- url/api/users/register (DELETE)


## HTTP REQUEST

All API requests are made by sending a secure HTTPS request using one of the following methods:

- POST Create a resource
- GET Get a resource or list of resources
- PATCH Updates a resource or list of resources
- DELETE Deletes a resource or list of resources

For POST, the body of yor request must be a JSON payload

## HTTP RESPONSE CODE

Each response will be returned with one of the following HTTP status codes:

- 200 OK Successful request
- 400 Bad Request There was a problem with the request
- 500 Server Error Server error