<h1>React Router</h1>
<p>According to React-Router official websit [https://reacttraining.com/react-router/
], React-Router is the collection of navigational components it enables you to navigate througout your web App. Lets say you have designed the web app contains different pages and you want to surf through pages there comes a react router to play the part. Currently, the latest version of React-Router is 4.0, however in this tutorial we will use React-Router 3.0.0. Since this tutorial is to give you the basic idea how React-Router workes, but along with this we will also learn </p>
<li>Conditional Components</li>
<li>Component Reusability</li>
<li>React Life Cycle Methods used in this tutorial</li>

<h1>Conditional Component</h1>
<p>Conditional component are nothing but the react components. with conditional behaviour depending upon the state of the app. Lets say in your app you want logout button to apear next to Account profile whenever user logs in and disapear when user logs out</p>

<h1>Component Reusability</h1>
Reusability is the main essence of React. Reusability refers to using same component one or more times depending upon its need in the App. Lets say we are using Login Button component in the App, then in order to use it multiple time we will pass its basic properties such as name style and onCLick event as the props, by doing that we can use same button Component for aother purpose, this way we can avoid bulking up the App </p>  

<h1>React Life Cycle Methods used in this tutorial</h1>
<p> There are many Life cycle methods that react provide, however in this tutorial we will use </p>
<li>componentDidMount()</li>
<li>componentWillRecieveProps</li>

<h3>componentDidMount()</h3>
componentDidMount() is invoked soon after component is rendered.
<h3>componentWillReceiveProps()</h3>
componentWillReceiveProps() is invoked when rendered component recieves the new props.

<h1>Lets Dive into the Tutorial<h1>
So, we will design the simple login app with material-ui from scratch. with few pages to give you idea of the routing.

<h2>Step 1</h2>
Create-react-app projectname
<h2>Step 2</h2>
cd projectname
<h2>Step 3</h2>
npm install --save material-ui
<h2>Step 4</h2>
npm install --save react-tap-event-plugin'
<p>This step is important! you need to install 'react-tap-event-plugin', and use the 'injectTapEventPlugin()' method in your index.js file otherwise you will mess up with onTouchTap() functionality. According to Material-UI official website (http://www.material-ui.com/#/get-started/installation)the react-tap-event-plugin provides onTouchTap() to all React Components. It's a mobile-friendly onClick() alternative for components in Material-UI, especially useful for the buttons.</p>

<h3>feel free to download the code<h3>
