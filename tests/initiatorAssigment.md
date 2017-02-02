# Testing *Initiator.js*

## 1. Create empty **initiator.js** file on tests folder

## 2. Make necessary requires

Hints:
  * the code itself ( use **require(pathToFilename)** )
  * chai assertion to use assert module see [here](https://github.com/lpimenta-ptc/Js-unit-tests/wiki#chai---assert)
  
## 3. Indentify dependencies & refactor app code
Hints:
  * window
  
## 4.TESTING

### 4.1 Assert that Number has formatMoney prototype

Hints:
  * if method exists in object this condition is true:
  `typeof object.method === "function"`

### 4.2 Assert that __1200__ formats to __€ 1.200,00__ 
Hints:
  * use **global** to simulate **store object**
  * on store inject values need
  * create **setStore** function that accepts parameters with default values to create the store object 
  * make the asserts and calls to setStore necessary
  
### 4.3 Refactor code so that setStore and require will be called on the same function

  * create a new function named **reloadInitiator** were:
    * prototype must be **deleted**,
    * **require cache** must be clean
    * new require must be done
  * rename setStore to **setStoreAndInitialize**, this function must call at the end **reloadInitiator**
  
Note: In each test we must recreate the prototype and clean required cache

### 4.4 Make dataProvider to test various scenarios 
