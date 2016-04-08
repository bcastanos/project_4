# Threads

Threads is a web app built on the mean stack that enables a user to explore a set of items based on their tastes and interests.

![snapshot](http://i.imgur.com/pi3gesK.png)


# Technologies
* Node
* Angular
* RESTful API
* MongoDB
* Deployment - mlab database
* Deployment - Heroku
* JSON
* HTML
* CSS
* Materialize
* Javascript
* GitHub

# Wireframe

![Frame 1](http://imgur.com/8mr7Yi8.jpg)
![Frame 2](http://imgur.com/lCuAHSb.jpg)

# Trello

[Trello Board](https://trello.com/b/siALsV5D/wdi-p4-threads)

# Getting Started

To view this site locally, simply clone the site and npm install the packages. For the items to load, you will need to get a shopstyle developer API key and put it in your .env package and also a "secret" item for the jwt functionality.

# API Used

To get the items and their information I used the shopstyle api.

# RESTful Routes
|Method|Endpoint|Description|
|------|--------|-----------|
|GET|api/users|Returns list of all users.|
|GET|api/users/:id|Shows a specific user's details.|
|PATCH|api/users/:id|Updates a specific user's details.|
|DELETE|api/users/:id|Deletes a specific user.|
|POST|api/users|Creates a new user.|
|GET|api/fav|Displays all favorited items, stored in the database.|
|POST|api/fav|Favorites an item for a user.|
|DELETE|api/fav/:id|Unfavorites(deletes) a favorite.|
|PATCH|profile/:id|Updates user information.|
|DELETE|profile/:id|Deletes user.|

# Major Hurdles/Unsolved Problems

Angular responsive functionality proved to be a bit more challenging than I envisioned.

# Working App

[Threads](http://thread-co.herokuapp.com/)
