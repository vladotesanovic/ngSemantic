[![GitHub version](https://badge.fury.io/gh/vladotesanovic%2FngSemantic.png)](http://badge.fury.io/gh/vladotesanovic%2FngSemantic)
[![Dependency Status](https://david-dm.org/vladotesanovic/ngSemantic.svg)](https://david-dm.org/vladotesanovic/ngSemantic)
[![Build Status](https://travis-ci.org/vladotesanovic/ngSemantic.svg?branch=master)](https://travis-ci.org/vladotesanovic/ngSemantic)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/hyperium/hyper/master/LICENSE)
[![Support via PayPal](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.me/ngsemantic)

# Angular2 & Semantic UI
<p align="center">
  <img src="http://i.imgur.com/SCTxyan.jpg" alt="Angular 2"/><br/>
  <a href="http://www.angular.io" target="_blank">Angular2</a> - <a href="http://semantic-ui.com" target="_blank">Semantic UI</a>
</p>

## Live demo
<a href="https://ng-semantic.herokuapp.com" target="_blank">ng-semantic.herokuapp.com</a>

<ul>
   <li>Angular 2 </li>
   <li>Semantic UI version: 2.2.2</li>
</ul>

## Installation
```bash
npm install ng-semantic --save
```

## Angular CLI configuration ( Webpack )

Install `jQuery` with NPM
```bash
npm install jquery --save
```

Download <a href="https://github.com/Semantic-Org/Semantic-UI-CSS/archive/master.zip" target="_blank">Official Semantic UI bundle</a>

Add `semantic.min.css`, `semantic.min.js`, `jquery` to the `angular-cli.json` as follows:
```javascript

...

"apps": [{
  ... 
  "styles": [
      "styles.css",
      "../path/to/semantic.min.css" // 
  ],
  "scripts": [
      "../node_modules/jquery/dist/jquery.min.js",
      "../path/to/semantic.min.js"
  ],
  ...
}]


```

## Use

Then you can use in a component as follows:

```javascript
// Module
import { NgModule } from "@angular/core";
import { NgSemanticModule } from "ng-semantic";

@NgModule({
    bootstrap:    [ AppComponent ],
    declarations: [ AppComponent ],
    imports:      [ BrowserModule, NgSemanticModule ]
})
export class AppModule {}

// Component
import {Component} from '@angular/core';

@Component({
selector: 'demo-cmp',
template: `
 <sm-segment class="raised">
    Hello
 </sm-segment>
 `
})
export class DemoComponent {}
```
## Custom configuration

Semantic UI ( minified versions of css and js ) must be loaded in index.html

```html
<link type="text/css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css">

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.js"></script>
```

## Support / Donations

If you’d like to support me developing this project you’re able to do so by donating on PayPal or if you have any special needs/ feature requests don’t hesitate to send me an email.

[![Support via PayPal](https://cdn.rawgit.com/twolfson/paypal-github-button/1.0.0/dist/button.svg)](https://www.paypal.me/ngsemantic)

####  Angular 2 QuickStart with ngSemantic
https://github.com/vladotesanovic/angular2-quickstart-ngsemantic

####  Angular 2 CLI with ngSemantic
https://github.com/vladotesanovic/angular2-cli-webpack

### Development
```bash
git clone https://github.com/vladotesanovic/ngSemantic.git
cd ngSemantic

# install dependencies
npm install

# compile demo project
npm start
```

### Components

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
  - sm-rating
  - sm-dropdown
  - sm-select
  - sm-search
  - sm-textarea
  - sm-progress
  - sm-card
  - sm-shape
  - sm-tabs & sm-tab
  - sm-list
  - sm-item
  - smDirTooltip
  - smDeviceVisibility
  - smDirVisibility

## Licence

MIT License
