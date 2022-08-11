# mongoDB_mongoose_RestAPI
Objective

In this checkpoint, you will be performing a series of guided instructions to create a REST API by manipulating your database with mongoose.

Instructions

1.Start a new Node JS project  with ‘ npm init ‘

2.Install the mongoose and express and  .env

3.Configure the environment variables with .env

4.Lunch a server with express in the server.js file

5.Connect your database locally or with mongo atlas

6.The Folder structure should be like this :
config/ .env 

Server.js

     7. Create a models folder and a User.js file in it 

     8. In User.js you must define a mongoose Schema and export the model , you will use it in the server.js

     9. The Folder structure should be like this : 

config/ .env 

models/User.js

Server.js

     10. In the server.js create four routes : 

       GET :  RETURN ALL USERS 

       POST :  ADD A NEW USER TO THE DATABASE 

       PUT : EDIT A USER BY ID 

       DELETE : REMOVE A USER BY ID 

NB : in each callback function you will use mongoose methods to manipulate your data and return it in the response 

     11.  Use postman to test each route.
