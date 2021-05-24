<h1 align="center">Welcome to search-engine 🔍</h1>
<p>
  <a href="https://www.npmjs.com/package/search-engine" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/search-engine.svg">
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> A command line application to search different types of data and return the results in a human readable format.

## Application Instructions

Using the provided data (tickets.json and users.json and organization.json) write a simple command line application to search the data and return the results in a human readable format.

- Feel free to use libraries or roll your own code asyou see fit. However, please do not use a database or full text search product as we areinterested to see how you write the solution.
- Where the data exists, values from any related entities should be included in the results,i.e. searching organization by id should return it's tickets and users.
- The user should be able to search on any field, full value matching is fine (e.g. "mar" won't return "mary").
- The user should also be able to search for empty values,e.g. where description is empty. Search can get pretty complicated pretty easily, we just want to see that you can code a basicbut efficient search application. Ideally, searchresponse times should not increase linearly asthe number of documents grows.You can assume all data can fit into memory on a single machine.

# Getting started
### Prerequisites

- [node](https://nodejs.org/en/), Run ` node --version` in terminal to verify
- npm comes with node

### Installation

Clone the repository
```shell
$ git clone https://github.com/ooanishoo/search-engine
$ cd search-engine
```

This is the directory/file structure once you clone the repository from the git.

```sh

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
- [jest](https://facebook.github.io/jest/docs/getting-started.html) : A framework to write unit tests
- [inquirer](https://www.npmjs.com/package/inquirer): A collection of common interactive command line user interfaces.
- [eslint](https://www.npmjs.com/package/eslint): To lint typescript files
- [prettier](https://www.npmjs.com/package/prettier): For consistent code formatting.


## Author

👤 **Anish Maharjan**

* Github: [@ooanishoo](https://github.com/ooanishoo)
* LinkedIn: [@https:\/\/www.linkedin.com\/in\/ooanishoo\/](https://linkedin.com/in/https:\/\/www.linkedin.com\/in\/ooanishoo\/)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_