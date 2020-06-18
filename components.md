# Table of Contents

-   [Overview](#React-Components)
-   [Props](#Props)
-   [State and Lifecycle](#State)
-   [Lifting State Up](#Lifting-State-Up)
-   [Handling Events](#Handling-Events)
-   [List and Keys](#List-and-Keys)
-   [React Components: Lifecycle ](#React-Components-Lifecycle-methods)

# Overview <a name="React-Components"></a>

Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. A component returns a set of React elements that should appear on the screen

-   Different kinds of components can be defined in React.

### Function Component

    function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
    }

### Class Component

    class Welcome extends React.Component {
      render() {
        return <h1>Hello, {this.props.name}</h1>;
      }
    }

### Converting a Function to a Class

You can convert a function component to a class in five steps:

1. Create an ES6 class, with the same name, that extends React.Component.
2. Add a single empty method to it called render().
3. Move the body of the function into the render() method.
4. Replace props with this.props in the render() body.
5. Delete the remaining empty function declaration.

### Component Conventions

-   User-defined component names must always start with a Capital Letter
-   Tags starting with lowercase latter are treated as DOM tags

# Props <a name="Props"></a>

Is a easy way of a parent component passing information to the child component through. A parent component maybe storing the **state and the information can be passed to the child component through**

### Example

> Here the dishes are available as props within the Menu Component and can be accessed as this.props.dishes

    <Menu dishes={this.state.dishes}/>

> Here dish is available as props within the Dishdetail Component and can be accessed as this.props.dish, and comments as this.props.comments

    <Dishdetail dish={this.state.dishes} comments={this.state.comments}/>

### Props are Read-Only

Whether you declare a component as a function or a class, it must never modify its own props. Such functions are called “pure” because they do not attempt to change their inputs, and always return the same result for the same inputs. In contrast, this impure functions changes its own input.

**All React components must act like pure functions with respect to their props**. Of course, application UIs are dynamic and change over time. In the next section, we will introduce a new concept of “state”. State allows React components to change their output over time in response to user actions, network responses, and anything else, without violating this rule.

# State and Lifecycle <a name="State"></a>

### Using State Correctly

-   [Do Not Modify State Directly ](#modifying-state)
-   State Updates May Be Asynchronous
-   State Updates are Merged
-   [The Data Flows Down](#The-Data-Flows-Down)
-   [React Components Lifecycle methods](#React-Components-Lifecycle-methods)

### Overview

Each component can store its own local information its state Can be passed as **props** to children and are Private and fully controlled by the component, **Only class components** can have local state,

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

The only place where you can assign this.state is the constructor, never do:

    this.state.sekecteDish = dish;

State should only be modified using setState()

    onDishSelect(dish){
        this.setState({
            selectedDish: dish
        })
    }

### The Data Flows Down <a name="The-Data-Flows-Down"></a>

This is commonly called a “top-down” or “unidirectional” data flow. Any state is always owned by some specific component, and any data or UI derived from that state can only affect components “below” them in the tree.

# React Components: Lifecycle methods <a name="React-Components-Lifecycle-methods"></a>

A react application is made up of multiple React components that are connected together to form the entire screen of your React applications view. Every time a React component needs to be included into your applications view then the component that hosts the specific part of the view will be created and added into added into the overall React component hierarchy.

A component passes through life cycle for the component. So we have:

-   Mounting
-   Updating
-   Unmounting

For each stage of the lifecycle component there are several lifecycle methods available.

#### Mounting Stage methods

-   Called when an instance of a component is being created and inserted into the DOM - **Constructor()** - **getDerivedStateFromProps()** - **render()** - **componentDidMount()**

# Lifting State Up <a name="Lifting-State-Up"></a>

-   Sometimes several components may share the same data

> Very often, your react application will be implemented as a hierarchy of components, so in that case you may wish to lift the state up to an ancestor of the current component.

### Example

> if several components have shared state are any change to state needs to be automatically seen by all these components, the it is better to move the state to on of the ancestors, common of all these components, and ensure that any state changes will be sent back up that common ancestor.

-   Changes to data in one component needs to be reflected to another component

# Handling Events<a name="Handling-Events"></a>

Handling events is similar to the way you handle events on DOM elements, There are some syntax differences:

-   React events are named using camelCase, rather than lowercase.
-   With JSX you pass a function as the event handler, rather than a string.

### Example

    <Card onClick={()=>this.onDishSelect(dish)}>
    <button onClick={activateLasers}>

# List and Keys <a name="List-and-Keys"></a>

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
