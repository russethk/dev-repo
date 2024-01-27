### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?

React Router is a JavaScript framework that lets users handle client and server-side routing in React applications. It enables the creation of single-page web or mobile apps that allow navigating without refreshing the page. It also allows users to use browser history features while preserving the right application view.

React Router makes it simple to manage the URL and state of an application. It routes using a component-based architecture. You specify all of the potential URL patterns in the app and which UI component should be displayed for each one. 

- What is a single page application?

An SPA (Single-page application) is a web app implementation that loads only a single web document, and then updates the body content of that single document via JavaScript APIs when different content is to be shown.

This allows users to use websites without loading whole new pages from the server, which can result in performance gains and a more dynamic experience. There are potential tradeoff disadvantages of SPA such as significant interference with SEO, more effort required to maintain state, difficulties implementing navigation, and interference with meaningful performance monitoring.

- What are some differences between client side and server side routing?

Server-side routing is the traditional approach to handling routes in web applications. The process involves requesting a new page from the server and providing it to the user every time a link is clicked. One major issue with server-side routing is that every request results in a full page refresh, which is not performance efficient in most cases.

Client-side routing involves JavaScript handling the routing process internally. In client-side routing, a request to the server is prevented when a user clicks a link, hence no page refresh even when the URL changes (https://www.telerik.com/, 2023).

- What are two ways of handling redirects with React Router? When would you use each?

With React Router, there is a `Redirect` component that re-routes the user to a chosen route. `Redirect` can be used in the `Route` components or in the return statement of another component. This is most useful when a user attempts to go to a route that is protected or does not exist. 

 The `useHistory` hook in ReactRouter provides a history object that will send the user to the new route and add it to the browser history ( eg. `history.push("/redirect-route")`). The `useHistory` method is more useful as a final action inside of a callback function ( i.e. when a form is submitted ) so the user can be redirected if the submit is successful. 

- What are two different ways to handle page-not-found user experiences using React Router? 

One way is using `Switch` to wrap all your routes and adding a `NotFound` component in a route listed last. `Switch` will search for the first route that matches the user inputed url. If none are found, the `NotFound` component will be rendered. For this to function correctly the `Route` component wrapping the `NotFound` componenet must not have the `exact` keyword or specification of a route.

- Another way would be to simply us a `Redirect` component. When the user reaches a wrong path, this sends the user somewhwere else, such as a 404 page or another specified route.

- How do you grab URL parameters from within a component using React Router?

To grab the URL paramenter from within a component using React Router, you can use the `useParams()` hook which grabs all the url params in an object of key value pairs.

- What is context in React? When would you use it?

Context in React gives us the ability to pass props down to any nested component by defining them in a singular parent component and wrapping the nested component(s) with a `.Provider` property on the context object created from `useContext()`. 

The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. 

This is very useful when certain props need to be used by a multitude of components that may not be sibling components or are nested beyond the child component of the parent component that defines the props.

- Describe some differences between class-based components and function
  components in React.

Class-based components require more setup than function components because of their need to establish props and state in a constructor method, or as instance properties. Because class components utilize OOP, there is also a lot of work with `this`, meaning instance methods will need this binding to maintain the proper context.

Another major difference is the methods used to manage the component life cycle. Class-based components have a lot of different methods to manage each part of the component life cycle (`componentDidMount`, `componentDidUpdate`, `componentWillUnmount`, `render`, etc.) while function components handled most of this with a few simple hooks, such a `useEffect` which can manage mounting, updating and unmounting components in one function.

- What are some of the problems that hooks were designed to solve?

Hooks are simply functions that allow you to hook into or make use of React features. They were introduced to address three major problems of class components: wrapper hell, huge components, and confusing classes. 

Hooks were designed to solve limitations with function Components; for example, they provided no way of managing state, and were simply used for presentational purposes. Now, hooks allow you to hook into the state in a way that allows you to manipulate state throughout the lifecycle from one central hook.

Another big problem hooks helped solve was the duplication of code within a component where a lot of similar logic was happening throughout the lifecycle of a component that had to be repeated in each different function. 

Hooks allow for cross component usage so that logic can be stored in a single hook and used throughout the application.