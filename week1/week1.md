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
-   Components enable us to break down the entire UI in to smaller reusable pieces
-   Different kinds of components can be defined in React

-   Component Conventions

    -   User-defined component names must always start with a Capital Letter
    -   Tags starting with lowercase latter are treated as DOM tags

-   Create components
    
    -   A new components needs to import React and { Component }

> import React, { Component } from "react";

## State

-   Each component can store its own local information its state

    -   Private and fully controlled by the component
    -   Can be passed as **props** to children

-   **Only class components** can have local state

    -   So if you need to store the state, you need to implement that component as class component
    -   For components where the state is not storage, these have component

### State declared within the constructor:

    class Menu extends Component {
        constructor(props){
            super(props)
            this.state{
            selectedDish: null
            }
        }
    ...
    }


### Modifing state

Never do:


	this.state.sekecteDish = dish;

State should only be modified using setState()

    onDishSelect(dish){
        this.setState({
            selectedDish: dish
        })
    }

## Props

-   Is a easy way of a parent component passing information to the child component through.
-   A parent component maybe storing the **state and the information can be passed to the child component through**
-   JSX attributes are passed into a component as a single object
    -   Available in the component as "props"
    -   Can pass in multiple attributes
    -   Cannot modify props within the component

#### Example

> Here the dishes are available as props within the Menu Component and can be accessed as this.props.dishes

    <Menu dishes={this.state.dishes}/>

> Here dish is available as props within the Dishdetail Component and can be accessed as this.props.dish, and comments as this.props.comments

    <Dishdetail dish={this.state.dishes} comments={this.state.comments}/>

## Handling Events

-   Handling events is similar to the way you handle events on DOM elements:
    -   Use camelCase to specify events
        -   onClick
        -   onFocus
        -   onBlur
        -   ...
 

### Example

    <Card onClick={()=>this.onDishSelect(dish)}>

## Lifting State Up

-   Sometimes several components may share the same data

> Very often, your react application will be implemented as a hierarchy of components, so in that case you may wish to lift the state up to an ancestor of the current component.

### Example

> if several components have shared state are any change to state needs to be automatically seen by all these components, the it is better to move the state to on of the ancestors, common of all these components, and ensure that any state changes will be sent back up that common ancestor.

-   Changes to data in one component needs to be reflected to another component

## List and Keys

-   Lists are handled similar to JavaScript
-   Keys should ve given to elements inside the array
    -   Help identify which item have changed, are added or removed

> For eache of items it is important specify the keys for each element inside an array, the reason to specify a key in react, is that whe there are changes to the number of items in the list, maybe a new item is added into the list or an items is removed from the list, any such change to the data may cause re-rendering of the list items. These keys are used by reacto identify wich item have been remove.

**React only modifes thoes parts of the gum tree that need to updated**

### Example

    const menu = this.props.dishes.map((dish) => {
        return(
            <div key={dish.id}>
                <h1>{dish.name}</h1>
                <p>{dish.description}</p>
            </div>
        )
    })
