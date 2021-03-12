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
The MLH mentor gets better context of the challenge the MLH fellow is experiencing.
You begin the ask right from the repository before the meeting.
All a fellow needs to schedule a meeting is to create an issue on the repository.

Here's why unblockme is helpful:

- A fellow can quickly request technical assistance on a blocker.
- A mentor gets a better context of the blocker. How? By getting information on the blocker, repository, with the file number inclusive.
- :smile: Yep, unblockme puts a smile on the faces of mentors and fellows

A list of other used resources that were used are listed in the acknowledgments.

### Built With

This section lists any major frameworks that the project was built using.

- [React](https://reactjs.org/)
- [Probot](https://probot.github.io/)
- [Google Calendar](https://developers.google.com/calendar)
- [Firebase](https://firebase.google.com/)
- [Email Service](https://nodemailer.com/about/)

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

### Installation

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
    # The ID of your GitHub App
    APP_ID=
    WEBHOOK_SECRET=

    # Use `trace` to get verbose logging or `info` to show less
    LOG_LEVEL=debug

    # Go to https://smee.io/new set this to the URL that you are redirected to.
    WEBHOOK_PROXY_URL=

    # Email
    EMAIL_SERVICE=gmail
    EMAIL_USER=
    EMAIL_PASS=
```

6. Run the bot

```sh
   npm start
```

### Debugging

- Always run $ npm install and restart the server if package.json has changed.
- To turn on verbose logging, start the server by running: $ LOG_LEVEL=trace npm start

<!-- USAGE EXAMPLES -->

## Usage

### Install the app on a repository or an organization

1, Follow through with the steps and choose which repositories you will like to install unblock me on.

- https://github.com/apps/unblock-me

2. Create an issue on the repository with the label Help Wanted the following information in the body

```sh
#Blocker Details

- Mentor assist=true
- Description=I need help with this project ...
- Programming Language= Language
- Filename (optional)
- line number(optional)

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

<!-- Contributors/Contact -->

## Contact

- [@jakazzy](https://github.com/jakazzy) - email@example.com
- [@Adesin](https://github.com/adisen) - email@example.com
- [@ridhambat](https://github.com/ridhambhat) - email@example.com

Project Link: [https://github.com/build-demo/unblockme](https://github.com/build-demo/unblockme)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
- [Img Shields](https://shields.io)
- [Choose an Open Source License](https://choosealicense.com)
- [GitHub Pages](https://pages.github.com)
- [Animate.css](https://daneden.github.io/animate.css)
- [Loaders.css](https://connoratherton.com/loaders)
- [Slick Carousel](https://kenwheeler.github.io/slick)
- [Smooth Scroll](https://github.com/cferdinandi/smooth-scroll)
- [Sticky Kit](http://leafo.net/sticky-kit)
- [JVectorMap](http://jvectormap.com)
- [Font Awesome](https://fontawesome.com)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[mailgene]: https://www.npmjs.com/package/mailgen

## License

[ISC](LICENSE) © 2021 unblockme <unblockme.tech@gmail.com>

> A GitHub App built with [Probot](https://github.com/probot/probot)
