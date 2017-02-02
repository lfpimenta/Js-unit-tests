
# Integration testing

Lets test weekday with i18n and translate for example Monday to Segunda-feira 

## 1. Open **weekDay.js.js** test file on tests folder

Hints:

  * require **i18n**
  * create var **callBackTranslatePt** to be equal to a function with parameter phrase that returns the translation function of that phrase **locked** to **pt_PT** (use closure scope)
  * use **callBackI18n** on function call
  * make the correct assertions
