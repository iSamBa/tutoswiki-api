# Tutorials wiki Api 
---

### Introduction
Tutorials wiki api is an api that will allow users to create blogs alike tutorials in serveral topics.<br>
In order to publish or read these tutorials, a user must be authenticated.<br>

### Used technologies
+ The general architecture of this implementation follows the rules of [The Clean Code Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) by Robert C. Martin (Uncle Bob) 
+ Main Technologies :
  + [Express](http://expressjs.com/)
  + [MongoDB Atlas](https://www.mongodb.com/cloud)
  + [Mongoose](https://mongoosejs.com/)
  + [Passportjs](http://www.passportjs.org/)


### Get it running locally
1. Make sure to have a running instance of Mongodb (Either locally or on the cloud using Mongodb Atlas)
2. Clone the current repository `git clone https://github.com/iSamBa/tutoswiki-api.git`
3. In the root folder create a `.env` file in which you need to specify the url to your data base `DATA_BASE_URL=<url to your data base>` 
4. Open a terminal in the root folder of this project and run `npm install` to install all the dependencies
5. Start the server with `npm start`


### Routes
The API contains 3 main routes:
+ `/users` : Accessible by authenticated users only, and contains CRUD operations for the user entity
+ `/posts` : Accessible by authenticated users only, and contains CRUD operations for the post entity
+ `/auth` : User authentication, used for the `/login`, `/register` and `/logout`
  

## Authentication strategy
The authentication has been implemented using [Passportjs](http://www.passportjs.org/), especially the _Passport-local_ strategy.
The password given by the user is hashed with a generated salt using [crypto](https://github.com/brix/crypto-js).
After login in, a session with the user information is stored in the data base in the `sessions` collection, and a cookie is generated for that specific user and will be added to the headers.


## API response
Besides the `status`, the body of all responses sent by the API are structured in the following way : `{ok: true, data}` or `{ok: false, message}` 


## ToDos
[] The possibility to create an Admin user
[] Restrict the access to `/users` route to Admins only
[] Implement automatic testing


