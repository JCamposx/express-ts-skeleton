# Express-Typescript Skeleton App

Skeleton Express application with Mongoose, Zod and Jest, all with TypeScript.

## Introduction

This skeleton provides a foundation for starting projects with Express and
TypeScript, integrating Mongoose for database interaction, Zod for data
validation, and Jest for testing.

## Requirements

Make sure you have the following requirements installed before getting started:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/JCamposx/express-ts-skeleton.git
    ```

2. Install dependencies:

    ```bash
    cd express-ts-skeleton
    npm install
    ```

3. Configure Husky for pre-commit hooks:

    ```bash
    npm run prepare
    ```

## Usage

### Development

Create the `.env.development` environment file by copying the `.env.example`
one.

```bash
cp .env.example .env.development
```

Adjust the variables according to your requirements.

To run the application in development mode with automatic restarts (using
`nodemon`):

```bash
npm run start:dev
```

This will start the development server with TypeScript support, allowing you to
make changes and see them reflected in real-time.

### Testing

Create the `.env.testing` environment file by copying the `.env.example` one.

```bash
cp .env.example .env.testing
```

Adjust the variables, considering not repeating the `PORT` and `MONGODB_URI`
with those of `.env.development`.

To run your tests:

```bash
npm run test
```

This will run all your tests, which are files that end with the `.test.ts`
extension.

To run your tests in watch mode:

```bash
npm run test:watch
```

This will run any tests that are new or modified since the last commit, allowing
you to make changes and rerun the tests automatically.

### Production

Create the `.env.production` environment file by copying the `.env.example` one.

```bash
cp .env.example .env.production
```

To build the production-ready version of the application:

```bash
npm run build
```

This will compile TypeScript files into the `dist` directory.

To start the application in production mode:

```bash
npm start
```
