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

## Usage

Complete documentation for this project is available at https://jflynn7.github.io/
