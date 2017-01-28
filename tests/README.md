# Testing *weekday.js*

## 1. Create empty file *weekday.js* on tests folder (1 min)

## 2. Put necessary requires (1 min)
  - the code itself
  - chai assertion to use assert module

## 3. Add necessary test blocks skeletons (2-3 min)

Main blocks are:
  - describe
  - it

More info on [me](https://github.com/lpimenta-ptc) or [mocha js site](https://mochajs.org/#pending-tests) 

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

### 4.2 Integration testing

#### a. Lets test weekday with i18n and translate for example Monday to Segunda-feira (5-10 min)

  First you need to *require i18n*, then you need to make callback to translation on *pt_PT* (use closure scope)

# Testing *Initiator.js*

## 1. Create empty *initiator.js* file on tests folder ( 1 min)

## 2. Make necessary requires (1 min)
  * App Code
  * Chai
  
## 3. Indentify dependencies & refactor app code (5 min)
  * window
  * store - inject values need - put this in a function
  
## 4.TESTING

### 4.1 Assert that Number has formatMoney prototype (2 min)

### 4.2 Assert that __1200__ formats to __€ 1.200,00__ (2 min)

### 4.3 Refactor to have a dataProvider situation (5-10 min)

Note: In each test we must recreate the prototype and clean required cache
