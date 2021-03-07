# unblockme

> A GitHub App built with [Probot](https://github.com/probot/probot) that An application that is triggered to seek for technical assistance from mentors,pod leaders, fellows, etc

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
