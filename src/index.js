import React from "react";
import ReactDOM  from "react-dom";
import App from './components/App';
// import App from "./components/App";

// class Welcome extends React.Component {
//   render(){
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }

// const element = <Welcome name="AShwin" />;

// const name = "ashwin";
// const element = <h1>Hello,{name}</h1>

// const fullname = (user) => {
//     return user.name + " " + user.lastname;
// }

// const user = {
//   name: "Ashwin",
//   lastname: "Gupta"
// }

// const element = <h1>Hello,{fullname(user)}</h1>;

// const element = React.createElement(
//   "h1",
//   {className:"greetings"},
//   "Hello world"
// ); 

// function tick(){
//   const element = (
//     <div>
//       <h1>Today's date</h1>
//       <h3>{new Date().toLocaleDateString()}</h3>
//     </div>
//   );
//   ReactDOM.render(element,document.getElementById("root"));
// }

// setInterval(tick,2000);

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// function App() {
//   return (
//     <div>
//       <Welcome name="Sara" />
//       <Welcome name="Cahal" />
//       <Welcome name="Edite" />
//     </div>
//   );
// }

// class App extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {date: new Date()};
//   }
//   componentDidMount(){
//     this.timerID = setInterval(
//       () => this.tick(),
//       2000);
//   }

//   componentWillUnmount(){
//     clearInterval(this.timerID);
//   }

//   tick(){
//     this.setState({ date : new Date() })
//   }

//   render(){
//     return(
//       <div>
//         <h1>Hello</h1>
//         <h3>{this.state.date.toLocaleString()}</h3>
//       </div>
//     );
//   }
// }

// class Toggle extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = { isToggleOn : "true" }
//   }

//   onHandleClick(){
//     this.setState({thisToggleOn})
//   }

//   render(){
//     return(
//       <button onClick={this.onHandleClick}>
//         {this.state.isToggleOn ? 'ON' : 'OFF'}
//       </button>
//     );
//   }
// }

// class LogginButtons extends React.Component {
//   // This syntax ensures `this` is bound within handleClick.
//   // Warning: this is *experimental* syntax.
//   handleClick = () => {
//     console.log('this is:', this);
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         Click me
//       </button>
//     );
//   }
// }


// ReactDOM.render(
//   <LogginButtons />,
//   document.getElementById("root"));

// function Greeting(props){
//   const isLoggedIn = props.isLoggedIn;
//   if(isLoggedIn){
//     return <UserGreeting />;
//   }else{
//     return <GuestGreeting />;
//   }
// }

// function UserGreeting(){
//   return(
//     <h1>welcome back</h1>
//   );
// }

// function GuestGreeting(){
//   return(
//     <h3>please sign up</h3>
//   );
// }

ReactDOM.render(
  // Try changing to isLoggedIn={true}:
  // <Greeting isLoggedIn={false} />,
  <App />,
  document.getElementById('root')
);