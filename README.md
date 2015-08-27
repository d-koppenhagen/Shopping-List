# shopping-list
## About
This is a simple shopping list based on mongodb, angularJS and nodeJS

## What you need
- [NodeJS](https://nodejs.org)
- [MongoDB](https://www.mongodb.org/) for the shopping list

## How to setup
1. clone this project
2. go to `src` folder and run `npm install` (maybe you need to install also dependencies)
3. run the app with `node server.js`
4. open the url in your browser (http://localhost:5000)
5. create an init.d script to run the shopping-list as a service (Debian)
    - edit the path after `APPLICATION_DIRECTORY` in the `shopping-list` file
    - run `sudo ./createInitScript.sh`
    - this will copy the file `shopping-list`to your `/etc/init.d` directory and make it excecutable
    - now you can start the shopping-list with `sudo service shopping-list start` (there are also the options `restart`, `stop` and `status`)
6. (optional) you can configure ar `VirtualHost` for apache, etc. like that:
```
<VirtualHost *:80>
    ServerAdmin yourMail@domain.com
    ServerName YOURSERVERNAME
    ServerAlias shopping-list.YOURDOMAIN.com

    ProxyRequests off

    <Proxy *>
        Order deny,allow
        Allow from all
    </Proxy>

    <location />
        ProxyPass http://localhost:5000/
        ProxyPassReverse http://localhost:5000/
    </location>
</VirtualHost>
```

## Configuration
- move file from the folder '/src/config.example.js' to '/src/config.js' and configure it

## How it looks like?
- a preview of the project is available on: http://shop.d-koppenhagen.de/

## API Methods


### GET (all items)

Request: `http://domain/list/`

Response:
```
{
    "checked" : <String>,
    "name" : <String>,
    "quantity" : <String>,
    "_id" : <String>
}
```
### GET (specific item)

Request: `http://domain/list/:id/`

Response:
```
{
    "checked" : <String>,
    "name" : <String>,
    "quantity" : <String>,
    "_id" : <String>
}
```
### POST

Request: `http://domain/list/`

HTTP-Body:
```
{
    "checked" : <String>,
    "name" : <String>,
    "quantity" : <String>    
}
```
Response: `<"success"|"error">`

### PUT

Request: `http://domain/list/:id`

HTTP-Body:
```
{
    "checked" : <String>,
    "name" : <String>,
    "quantity" : <String>    
}
```
Response: `<"success"|"error">`

### DELETE (specific item)

Request: `http://domain/list/:id`

Response: `<"success"|"error">`

### DELETE (all items)

Request: `http://domain/list/`

Response: `<"success"|"error">`
