# Module Outline

-   Get a basic overview of JavaScript frameworks and libraries
-   Understand the architecture of an React application
-   Scaffold out a starter React application using create-react-app, the command line tool
-   Create a React component
-   Construct the React component code and the view for your component using JSX and JavaScript

---

# Introduction to React

## Setting up Your Development Environment: Git and Node: Objectives and Outcomes

-   Set up a Git repository and perform basic Git operations

-   Set up and use online Git repositories
-   Use Node-based modules to perform basic operations.

### React Vocabulary

-   One-way data flow
-   JSX
-   Components
-   State
-   Props
-   Virtual DOM
-   Element
-   Flux / Redux

## React Application Overview

-   React Element

> Is the Smallest building blocks of React Apps

        const element = <h' className="App-title"> Welcome to React </h1>

-   React Components

> The Components are made of elements

        class App extends Component{...}

-   How do render the view to the DOM?

> In the example above there is where root node, on this node the element (first param) will be renderized

         ReactDOM.render(element, document.getElementById('root'));

## Introduction to JSX

JSX === Syntactic extension to JavaScript, is the special syntax that react usu when it expresses the various react elements

    const element =  <h1>Hello, World!</h1>

-   Shorthand notation to represent JavaScript function calls that eventual to JavaScript objects

    > The HTML syntax in the code gets mapped in react into a corresponding JavaScript object here

-   Avoids artificial separation offering logic from other UI logic

    > It means that should be able to easily embed JavaScript like expressions into your JSX code, for example:

        const dish = {id:0, name:"Uthappizza"}
        return (
            <div key={dish.id} className="col-12 mt-5">
                <Media tag="li">
                    <Media body className="ml-5">
                        <Media heading>{dish.name}</Media>
                    </Media>
                </Media>
            </div>
        )

## Getting Started with ReactStrap

-   Installing dependencies

Install Bootstrap

    yarn add bootstrap

Install ReactStrap react-popper

    yarn add  ReactStrap react-popper

-   Configure to use bootstrap 4

Importing bootstrap into application, before "./index.css"

    import "bootstrap/dist/css/bootstrap.min.css";

-   Adding a navigation bar

import to apps.js react components

    import { Navbar, NavbarBrand } from "ReactStrap";

Then

    <div className="App">
            <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                </div>
            </Navbar>
        </div>
