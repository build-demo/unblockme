<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://i.ibb.co/Rv1Tg53/unblockme.png">
    <img src="https://i.ibb.co/Rv1Tg53/unblockme.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Unblock Me</h3>

  <p align="center">
    Get Help Now. Reach Out to a mentor using UnblockMe, A Github bot
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Report Bug</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

Unblockme is a Github bot. With unblockme, an MLH fellow can request technical assistance and schedule a meeting with a mentor.
How? By creating an issue on a repository and bam!--all set.
The MLH mentor gets information through email on challenge and a better context of the problem the MLH fellow is experiencing.

Here's why unblockme is helpful:

- A fellow can quickly request technical assistance on a blocker.
- A mentor gets a better context of the blocker. How? By getting information on the challenge, repository being worked on, file name, etc.
- :smile: Yep, unblockme puts a smile on the faces of fellows

### Built With

This section lists any major frameworks that the project was built using.

- [React](https://reactjs.org/)
- [Probot](https://probot.github.io/)
- [Google Calendar](https://developers.google.com/calendar)
- [Email Service](https://nodemailer.com/about/)
- [Passport](http://www.passportjs.org/)
- [Expressjs](https://expressjs.com/)

List of other resources that were used are listed in the acknowledgments.

<!-- GETTING STARTED -->

## Getting Started

This is how you can set up the project.
To get a local copy up and running follow these steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- Node
- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation/Set Up of the Bot

> This is a monorepo.It contains both the Backend and the Github Application

1. Clone the repo
   ```sh
   git clone https://github.com/build-demo/unblockme.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create and register a Github application [here](https://docs.github.com/en/developers/apps/creating-a-github-app)
4. Get the APP ID From the Github Application registered
5. Create .env file and copy the values of .env.sample into it

```sh
    # .env file

    # The ID of your GitHub App
    APP_ID=
    WEBHOOK_SECRET=

    # Use `trace` to get verbose logging or `info` to show less
    LOG_LEVEL=debug

    # Go to https://smee.io/new set this to the URL that you are redirected to.
    WEBHOOK_PROXY_URL=

    # Email
    EMAIL_SERVICE=gmail
    # email account of user
    EMAIL_USER=
    # email account of password
    EMAIL_PASS=
```

6. Run the bot

```sh
   npm start
```

### Debugging

- Always run $ npm install and restart the server if package.json has changed.
- To turn on verbose logging, start the server by running: $ LOG_LEVEL=trace npm start

### Installation/Set Up of Backend

1. while running the Github Application,

   ```sh
   cd backend
   ```

2. Install dependencies

```sh
npm install
```

2. Create an .env file from the .env.example and provide the values

```sh
 #.env file

 #google clientId
clientID=

#google client secret
clientSecret=

#callbackUrl
callbackURL=/auth/google/callback

#MONGODB
MONGODB_URI=

BASE_URL=http://localhost:8000
CLIENT_URL=http://localhost:3001

#GITHUB_AUTH for the Github Authentication
GITHUB_AUTH_CLIENT_SECRET=
GITHUB_AUTH_CLIENT_ID=
GITHUB_CALLBACK=http://localhost:8000/auth/github/callback
```

### Installation/Set Up of Frontend

> The Frontend Repository is located here:

1. clone repository

```sh
   git clone respository-url
```

2. Run the command below to install dependencies

```sh
   cd project

   yarn #install dependencies
```

3. Create .env file from the .env.sample

```sh
   #.env file
REACT_APP_BASE_URL=http://localhost:8000
```

4. Run project

```sh

yarn start
```

<!-- USAGE EXAMPLES -->

## Usage

### Install the Github app on a repository or an organization

1, Follow through with the steps and choose which repositories you will like to install unblock me on.

- https://github.com/apps/unblock-me

2. Create an issue on the repository with the label Help Wanted the following information in the body

```sh
#Blocker Details

Mentor assist=true
Name=Name of Fellow
Email=example@example.com
Description=I need assistance with this project ...
Programming Language=JavaScript,Ruby,Python
Filename (optional)
linenumber(optional)

```

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what makes the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

Project Link: [https://github.com/build-demo/unblockme](https://github.com/build-demo/unblockme)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [mailgene](https://www.npmjs.com/package/mailgen)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

## License

[ISC](LICENSE) © 2021 unblockme <unblockme.tech@gmail.com>

> A GitHub App built with [Probot](https://github.com/probot/probot)

<!-- Contributors/Contact -->

## Contact

- [@jakazzy](https://github.com/jakazzy)
- [@ridhambat](https://github.com/ridhambhat)
- [@Adesin](https://github.com/adisen)
