[![GitHub version](https://badge.fury.io/gh/vladotesanovic%2FAngular2-Semantic-UI-kickstarter.png)](http://badge.fury.io/gh/vladotesanovic%2FAngular2-Semantic-UI-kickstarter)
[![Dependency Status](https://david-dm.org/vladotesanovic/Angular2-Semantic-UI-kickstarter.svg)](https://david-dm.org/vladotesanovic/Angular2-Semantic-UI-kickstarter)


# Angular2 & Semantic UI kickstarter
<p align="center">
  <img src="http://i.imgur.com/SCTxyan.jpg" alt="Angular 2"/><br/>
  <a href="http://www.angular.io" target="_blank">Angular2</a> - <a href="http://semantic-ui.com" target="_blank">Semantic UI</a> 
</p>

## Dependecies
What you need to run this app:
* NodeJs 
* NPM ( Node package manager )

## Install
```bash
git clone https://github.com/vladotesanovic/Angular2-Semantic-UI-kickstarter.git
cd Angular2-Semantic-UI-kickstarter

# Install dependencies ( default settings for semantic )
npm install

# Navigate to semantic folder and install it
cd semantic
gulp build

# go back to root directory and run local server
cd ..
gulp
```

Browser will open app on http://localhost:3000 ( change port in gulp.js ).

Each file creation or file edit in src/ folder will trigger gulp build process, therefore there is no need for browser refresh or re-run of gulp script.

## ToDo
* More Semantic UI components
* Describe directory structure in readme file
* Add build task in gulp.js. ( new folder will be generated build/ ) 
* Add tests

## Licence 

MIT