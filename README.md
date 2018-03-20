# SimpleForms

A simple(ish) module for creating accessible, reactive forms.

**NB**: This is still in experimental stages, I would **NOT** recommend this in production....yet.

## Advanced Usage

Complete documentation for this project is available at https://jflynn7.github.io/

## Simple Usage

# Table of Contents

* [Create A FormElement](#create-a-formelement)
    * [Add Properties to FormElement](#add-properties-to-formelement)
    * [Add Custom Styles to element](#add-custom-styles-to-element)
    * [Add Custom Accessibility to element](#add-custom-accessibility-to-element)
* [Rendering Elements](#rendering-elements)
* [Inline Forms](#inline-forms)
    * [Creating FormDetails](#creating-formdetails)
    * [Using the FormComponent with FormGroup (Inline Forms)](#using-the-formcomponent)
* [Loose Forms](#loose-forms)
    * [Rendering Elements in Loose Forms](#rendering-elements-in-loose-forms)
  

#### Create A FormElement

Before you can start rendering elements, you'll need to start creating! `SimpleFormsBuilder` exposes a function to quickly create a default option by type. For example, to create a text input element, you can do:

```
myFirstFormElement: FormElement = builder.createElement('text', 'My First Form Element');
```

This will create a `FormElement` object of `type='text'`, with a `label` of 'My First Form Element' and an `inputId` of 'myFirstFormElement' which is calculated from the label.

The `inputId` can be overriden by providing `FormElementOptions` as the third parameter from `createElement`, for example:

```
myFirstFormElement: FormElement = builder.createElement('text', 'My First Form Element', { inputId: 'myCustomInputId' });
```

##### Add properties to FormElement

`createElement` will create a simple element with no additional properties (unless provided in the `FormElementOptions` object passed as the third parameter. However, you can add properties (for example, validation properties, or options/option groups to an element with the `setProperty` function as follows:

```
myFirstFormElement.setProperty(Properties.Required(), true);
myFirstFormElement.setProperty(Properties.MinLength(), 8);
```

When you move on to creating a `FormGroup` from your elements, these properties are used to create the relevent `Validators` that Angular uses to validate your form element.

##### Add Custom styles to element
By default, form elements use Bootstrap styles, but these can be overridden using the `setStyle` function on `FormElement` as follows:

```
myFirstFormElement.setStyle(Styles.ElementWrapper(), 'customElementWrapperCss');
myFirstFormElement.setStyle(Styles.ElementInput(), 'customInputCss');
myFirstFormElement.setStyle(Styles.ElementLabel(), 'customLabelCss');
```

Because of the nature of CSS specificity, you need to first set a custom wrapper for your form element, so that you can target the custom css in your styles. An example of theming in a styles scss file looks like this:

```
// Theming example
.form-group {

  &.customElementWrapperCss {
    // Custom wrapper styles

    .customLabelCss {
      // Custom label styles
    }

    .customInputCss {
      // Custom input styles
    }

    .customGroupLabelCss {
      // Custom group label styles
    }

    .customFieldsetCss {
      // Custom fieldset styles
    }

    .customLegendCss {
      // Custom legend styles
    }

    .customOptionLabelCss {
      // Custom option label styles (radio button/checkbox etc)
    }

  }
}
```

**NB: All elements are wrapped in a `form-group` class by default. This is a Bootstrap concept, but also aids with theming your elements**

The `Styles` class exposes the available options that can be overriden.

```
export class Styles {
  static ElementWrapper(): string { return 'wrapperCssClass'; }
  static GroupLabel(): string { return 'groupLabelCssClass'; }
  static ElementLabel(): string { return 'elementLabelCssClass'; }
  static ElementInput(): string { return 'elementInputCssClass'; }
  static Fieldset(): string { return 'fieldsetCssClass'; }
  static Legend(): string { return 'legendCssClass'; }
  static OptionLabel(): string { return 'optionLabelCssClass'; }
}
```

##### Add Custom Accessibility Options to element

Accessibility options are automatically set when you create the element (using input labels for aria-labels, etc), but should you wish to override these default options, you can use the `setAccessibility` function on `FormElement` as follows:

```
myFirstFormElement.setAccessibility(Accessibility.AriaLabel(), 'My First Aria Label');
```

The `Accessibility` class exposes the available options that can be overriden.

```
export class Accessibility {
  static AriaLabel(): string { return 'ariaLabel'; }
  static AriaDescribedBy(): string { return 'ariaDescribedBy'; }
  static AriaLabelledBy(): string { return 'ariaLabelledBy'; }
  static AriaReadOnly(): string { return 'ariaReadOnly'; }
}
```

### Rendering Elements

The simplest way to use a `FormElement` is to render it directly in your template, and subscribe to its output. This is useful for situations such as search boxes, or mailing list signups, etc, as it doesn't require the element to be part of a parent form, and can be rendered by type as follows:

```
<app-text-input (changeEmitter)="myReceivingFunction($event)" [elementData]="myFirstFormElement"></app-text-input>
```

Note the use of `(changeEmitter)` here. The change emitter emits a `ComponentValue` whenever the field value changes, which you can subscribe to and decide what to do with the value after. When rendering your element, pass a function to the `(changeEmitter)` property as above, then in your component you can receive the value. e.g.

```
myReceivingFunction(value: ComponentValue) {
   // do something cool
}
```

The `ComponentValue` object passed to your function takes the following form:

```
export class ComponentValue {
  inputId: string;
  value: any;
  isValid: boolean;

  constructor(data: { inputId: string, value: any, isValid: boolean }) {
    this.inputId = data.inputId;
    this.value = data.value;
    this.isValid = data.isValid;
  }
}
```

The `inputId` is simply the input ID of the rendered element emitting the value. This is useful when you use the same function to deal with all rendered by type elements on a page (so you can determine **which** element is giving you the value.

The `value` is just that, the value being emitted from the element.

`isValid` is a boolean value, determined by validation properties added to the field. i.e `true` === value satsfies all the Validators.

### Inline Forms

Whilst rendering elements individually by type can be handy, in situations where you have a lot of elements that are part of the same form, an Inine form allows to create a full, validatable (is that a word? 🤔) form from an array of `FormElements`. We can then use the `FormComponent` to render an inline form from those elements (inline === elements rendered one after another, in array order).

#### Creating FormDetails

To render a complete form, we need a `FormGroup` which will track the state and validity of the form, as well as an array of `FormElements` that make up the complete form. ng2-simple-forms provides a helper function to do just that;

```
myFirstFormElement: FormElement = builder.createElement('text', 'My First Element', { Properties.Required(): true });
mySecondFormElement: FormElement = builder.createElement('text', 'My Second Element', { Properties.MinLength(): 8 });

myFormDetails: FormDetails = builder.toFormGroup([this.myFirstFormElement, this.mySecondFormElement]);
```

#### Using the FormComponent

Now, we have a set of elements, and a `FormGroup`, you can use the `FormComponent` to render the complete form from the `FormDetails` object.

```
<app-form [form]="myFormDetails"></app-form>
```

This will render all of our elements in a complete form (one after another, in array order). This is handy when you just need to quickly fire out a form without any consideration of element placement. Additionally, we can set a form title and form subtitle as follows:

```
<app-form [form]="myFormDetails" [formTitle]="'My Form Title'" [formSubtitle]="'A simple form created with ng2-simple-forms'"></app-form>
```

Which will do the same thing, but with an added title and subtitle.

### Loose Forms

Inline forms are handy for rapidly developing simple, ordered forms. But what if we do care about the element placement? In that case, use a Loose form (full disclosure, I fully just made these names up, they aren't Angular conventions 😂)

For a loose form, we create the `FormElement` objects and the `FormDetails` object in the same way as before, the only real difference is in the way we render the elements.

#### Rendering Elements in Loose Forms

ng2-simple-forms provides a `.get()` function on the `FormDetails` object to allow us to use the `FormElementComponent` which dynamically renders the correct element component based on the `type`. That is to say, with a loose form, we can render the form like so:

```
<app-form-element [formGroup]="myFormDetails.formGroup" [formElement]="myFormDetails.get('myFirstElement')"></app-form-element>
<app-form-element [formGroup]="myFormDetails.formGroup" [formElement]="myFormDetails.get('mySecondElement')"></app-form-element>
```

Using the wrapper like this, means we can put the form elements **anywhere** we want (on the same page), but they will still be part of the same `FormGroup`, so we can get the complete forms value by:

```
this.myFormDetails.formGroup.getRawValue()
```

## Repo

WIP Repo can be found at https://github.com/jflynn7/ng2-simple-forms
