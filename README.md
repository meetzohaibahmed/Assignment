This post will outline how to set up your local dev environment for this project.

## Requirements

> **Note:** We need to make sure we have the following versions installed at the minimum

-   Node: 16
-   NPM: 8

The following commands can be used in the terminal to check your current versions

```
node --version
npm --version
```

To run the development server

```
npm run dev
```

To run the unit tests

```
npm run test
```

To run with docker

```
docker build -t converter

docker run -p 8888:8888 converter
```
