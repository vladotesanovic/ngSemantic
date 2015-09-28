# Angular2 & Semantic UI kickstarter
<p align="center">
  <img src="http://i.imgur.com/SCTxyan.jpg" alt="Angular 2"/>
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

## Licence 

MIT