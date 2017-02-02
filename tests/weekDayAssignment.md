
# Testing *weekday.js*

## 1. Create empty file *weekday.js* on tests folder (1 min)

## 2. Put necessary requires (1 min)
Hints:
  * the code itself ( use require(pathToFilename) )
  * chai assertion to use assert module see [here](https://github.com/lpimenta-ptc/Js-unit-tests/wiki#chai---assert)

## 3. Add necessary test blocks skeletons (2-3 min)

More info in [wiki](https://github.com/lpimenta-ptc/Js-unit-tests/wiki/Mocha-Basic-Blocks) 

## 4. TESTING 

### 4.1 Unit Testing

#### a. Add first test to assert monday (5 min)
Hints:
  * Make sure that weekday object is correctly instantiated
  * Assert the result is the expected one see [this](https://github.com/lpimenta-ptc/Js-unit-tests/wiki#chai---assert) for more info

#### b. Make testing fail and correct it again (1 min)
Steps:

  * Make a wrong assertion and run the test
  * Correct the assertion

#### c. Testing weekday with a callback (5 min)
Hints:
  * Define a var named callBack that points to a function that for example prefix result parameter with 'Day: '
  * Invoke function with the callback and assert the expected result

#### d. Use sinon to garantee that callback function is called and with correct parameters (5-10 min)
  [Sinon](http://sinonjs.org/) is a very powerfull library that allows us to make [spies](http://sinonjs.org/docs/#spies).
  
  Inject a spy instead of a callback, then assert the calls with sinon's *calledOnce* and *calledWith*
  
  Note: don't forget to require it
