# Angular2 & Semantic UI kickstarter

## Dependecies
What you need to run this app:
* NodeJs 
* NPM ( Node package manager )

## Install
```bash
git clone https://github.com/vladotesanovic/Angular2-Semantic-UI-kickstarter.git
cd angular2-semantic-ui-kickstarter

# Install dependencies
npm install

# Navigate to semantic folder and install it
cd semantic
npm build

# go back to root directory and run local server
cd ..
gulp
```

Browser will open app on http://localhost:3000 ( change port in gulp.js )
Each file creation or file edit in src/ folder will trigger gulp build process, therefore there is no need for browser refresh or re-run of gulp script.