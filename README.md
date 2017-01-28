# Js-unit-tests

## Necessary Packages

In order to begin tests we need these packages: 
- mocha
- chai

To spy, stub or mock we need:
- sinon

In order to have test coverage reporting:
- istanbul


### Setup (if package.json is not set)

```javascript
npm istall mocha --save-dev
npm install chai --save-dev
npm install sinon --save-dev
npm install istanbul --save-dev
``` 

### Setup (when package.json is properly set)

```javascript
npm install
```

## Source code

Code to be tested is in [app](./app) folder

## How to run tests

```
npm test
```

or

```
./node_modules/mocha/bin/mocha tests/*.js
```

## Run tests with Coverage

```
./node_modules/.bin/istanbul cover node_modules/.bin/_mocha tests/*.js
```
