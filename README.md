# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

https://www.youtube.com/watch?v=bMknfKXIFA8&t=594s


Make sure you have installed node js & npm 
To check this 
->node -v (22.20.0)
->npm -v  (11.6.1)
If not then install it first to proceed React.

React: 17.0.2
React DOM: 17.0.2
React Router: 6.30.6
Webpack: 5
webpack-dev-server: 6



1. Create new Project->npx create-react-app my-react-app  
	  wait--(it will take few mins to install all react dependencies like react, react-dom, react-scripts etc)
2. Start server->cd my-react-app 
3. Install react 17-> npm install react@17 react-dom@17
4. For React Router > npm install react-router-dom@6 
5. and run-> npm start  
6. Open browser with-> http://localhost:3000/

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.



===============================================================================
React Application Course
===============================================================================

https://www.youtube.com/watch?v=bMknfKXIFA8&t=594s


Make sure you have installed node js & npm 
To check this 
->node -v
->npm -v 
If not then install it first to proceed React.


1. Create new Project->npx create-react-app my-react-app  
	  wait--(it will take few mins to install all react dependencies like react, react-dom, react-scripts etc)
2. Start server->cd my-react-app 
3. and run-> npm start  
4. Open browser with-> http://localhost:3000/



=============================================
What we have to Learn
=============================================
1. JSX 
2. Props
3. Array.map()
4. Data Mapping
5. Web App (Dynamic:Read/Write/Update)[Static Example: News, Blogs, Recipes etc]
   -Forms, Event Listener, (Props vs State), Conditional Listening
   Props: A value which is comming from the above as Properties. It is immutable.
   State: React.useState(0)It is a value which is maneged by component. 
          It is mutable(changed). Similar to the varibles declared inside a function.
   const [count, setCount] = React.useState(0);
   Passing data to component: Pass data to another compnent (props or state)
   Forms & Event Listeners : onClick....
   API Calls & Effects : React.useEffect() -> fetch()...
   React Router: For multiple HTML pages interaction > npm install react-router-dom@6   {this is compatible with react @17}
   CSS-in-JS : css in Javascript directly
   More Hooks: 
   <Bob Ziroll> : https://www.youtube.com/watch?v=bMknfKXIFA8&t=594s
   
6. Form, Fields, Button
7. Rest API call and React.useEffect()
8. Header Token



=============================OR Create Project Manually==================================

Create new folder for react-web-page

mkdir react-app-devs
cd react-app-devs
npm init -y

1. Install react 17->npm install react@17 react-dom@17
2. Install webpack ->npm install --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin 
3. Install Babel 7 ->npm install --save-dev @babel/core@7 @babel/preset-env@7 @babel/preset-react@7 babel-loader
5. Create folders -> public and src -> put public/index.html & inside src/index.js; index.css; etc
6. Create all these files inside the project folder ->.babelrc
{
  "sourceType": "module",
  "presets": [
    ["@babel/preset-env", {
      "modules": "commonjs"
    }],
    ["@babel/preset-react", {
      "runtime": "classic"
    }]
  ]
}

├── package.json

└── webpack.config.js

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",

    entry: "./src/index.js",

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ],

    devServer: {
        static: {
            directory: path.join(__dirname, "dist")
        },
        port: 3000
    }
};

--->
6. Create public/index.html
<!DOCTYPE html>
<html>
<head>
    <title>React 17 Devs</title>
</head>
<body>

<div id="root"></div>

</body>
</html>
7. and index.js ->
function Page(){
    return (
        <div>
            <h1>It is my first React page.</h1>
        </div>
    )
}

ReactDOM.render(
    <Page />, 
    document.getElementById("root")
)

7. Start it-> npm start
8. Open browser (if not opened): http://localhost:3000
