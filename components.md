# Table of Contents

-   [Overview](#React-Components)
-   [State](#State) - [Declare State](#declare-State) - [Modifying State](#modifying-state)
-   [Props](#Props)
-   [Handling Events](#Handling-Events)
-   [Lifting State Up](#Lifting-State-Up)
-   [List and Keys](#List-and-Keys)
-   [React Components: Lifecycle ](#React-Components-Lifecycle-methods)

# Overview <a name="React-Components"></a>

-   A component returns a set of React elements that should appear on the screen
-   Components enable us to break down the entire UI in to smaller reusable pieces
-   Different kinds of components can be defined in React

-   Component Conventions

    -   User-defined component names must always start with a Capital Letter
    -   Tags starting with lowercase latter are treated as DOM tags

-   Create components

    -   A new components needs to import React and { Component }

> import React, { Component } from "react";

## State <a name="State"></a>

-   Each component can store its own local information its state

    -   Private and fully controlled by the component
    -   Can be passed as **props** to children

-   **Only class components** can have local state

    -   So if you need to store the state, you need to implement that component as class component
    -   For components where the state is not storage, these have component

### Declare State: <a name="declare-State"></a>

    class Menu extends Component {
        constructor(props){
            super(props)
            this.state{
            selectedDish: null
            }
        }
    ...
    }

### Modifying state <a name="modifying-state"></a>

Never do:

    this.state.sekecteDish = dish;

State should only be modified using setState()

    onDishSelect(dish){
        this.setState({
            selectedDish: dish
        })
    }

## Props <a name="Props"></a>

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

## Handling Events<a name="Handling-Events"></a>

-   Handling events is similar to the way you handle events on DOM elements:
    -   Use camelCase to specify events
        -   onClick
        -   onFocus
        -   onBlur
        -   ...

### Example

    <Card onClick={()=>this.onDishSelect(dish)}>

## Lifting State Up <a name="Lifting-State-Up"></a>

-   Sometimes several components may share the same data

> Very often, your react application will be implemented as a hierarchy of components, so in that case you may wish to lift the state up to an ancestor of the current component.

### Example

> if several components have shared state are any change to state needs to be automatically seen by all these components, the it is better to move the state to on of the ancestors, common of all these components, and ensure that any state changes will be sent back up that common ancestor.

-   Changes to data in one component needs to be reflected to another component

## List and Keys <a name="List-and-Keys"></a>

-   Lists are handled similar to JavaScript
-   Keys should be given to elements inside the array
    -   Help identify which item have changed, are added or removed

> For each of items it is important specify the keys for each element inside an array, the reason to specify a key in react, is that where there are changes to the number of items in the list, maybe a new item is added into the list or an items is removed from the list, any such change to the data may cause re-rendering of the list items. These keys are used by react identify each item have been remove.

**React only modifies those parts of the gum tree that need to updated**

### Example

    const menu = this.props.dishes.map((dish) => {
        return(
            <div key={dish.id}>
                <h1>{dish.name}</h1>
                <p>{dish.description}</p>
            </div>
        )
    })

## React Components: Lifecycle methods <a name="React-Components-Lifecycle-methods"></a>

A react application is made up of multiple React components that are connected together to form the entire screen of your React applications view. Every time a React component needs to be included into your applications view then the component that hosts the specific part of the view will be created and added into added into the overall React component hierarchy.

A component passes through life cycle for the component.

1. The component doesn't exist.
2. The component gets created
3. Then it can be mounted into your React application
4. It will exist at that point for a period of time
5. The component can be removed from the hierarchy
6. Unmounting the component

So we have:

-   Mounting
-   Updating
-   Unmounting

For each stage of the lifecycle component there are several lifecycle methods available.

### Mounting Stage methods

-   Called when an instance of a component is being created and inserted into the DOM - **Constructor()** - **getDerivedStateFromProps()** - **render()** - **componentDidMount()**
