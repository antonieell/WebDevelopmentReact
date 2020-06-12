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

> In the exemple above there is onde root node, on this node the element (first paramm) will be redenderized

         ReactDOM.render(element, document.getElementById('root'));

## Introduction to JSX

JSX === Syntatic extenxion to JavaScript, is the special syntax that reacte usu when it expresses the various react elements

    const element =  <h1>Hello, World!</h1>

-   Shorthand notation to reproesent JaaScript function calls that evaluent to JavaScript objects

    > The HTML syntax in the code gets mapped in react into a corresponding JavaScript object here

-   Avoids aritifical separtion ofredenring logic from other UI logic

    > ir means that ou shold be able to easily embed JavaScript like expressions into your JSX code, for example:

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

## Getting Starterd with reactstrap

-   Installing dependencies

Install Bootstrap

    yarn add bootstrap

Install Reactstrap react-popper

    yarn adda reactstrap react-popper

-   Configure to use bootstrap 4

Importing bootstrap into aplication, before "./index.css"

    import "bootstrap/dist/css/bootstrap.min.css";

-   Adding a navgation abar

import to apps.js react componnets

    import { Navbar, NavbarBrand } from "reactstrap";

Then

    <div className="App">
            <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                </div>
            </Navbar>
        </div>

# React Components

-   A component returns a set of React elements that should appear on the screen
-   Compponentes enable us to brak down the entire UI in to smaller reusable pices
-   Different kinds of components can be defined in React

-   Component Convetions

    -   User-defined component names mus always start with a Capital Letter
    -   Tags starting with lowercase latters are treated as DOM tags

-   Create componentes
    -   To organize the folder structure, create a folder called componets on src fo the project, then group all your componnets there.
    -   A new componnets needs to impro React and { Componnetn }

> import React, { Component } from "react";
