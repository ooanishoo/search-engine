<h1 align="center">Welcome to search-engine 🔍</h1>
<p>
  <a href="https://www.npmjs.com/package/search-engine" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/search-engine.svg">
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> A command line application to search different types of data and return the results in a human-readable format.

## Application Instructions

Using the provided data (tickets.json and users.json and organization.json) write a simple command line application to search the data and return the results in a human-readable format.

- Feel free to use libraries or roll your own code as you see fit. However, please do not use a database or full-text search product as we are interested to see how you write the solution.
- Where the data exists, values from any related entities should be included in the results,i.e. searching organization by id should return it's tickets and users.
- The user should be able to search on any field, full value matching is fine (e.g. "mar" won't return "mary").
- The user should also be able to search for empty values,e.g. where the description is empty. Search can get pretty complicated pretty easily, we just want to see that you can code a basic but efficient search application. Ideally, search response times should not increase linearly as the number of documents grows. You can assume all data can fit into memory on a single machine.

# Getting started
### Prerequisites

- [node](https://nodejs.org/en/), Run ` node --version` in terminal to verify
- npm comes with node

### Installation

Clone the repository
```
$ git clone https://github.com/ooanishoo/search-engine
$ cd search-engine
```

This is the directory/file structure once you clone the repository from the git.

```sh
├── README.md
├── data
│   ├── organizations.json
│   ├── tickets.json
│   └── users.json
├── jest
│   └── setup.js
├── jest.config.js
├── package-lock.json
├── package.json
├── src
│   ├── ask
│   │   ├── ask.spec.ts
│   │   └── ask.ts
│   ├── index.ts
│   ├── search
│   │   ├── searchEntity.spec.ts
│   │   └── searchEntity.ts
│   ├── types
│   │   └── index.ts
│   └── utils
│       ├── index.spec.ts
│       └── index.ts
└── tsconfig.json
```
Install dependencies
```sh
npm install
```

## Run application

```sh
npm start
```

## Run in dev mode

```sh
npm run dev
```

## Run tests

```sh
npm test
```


## Packages used:
- [inquirer](https://www.npmjs.com/package/inquirer): A collection of common interactive command line user interfaces.
- [jsonfile](https://www.npmjs.com/package/jsonfile): Easily read/write JSON files in Node.js


## Author

👤 **Anish Maharjan**

* Github: [@ooanishoo](https://github.com/ooanishoo)
* LinkedIn: [@ooanishoo](https://www.linkedin.com/in/ooanishoo/)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
