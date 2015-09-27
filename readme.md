# Angular2 & Semantic UI kickstarter
<p align="center">
  <img src="https://lh6.googleusercontent.com/vcQVSLsjLyRZE1-D9TKjW3CxX9OgGkOvRksen7UovfWB5VqsVz26mGCf2PTU1yTn7jouo5YMjL1_qpU=w1511-h625" alt="Angular 2"/>
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