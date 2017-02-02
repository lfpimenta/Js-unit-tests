
# Testing *weekday.js*

## 1. Create empty file *weekday.js* on tests folder

## 2. Put necessary requires 
Hints:
  * Import the code to be tested ( use require(pathToFilename) )
  * Use **chai** assert module - see [here](https://github.com/lpimenta-ptc/Js-unit-tests/wiki#chai---assert)

## 3. Add necessary test blocks skeletons 

More info in [wiki](https://github.com/lpimenta-ptc/Js-unit-tests/wiki/Mocha-Basic-Blocks) 

## 4. TESTING 

### 4.1 Unit Testing

#### a. Add first test to assert monday 
Hints:
  * Make sure that weekday object is correctly **instantiated**
  * Assert that the result is the expected one.  See [this](https://github.com/lpimenta-ptc/Js-unit-tests/wiki#chai---assert) for more info

#### b. Make testing fail and correct it again 
Steps:

  * Make a **wrong assertion** and run the test
  * **Correct** the assertion and run

#### c. Testing weekday with a callback - please use tuesday assertion
Hints:
  * Define a var named **callBack** that points to a function that for example **prefix** the **result** parameter with string **'Day: '**
  * Invoke function **with** the callback and assert the expected result

#### d. Use sinon to garantee that callback function is called and with correct parameters
Hints:
  * Require **sinon**
  * Make a similar test as the last one, but **inject a sinon spy** instead of a callback
  * Asserts should be done with sinon's **calledOnce** and **calledWith** the expected value
More info on [wiki](https://github.com/lpimenta-ptc/Js-unit-tests/wiki#sinon)
