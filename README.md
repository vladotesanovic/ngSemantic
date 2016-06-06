[![GitHub version](https://badge.fury.io/gh/vladotesanovic%2FngSemantic.png)](http://badge.fury.io/gh/vladotesanovic%2FngSemantic)
[![Dependency Status](https://david-dm.org/vladotesanovic/ngSemantic.svg)](https://david-dm.org/vladotesanovic/ngSemantic)
[![Build Status](https://travis-ci.org/vladotesanovic/ngSemantic.svg?branch=master)](https://travis-ci.org/vladotesanovic/ngSemantic)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/hyperium/hyper/master/LICENSE)

# Angular2 & Semantic UI
<p align="center">
  <img src="http://i.imgur.com/SCTxyan.jpg" alt="Angular 2"/><br/>
  <a href="http://www.angular.io" target="_blank">Angular2</a> - <a href="http://semantic-ui.com" target="_blank">Semantic UI</a> 
</p>

## Live demo
<a href="https://ng-semantic.herokuapp.com" target="_blank">ng-semantic.herokuapp.com</a>

##  Angular 2 QuickStart ( rc.1 ) with ngSemantic
https://github.com/vladotesanovic/angular2-quickstart-ngsemantic

## Important!
<ul>
   <li>Angular 2 version: rc.1</li>
</ul>
        
## Installation
```bash
npm install ng-semantic --save
```

Semantic UI ( minified versions of css and js ) must be loaded in index.html

```html
<link type="text/css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/semantic.min.css" />

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/semantic.min.js"></script>

<!-- Add this after Angular2 bundles -->
<script src="node_modules/ng-semantic/bundles/ng-semantic.js"></script>
```
 
## Use

```javascript
import {Component} from '@angular/core';
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";

@Component({
selector: 'demo-cmp',
directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES],
template: `
 <sm-segment class="raised">
    Hello
 </sm-segment>
 `
})
export class DemoComponent {}
```

## Development
```bash
git clone https://github.com/vladotesanovic/ngSemantic.git
cd ngSemantic

# install dependencies
npm install && npm run typings

# Uncomment in index.html file
<!-- DEVELOPMENT
<script src="systemjs.config.js"></script>
<script>
System.import('/demo/app/bootstrap').then(null, console.error.bind(console));
</script>
-->

# Comment out
<script src="demo/vendor/bundle.min.js"></script>
        
# compile demo project
npm start
```

## Components

  - sm-accordion
  - sm-button
  - sm-loader
  - sm-header
  - sm-message
  - sm-popup
  - sm-segment
  - sm-modal
  - sm-sidebar
  - sm-dimmer
  - sm-flag
  - sm-input
  - sm-checkbox
  - sm-textarea
  - sm-form
  - sm-progress
  - sm-card
  - sm-tabs & sm-tab
  - sm-list
  - sm-item
  - sm-dir-tooltip
  - sm-dir-popup
  - sm-dir-sidebar
  - sm-dir-dimmer
  - sm-dir-modal
   
## Licence 

MIT License