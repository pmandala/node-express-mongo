#  Node-Express-MongoDB(Mongoose)

## Requirements

* NodeJS
* MongoDB

## Configurations

Change the default configuration properties in '.env' file if needed.

| Property | Value                          | Description                 |
|----------|--------------------------------|-----------------------------|
| PORT     | 8080                           | Port to run the node server |
| MONGODB  | mongodb://localhost:27017/test | MongoDB connect string      |

##  Build

```
npm install
```

## Starting Server

```
node server.js
```

## API EXAMPLES

CREATE USER

```
curl -i  -H 'Accept: application/json' -H 'Content-Type : application/json' -X PUT \
  -d 'userId'='phaneendharm@yahoo.com' -d 'firstName'='Phanee' -d 'lastName'='Mandala' \
  http://localhost:8080/v1/api/users
```

GET ALL USERS

```
curl -i -H 'Accept: application/json' -H 'Content-Type : application/json' -X GET \
  http://localhost:8080/v1/api/users
```

FIND USER

```
curl -i -H 'Accept: application/json' -H 'Content-Type : application/json' -X GET \
http://localhost:8080/v1/api/users/phaneendharm@yahoo.com
```

UPDATE USER

```
curl -i  -H 'Accept: application/json' -H 'Content-Type : application/json' -X POST \
  -d 'firstName'='Phani', 'lastName'='Mandala' \
  http://localhost:8080/v1/api/users/phaneendharm@yahoo.com
```

DELETE USER

```
curl -i -H 'Accept: application/json' -H 'Content-Type : application/json' -X GET \
  http://localhost:8080/v1/api/users/phaneendharm@yahoo.com
```
