# SimpleForms

A simple(ish) module for creating accessible, reactive forms. The repo includes the entire Angular app,
but is set up to export to a local npm package.

## Local development

* Clone the repo.
* Navigate to repo.
* Run `npm install`
* Run `ng serve`
* All development around form elements should be done in the `simple-forms` module under `src/app/modules`
* `app.component.ts` and `app.component.html` show example usage (and is a handy testing ground for changes) 


## Installation to other projects

This will be on npm as an installable package when it's finished, but for now:

* Clone the repo
* Navigate to repo.
* Run `npm run packagr` from the root. 
* Navigate to `/dist`
* Run `npm pack`
* This will create a local tarball in `/dist`
* The tarball can then be copied to your project folder and installed via:
  * `npm install <path/to/tarball>`
  * NB: Use npm 5+ to keep relative paths in your package.json


## Creating elements

Once installed, import the required types from `simple-forms` wherever you want to use them. e.g.

`import { FormDefinition, FormElement, SimpleFormBuilder } from 'simple-forms';`

Now you can create a form element object in one of two ways.

1) The simple constructor way (usefull if a form definition is coming from JSON [see FormDefinition] )

`
   new FormElement({
     inputId: 'firstName',
     type: 'text',
     label: 'First name',
     minLength: 1,
     maxLength: 20,
   })
`

2) Using the SimpleFormBuilder and `createElement` (recommended).

`SimpleFormBuilder.createElement('text', 'Simple One'),`

### Examples

#### Simple text element (inputId generated from label)

`SimpleFormBuilder.createElement('text', 'Simple One')`

#### Simple text element With explicit inputId

`SimpleFormBuilder.createElement('text', 'Simple Two', 'simpleTwoInputId')`

#### With inline configuration
```
SimpleFormBuilder.createElement('text', 'Simple Three')
  .setConfig( 'ariaLabel', 'Simple Three Aria Label')
```

#### With inline property value
```
SimpleFormBuilder.createElement('text', 'Simple Four')
  .setProperty('helpText', 'Here is some helptext!')
```

#### Add inline validation
```
SimpleFormBuilder.createElement('text', 'Simple Eight')
  .setProperty('required', true)
  .setProperty('minLength', 8)
```

#### Create checkbox group and add options.
```
SimpleFormBuilder.createElement('checkbox', 'Simple Checkbox Group')
  .setProperty('options', [
    new FormElementOption({
      value: 'test1',
      display: 'Test Checkbox One'
    }),
    new FormElementOption({
      value: 'test2',
      display: 'Test Checkbox Two'
    }),
    new FormElementOption({
      value: 'test3',
      display: 'Test Checkbox Three'
    })
  ])
```

#### Create radio group and add options.
```
SimpleFormBuilder.createElement('radio', 'Simple Radio Group')
  .setProperty('options', [
    new FormElementOption({
      value: 'test1',
      display: 'Test Radio One'
    }),
    new FormElementOption({
      value: 'test2',
      display: 'Test Radio Two'
    }),
    new FormElementOption({
      value: 'test3',
      display: 'Test Radio Three'
    })
  ])
```

#### Create standard select dropdown

```
SimpleFormBuilder.createElement('select', 'Simple Select Box')
  .setProperty('options', [
    new FormElementOption({
      value: 'test1',
      display: 'Test Checkbox One'
    }),
    new FormElementOption({
      value: 'test2',
      display: 'Test Checkbox Two'
    }),
    new FormElementOption({
      value: 'test3',
      display: 'Test Checkbox Three'
    })
  ])
```

#### Create standard select dropdown with option groups

```
SimpleFormBuilder.createElement('select', 'Simple Select Box With Option Groups')
  .setProperty('optionGroups', [
    new FormElementOptionGroup({
      groupName: 'Test Group 1',
      options: [
        new FormElementOption({
          value: 'test1',
          display: 'Test Checkbox One'
        }),
        new FormElementOption({
          value: 'test2',
          display: 'Test Checkbox Two'
        }),
        new FormElementOption({
          value: 'test3',
          display: 'Test Checkbox Three'
        })
      ]
    }),
    new FormElementOptionGroup({
      groupName: 'Test Group 2',
      options: [
        new FormElementOption({
          value: 'test4',
          display: 'Test Checkbox Four'
        }),
        new FormElementOption({
          value: 'test5',
          display: 'Test Checkbox Five'
        }),
        new FormElementOption({
          value: 'test6',
          display: 'Test Checkbox Six'
        })
      ]
    }),
    new FormElementOptionGroup({
      groupName: 'Test Group 3',
      options: [
        new FormElementOption({
          value: 'test7',
          display: 'Test Checkbox Seven'
        }),
        new FormElementOption({
          value: 'test8',
          display: 'Test Checkbox Eight'
        }),
        new FormElementOption({
          value: 'test9',
          display: 'Test Checkbox Nine'
        })
      ]
    })
```
    
# TBC...
