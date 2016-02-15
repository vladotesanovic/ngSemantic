[![GitHub version](https://badge.fury.io/gh/vladotesanovic%2FngSemantic.png)](http://badge.fury.io/gh/vladotesanovic%2FngSemantic)
[![Dependency Status](https://david-dm.org/vladotesanovic/ngSemantic.svg)](https://david-dm.org/vladotesanovic/ngSemantic)
[![Build Status](https://travis-ci.org/vladotesanovic/ngSemantic.svg?branch=master)](https://travis-ci.org/vladotesanovic/ngSemantic)

# Angular2 & Semantic UI
<p align="center">
  <img src="http://i.imgur.com/SCTxyan.jpg" alt="Angular 2"/><br/>
  <a href="http://www.angular.io" target="_blank">Angular2</a> - <a href="http://semantic-ui.com" target="_blank">Semantic UI</a> 
</p>

## Live demo
<a href="https://ng-semantic.herokuapp.com" target="_blank">ng-semantic.herokuapp.com</a>

## Important!
<ul>
   <li>Angular 2 version: beta.6</li>
   <li>There is no bundled version yet.</li>
</ul>
        
## Installaction
```bash
npm install ng-semantic --save
```
<ul>
  <li>Semantic UI installation will be triggered. Semantic UI must be installed in public folder ( dist folder must be public )</li>
  <li>In your index.html page load:
    <ul>
      <li>semantic.min.css</li>
      <li>jQuery</li>
    </ul>                
   </li>
</ul>

Configure SystemJS loader:
```javascript
System.config({
    defaultJSExtensions: true,
    paths: {
        // DON'T CHANGE KEY OF THIS PATH, CHANGE VALUE ONLY
        // IF YOU EXPOSE node_modules as public / static dir to your app, you can remove this line.
        'semantic-ui/dist/components/*': 'assets/semantic/dist/components/*.js',
        // REQUIRED BY ANGULAR 2 ( CHANGE PATH )
        'rxjs/operator/*' : 'vendor/rxjs/operator/*.js',
    },
    map: {
        // IF YOU ARE NOT ABLE TO LOAD FROM node_modules
        // you must copy ng-semantic from /node_modules/ng-semantic 
        // ( files: semantic.js, semantic.d.ts and folder: ng-semantic )
        // and set path to it
        'ng-semantic/semantic': 'vendor/ng-semantic/semantic.js'
    },
    packages: {
        app: {
            format: 'register',
            defaultExtension: 'js'
        }
    }
});
```
        
## Development
```bash
git clone https://github.com/vladotesanovic/ngSemantic.git
cd ngSemantic

# install dependencies
npm install

# skip semantic installation ( with default settings after ), 
# this is because we already have semantic in demo/assets/semantic

# build local files
npm run build

# local development server
npm run server
```

## Components

  - sm-button
  - sm-loader
  - sm-header
  - sm-message
  - sm-popup
  - sm-segment
  - sm-modal
  - sm-sidebar
  - sm-input
  - sm-form
  - sm-card
  - sm-tabs & sm-tab
  - sm-list
  - sm-item
  - sm-dir-tooltip
  - sm-dir-popup
  - sm-dir-sidebar
  - sm-dir-modal
   
## Licence 

MIT