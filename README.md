# unblockme

> A GitHub App built with [Probot](https://github.com/probot/probot) that An application that is triggered to seek for technical assistance from mentors,pod leaders, fellows, etc

Unblockme is a way to indicate the need for assistance from a pod leader, a mentor or other fellows.
All one needs to do is to create a markdown file with the name unblockme.md.
The file should contain the following fields:
[Source of assistance]

- Podleader assistUnblockme is a way to indicate the need for assistance from a pod leader, a mentor or other fellows.
  All one needs to do is to create a markdown file with the name unblockme.md.
  The file should contain the following fields:
  [Source of assistance]
- Podleader assist
- Mentor assist
- Fellows assist

[Blocker Details ]

- Repo name
- Description
- Filename (optional)
- line number(optional)
- Mentor assist
- Fellows assist

[Blocker Details ]

- Repo name
- Description
- Filename (optional)
- line number(optional)

## Usage

### Install the app on a repository

- https://github.com/apps/unblock-me

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

## Docker

```sh
# 1. Build container
docker build -t unblockme .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> unblockme
```

## Contributing

If you have suggestions for how unblockme could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2021 Jida Asare <jakazzy@gmail.com>
