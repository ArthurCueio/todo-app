# Simple fullstack to-do list

Built with the MERN stack (MongoDB, Express, React and NodeJS)

## Warning!

This does not have any user-authentication system in place. This is a project-based learning experience and is not made with public production servers in mind.

USE AT OWN RISK.

### Running development server locally:

Docker is used for the development server. There are 3 containers:

- MongoDB (uses latest mongo image from docker hub)
- API (the backend express server)
- client (React development server)

You can start everything using:

```
// Build images (Only the first or if there are changes to any Dockerfile)
$ docker-compose build

// Start containers
$ docker-compose up
```

Automatic reload on changes is alredy working (out of the box) using Nodemon on the API and react-scripts on the client.

Docker will mount the source folders on the container (see `docker-compose.yml`). There is no need to rebuild the images unless you made changes to the Dockerfile.

To stop all containers use Ctrl + C
