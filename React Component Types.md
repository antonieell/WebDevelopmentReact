# Content table

-   Presetional Components
-   Contaienr Components
-   Functional componetns

# Component Types

Some people have informally classified the various kinds of components that we use when we implement our React application into different cuts. So, for example, we can talk about presentational components that are purely responsible for rendering the view based on the props that they are passed in, and then you could have container components that simply make use of presentational components and pass props to them and they are responsible for storing the state (the container components).
Similarly, we can talk about these as skinny and sat components. Skinny components mean purely responsible for rendering the view and fat components having a lot more information being tracked there in the form of state. Component types can be calssified based how they are used

-   Presentional vs Container
-   Skinny vs Fat
-   Dumb vs Smart
-   Sateless vs Stateful

> https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0

### Presentional COmponents

we can consider presentational components to a mainly concerned with rendering the view,
that is how things look.
So, they are mostly interested in the markup and style,
so they become the repository for the markup and styles
for rendering the view to the screen.
So, they render the view based upon the data that is passed on to them through props.

-   Mainly concerned with rendering the view
    -   How things look (markup, styles)
-   Render the view based on the data that is ássed to them in props
-   Do no maintain their own local state
    -   Can be relaxed to maintain only UI state then data

### Container Component

On the other hand, we can view a container component as being responsible for tracking the state or at least a part of the state of out application. So, they are responsible for making things work. So, they are more worried about fetching the data, say for example, from a server and then using the data within the application or to set up the state or maybe taking care of updating the state in response to any user interactions on the screen or updating the states based upon the data sent back from the server.

-   Resposible for making things work
    -   Data fetching, state updates
-   Make use of presentational components for rendering
    -   Can wrap presentational components in wrapping divs
-   Provide the data to the presentational components
-   Mantain State and communicate with data sources

### Functional components

# React Router

### Virtual DOM

Browser Dom isa browser object, when something is render the browser dom is built up,

In React application maintains a virtual DOM, it's a react Object. The virtual Dom in react terminology is a lightweight representation of a Browser DOM. Now, since the Virtual DOM is an in-memory object in your React application, the virtual DOM can be easily manipulated by React whenever it's required. Manupulations are extremely fast compared to manipylating th browser DOM, **Whe you change anythung in the Browser DOM, you need to go and re-render the web page allover again**, but the virtual DOM since it is maintained in memory by your react application, you can easily make change to the virtual DOM, whe any state of your componnets or changes to the props that a component obtains, then that may result in the component being re-rendered.
