# Instagram Collections App - Client

Link: http://instagram-collection-client.herokuapp.com

## Local Setup

Make sure you have Node and NPM installed and made a part of path.

Run `npm start` and open `127.0.0.1:8000` in your web browser to view.

## Features

The front-end client is an Angular application which consumes the backend web service. I did this both for modularity as well as creating a my own feedback loop for the API itself. Putting both front-end and back-end together wouldn't allow for this.

The front-end is a single-page application which features the same menu and several templates for viewing past collections, adding a collection, and viewing posts for a collection. To ensure responsiveness and a good experience on mobile, I used the Materialize library. 

I decided to add viewing past collections because that way, if I wanted to come back and view posts in previously created collections I could with ease. 

I also let the user name the collection to add context to the tag time. For example, if I were to look for tags between `July 28 and August 1` with the tag `Red Hot Chili Peppers`, I would be looking for their concerts at Osheaga and Lollapolooza. The collection makes more sense with a name added.

## Future

In the future, I would let users log in using their Instagram account and allow users to save collections to their account. This way, people are able to log in and create collages to share. I'd create a UserCollections table so Collections can be added to Users (without duplicates).

I would also look at improving to a better client web server.
