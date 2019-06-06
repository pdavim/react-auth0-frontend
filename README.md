Problema na submissão da new question
https://auth0.com/blog/react-tutorial-building-and-securing-your-first-app/#Developing-a-Backend-API-with-Node-js-and-Express

mais ou menos a meio

#Electron React Build Auth0 WordpressPostDisplay nodejs

This is an test app, for me to test my react skills.
I added for login Auth0, because is easy to implement and has lots of extras.
Wordpress display is a simple axios get url, and then map it to get the data.
I ve build a node.js server to store my data from my forms and to later get the data

#What i Implembted so far

- react-bootstrap (styling)
- Auth0 (login and subscribe)
- axios (get/post/update/delete)
- Electron

#What to implement

- google sheets integration
- google calendar integration

# Getting Started

Install the dependencies for the app.

```
npm install
```

## Set the Client ID and Domain

If you download the sample from the quickstart page, it will come pre-populated with the **client ID** and **domain** for your application. If you clone the repo directly from Github, rename the `auth0-variables.js.example` file to `auth0-variables.js` and provide the **client ID** and **domain** there. This file is located in `src/Auth/`.

## Run the Application

The demo comes ready to serve locally using react-scripts.

```bash
npm run start
npm run electron-start
```

The application will be served at `http://localhost:3000`.

## Run the Application With Docker

In order to run the example with docker you need to have `docker` installed.

You also need to set the environment variables as explained [previously](#set-the-client-id-and-domain).

Execute in command line `sh exec.sh` to run the Docker in Linux, or `.\exec.ps1` to run the Docker in Windows.

## Create a Free Auth0 Account

1. Go to [Auth0](https://auth0.com/signup) and click Sign Up.
2. Use Google, GitHub or Microsoft Account to login.
