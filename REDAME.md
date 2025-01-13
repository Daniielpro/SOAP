# SOAP Web Service in Node.js

This project implements a simple SOAP web service using Node.js and the `soap` library. The service allows you to greet a user by name.

## Requirements

- [Node.js](https://nodejs.org/) (version 12 or higher)
- npm (included with Node.js)

## Project Structure

```plaintext
REST API/
│
├── node_modules/ # Installed dependencies
├── package.json # Project configuration file
├── package-lock.json # Dependency lock file
├── request.xml # SOAP request file for testing
└── server.js # Server main file
```

## Instructions for Using the Project
1. Clone the Repository

To clone this repository, use the following command:

 ```bash
 git clone https://github.com/your_user/your_repository.git

 ```

2. Install the necessary dependencies:
Initialize and download the dependencies Required dependencies:
 
 ```bash
 npm install
 ```

3. Run the Server
Start the REST API server:
 
 ```bash
 node server.js
  ```

## How to Make Queries
Interact with the API
You can use tools like curl, Postman, to make queries.

Query Example:

 Invoke-WebRequest -Uri http://localhost:3000/soap -Method POST -ContentType "text/xml" -InFile "C:\address of your local repository\SOAP\request.xml"


Expected response:

 StatusCode        : 200
 StatusDescription : OK
 Content           : <?xml version="1.0" encoding="utf-8"?><soap:Envelope 
                    xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"  
                    xmlns:tns="http://example.com/"><soap:Body><tns:HelloResponse><tns:greeting>
                    Hello, Distribu...
 RawContent        : HTTP/1.1 200 OK
                    Connection: keep-alive
                    Keep-Alive: timeout=5
                    Transfer-Encoding: chunked
                    Content-Type: text/xml
                    Date: Sun, 12 Jan 2025 22:05:58 GMT
                    X-Powered-By: Express

                    <?xml version="1.0" en...
 Forms             : {}
 Headers           : {[Connection, keep-alive], [Keep-Alive, timeout=5], [Transfer-Encoding, chunked],
                    [Content-Type, text/xml]...}
 Images            : {}
 InputFields       : {}
 Links             : {}
 ParsedHtml        : mshtml.HTMLDocumentClass
 RawContentLength  : 267


## Author
EDWIN PROAÑO
GitHub: Daniielpro10