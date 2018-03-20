# SimpleForms

A simple(ish) module for creating accessible, reactive forms.

**NB**: This is still in experimental stages, I would **NOT** recommend this in production....yet.

## Advanced Usage

Complete documentation for this project is available at https://jflynn7.github.io/

## Simple Usage

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

#### Add Custom styles to element
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

#### Add Custom Accessibility Options to element

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


## Repo

WIP Repo can be found at https://github.com/jflynn7/ng2-simple-forms
