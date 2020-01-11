# CODING CHALLENGE
Please create a SPA using latest Angular for searching of open GitHub issues.

Link for GitHub API: https://developer.github.com/v3/

Requirements:
- Add search box at the top of the page allowing to do search request when two or more
characters was typed. No more than one request per second should be fired. Please also trim all
search queries - white characters alone shouldn’t trigger next requests.
- Remember that user is interested only in issues with status “open”.
- If there are some results, list them below query field. If not, display “try a different query”
comment. If nothing was typed yet, display “your search results will appear here” comment.
- Display loading indicator in the place of the list, while awaiting response from github API.
- Single issue on that list should contain:
  - title of an issue as a clickable link to it
  - description (body) of an issue
  - issue creation date
  - list of labels
  - information about an author: nick (as a link to profile) and avatar
  - a button to star (like, love – you name it) issue
- Clicking on this star button should save information about user preferences in local storage of
web browser. Since now if this issue appears in further searches, star button should be in active
state. Clicking it again should do the opposite.
- For UI part, please use already created components: Bootstrap, Material or similar.

# BUILD & RUN

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.22.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
