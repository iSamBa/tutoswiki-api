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
2. Clone the current repository ```git clone https://github.com/iSamBa/tutoswiki-api.git```
3. In the root folder create a ```.env``` file in which you need to specify the url to your data base ```DATA_BASE_URL=<url to your data base>``` 
4. Open a terminal in the root folder of this project and run ```npm install``` to install all the dependencies
5. Start the server with ```npm start```

