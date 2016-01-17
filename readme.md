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

## Use in your project
<a href="https://ng-semantic.herokuapp.com" target="_blank">Installation</a>
<ul>
   <li>It is built on SystemJS loader</li>
   <li>jQuery is required</li>
   <li>There is no bundled version yet.</li>
</ul>
<ul>
  <li>npm install ng-semantic --save</li>
  <li>Semantic UI must be installed in public folder ( dist folder must be public )</li>
  <li>In your index page load:
    <ul>
      <li>semantic.min.css</li>
      <li>jQuery</li>
    </ul>                
   </li>
  <li>Configure SystemJS loader: <a href="https://gist.github.com/vladotesanovic/596c41d819a32bd220da" target="_blank">Gist link ( config.js )</a></li>
</ul>
        
## Development
```bash
git clone https://github.com/vladotesanovic/ngSemantic.git
cd ngSemantic

# install dependencies
npm install

# build local files
npm run develop:build

# local development server
npm run develop:server
```

## Components

  - sm-header
  - sm-message
  - sm-popup
  - sm-segment
  - sm-modal
  - sm-tabs & sm-tab
  - sm-list
  - sm-dir-tooltip
  - sm-dir-popup
  - sm-dir-modal
   
## Licence 

MIT