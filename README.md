# COMP.SE.200 Software Testing project

[![Coverage Status](https://coveralls.io/repos/github/kkouri/COMP.SE.200-Software-Testing/badge.svg?branch=coveralls-github-actions-fix)](https://coveralls.io/github/kkouri/COMP.SE.200-Software-Testing?branch=coveralls-github-actions-fix)

## Purpose of this repository

This is a project repository in Software Testing course at Tampere University.

## Tests

The 10 selected functions that were tested are:

- add.js
- eq.js
- filter.js
- get.js
- isEmpty.js
- isSymbol.js
- map.js
- memoize.js
- upperFirst.js
- words.js

Tests are located in folder `./src/tests`

Coveralls code coverage score can be found at the top of this page

## Running tests locally

In terminal:

- navigate to project root
- run `npm install`
- run `npm run test` to run tests locally
- run `npm run test-coverage` to create a coverage report

The coverage report can be found in `./coverage` folder. Find the file `./coverage/index.html` and open it in browser to see the coverage test results
