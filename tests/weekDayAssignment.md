
# Testing *weekday.js*

## 1. Create empty file *weekday.js* on tests folder (1 min)

## 2. Put necessary requires (1 min)
Hints:
  - the code itself ( use require(pathToFilename) )
  - chai assertion to use assert module see [here](../wiki)

## 3. Add necessary test blocks skeletons (2-3 min)

More info in [wiki](https://github.com/lpimenta-ptc/Js-unit-tests/wiki/Mocha-Basic-Blocks) 

## 4. TESTING 

### 4.1 Unit Testing

#### a. Add first test to assert monday (5 min)
  Make sure that object is correctly instantiated and the assert the result

#### b. Make testing fail and correct it again (2 min)
  Make a wrong assertion and correct it

#### c. Testing weekday with a callback (5 min)
  Add a custom call back that for example prefix result with 'Day: ' and assert the expected result

#### d. Use sinon to garantee that callback function is called and with correct parameters (5-10 min)
  [Sinon](http://sinonjs.org/) is a very powerfull library that allows us to make [spies](http://sinonjs.org/docs/#spies).
  
  Inject a spy instead of a callback, then assert the calls with sinon's *calledOnce* and *calledWith*
  
  Note: don't forget to require it
