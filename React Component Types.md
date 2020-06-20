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

# Virtual DOM

Browser Dom isa browser object, when something is render the browser dom is built up,

In React application maintains a virtual DOM, it's a react Object. The virtual Dom in react terminology is a lightweight representation of a Browser DOM. Now, since the Virtual DOM is an in-memory object in your React application, the virtual DOM can be easily manipulated by React whenever it's required. Manupulations are extremely fast compared to manipylating th browser DOM, **Whe you change anythung in the Browser DOM, you need to go and re-render the web page allover again**, but the virtual DOM since it is maintained in memory by your react application, you can easily make change to the virtual DOM, whe any state of your componnets or changes to the props that a component obtains, then that may result in the component being re-rendered.

# React Router

### React Route layout

-   <BrowserRouter>
    -   <Switch>
        -   Route path="/" component={Index}
        -   Route path="/products" exact component={products}
        -   Route path="/Dashbord" component={() => <Dashbord props={this.state.example}/>}
        -   Route path="/Contact" component={Contact}
        -   <Redirect to="/home" />
    -   <Switch/>
-   <BrowserRouter/>

# Single Page Applications (SPA)

## What is a Single Page Application

Web application or web site that fits in a single page

-   No need to reload the entire page
-   UX like a desktop/native application
-   Most resources are retrived with a single page load
-   Redraw parts of the page whe needed withou requiring a full server roudtrip

## How are they different ?

### Single page applications

In a single page application, when the browser navigates to the website, the this will requesto for the application to be dowlaoda from the server side.

> => Request Web Applications
> Send Web app and Assests <=

Changes to the client side, something like a click in a link, or send one form will initiate a new request to the server side, but in this case, very often you'are only downloading some data, perhaps in the form of JSON data from the server site. Most subsequent interactions for the server will be simple for download data in the form of JSON o XML. Once this data is downloaded, this data can be then used to render the new view within your application.

> Request Web Application

### Tradicional websites

If you visit a website you made a requesting for acess to a particular page. For example:

> Request index.html

If you navigate to another page in your website, it will results in your browser sedding another requesto to the server to fetch the second page

> Request contactus.html

As you move form one page to another page, it will involve every new page to be loaded from the server and this would involve a roundtrip time to the server to fetch all the resources required for contructing those paages.

> Request about.html
> Request x.html
> Request y.html
> Request z.html
> Request ....html

In a website has many pages, every single piece that your web page requires for rendering will require a full roundtrip time to the servers. These pages have a lot in common, stufs like headers, footer and other pices of information

## Challenges in SPA

-   Search engine optimization
-   Partitioning the responsability between client and server
-   Maintaing history
-   Analytics
-   Speeding up the initial page load
