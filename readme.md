# Threads

Threads is a web app built on the mean stack that enables a user to explore a set of items based on their tastes and interests.

# Technologies
* Node.js
* RESTful API
* MongoDB
* Deployment - mlab database
* Deployment - Heroku
* JSON
* HTML
* CSS
* Materialize
* Javascript
* JQuery
* GitHub

# Wireframe
We went over the basic MVP layout of the landing, signup, login, analyses pages and data models. You can review our hand drawn wireframes here:
[Wireframe Sketches](https://www.dropbox.com/s/kd5mkqdzkyhogj4/wireframe.pdf?dl=0)

# Trello
Overall, Trello is very helpful during the planning and early part of the project. You can review our notes on inceptions, icebox, backlogs, user stories, and tasks completed in this link: [Trello](https://trello.com/b/keYaT8A1/team-project-3)

# Getting Started
If you would like to download our app locally, fork the repo and run npm install. You will have to get keys from Twitter and Watson, and it is recommended that you store them in a .env file that is being '.gitignore'(d).

# API Used
We used IBM/Watson's Personality Insights API and Twitter's API. First we fetch data from the tweets and concatenated the text into one single file. Then feed the data from the tweets to Watson's Personality Insights checker, and get back the output into our app.

# RESTful Routes
|Method|Endpoint|Description|
|------|--------|-----------|
|GET|api/twitter/:id|Returns tweets of a Twitter user.|
|POST|api/watson|Sends body of text and receives analysis of said text.|
|GET|/login|Takes user to login page.|
|GET|/signup|Takes user to signup page.|
|GET|/profile|Takes user to profile page.|
|GET|/update|Takes user to update page.|
|PATCH|/profile/:id|Updates user information.|
|DELETE|profile/:id|Deletes user.|

# Major Hurdles/Unsolved Problems
The two major hurdles that we faced were keeping our aspirations in check and mastering the git workflow. We went into the project with big ambitions and grand visions, but time constraints kept us focused on making sure we got our page to MVP. The git workflow was a learning process as we ran into some issues with merge conflicts (as expected on our first major group project). Overall the hurdles taught us how to work under pressure to produce a working product and how to work together to solve problems in uncomfortable territory.

We didn't have unsolved problems per se, however we would have liked to build out the profile view so that a user could view saved analyses in a simple way.

# Working App
We hosed our site on Herouku using mlab as our database storage.
Here's the website: [Watson's Couch](http://watsonscouch.herokuapp.com/)
