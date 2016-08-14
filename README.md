#  Node-Express-MongoDB(Mongoose)

## Requirements

* NodeJs
* MongoDB

##  Build

```
npm install
```

## Starting Server

```
node config/server.js
```

## API

ALL USERS

```
curl -i -H 'Accept: application/json' -H 'Content-Type : application/json' -X GET \
  http://localhost:8080/v1/api/users
```

CREATE USER

```
curl -i  -H 'Accept: application/json' -H 'Content-Type : application/json' -X PUT \
  -d'{"firstName":"Apple", "lastName":"Mac"}'  http://localhost:8080/v1/api/users
```

UPDATE USER

```
curl -i -H 'Accept: application/json' -H 'Content-Type : application/json' -X POST \
  -d'{"firstName":"Apple", "lastName":"Mac"}'  http://localhost:8080/v1/api/users/123
```

CREATE USER

```
curl -i  -H 'Accept: application/json' -H 'Content-Type : application/json' -X PUT \
  -d'{"firstName":"Apple", "lastName":"Mac"}'  http://localhost:8080/v1/api/users
```


DELETE USER

```
curl -i -H 'Accept: application/json' -H 'Content-Type : application/json' -X GET \
  http://localhost:8080/v1/api/users/123
```
