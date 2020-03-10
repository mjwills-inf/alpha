<!-- prettier-ignore-start -->

mkdir []
touch []

git init
git remote add origin []

npm init

touch [.gitignore] /->
    "node_modules"

npm install [date-fns] --save
npm install webpack webpack-cli --save-dev

./node_modules/.bin/webpack index.js --mode=development 
          - runs webpack creates dist/main.js

touch [webpack.config.js] /->
    module.exports = {
      mode: 'development',
      entry: './index.js',
      output: {
        filename: 'main.js',
        publicPath: 'dist'
      }
    };
          - "./node_modules/.bin/webpack" now run webpack with configs

npm install @babel/core @babel/preset-env babel-loader --save-dev 
          - core is main element 
          - preset is preset of what js features to transpile 
          - loader enables with webpack

[webpack.config.js] /-> (add after output obj) ->  
    module: {
    rules: [
      {
        test: /\.js\$/,
        exclude: /node_modules/,
          use: {
          loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    }
          - instruct webpack to find .js files (except node_modules) 
          - apply babel transpilation using babel loader with preset

[package.json] /-> (add in scripts obj) ->
    "build": "webpack --progress --mode=production",
    "watch": "webpack --progress --watch"

npm install webpack-dev-server --save-dev

[package.json] /-> (add in scripts obj) ->
    "server": "webpack-dev-server --open"

/dist = index.html, main.js, /css
/src = index.js, /modules

//////////////////////////////////////////////////////// - Get started docs

npm install --save-dev --save-exact prettier
npm install eslint --save-dev

npx eslint --init 
          - creates config file for eslint - will have set up questions

/////////////////////////////////////////////////////// - Traversy

npm i -D eslint prettier eslint-plugin-prettier eslint-config-prettier esling-plugin-node eslint-config-node 
          - (i -D) shorthand for 'install' and '--save-dev' 
          - core packages for eslint & prettier 
          - prettier plugin and config for eslint 
          - node plugin and config for eslint

npx install-peerdeps --dev eslint-config-airbnb 
          - installs airbnb and assocciated dependencies 
          - (import, react, react-hooks, jsx-a11y)

touch [prettierrc] /->
    {
      "singleQuote": true
    } 
          - prettier config file, can add any prettier rules

[eslintrc.json] /->
    {
      "extends": ["airbnb", "prettier"],
      "plugins": ["prettier"],
      "rules": {
        "prettier/prettier": "error",
        "no-unused-vars": "warn",
        "no-console": "off",
        "func-names": "off"
      }
    }

<!-- prettier-ignore-end -->
