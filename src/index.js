// //--------------------------------------------------------------------
// // No React
// const root = document.getElementById('root');
//
// function App(props) {
//   var person = props.person;
//
//   var element = document.createElement('div');
//   element.innerHTML = `Hello ${person}`;
//   return element;
// }
//
// const app = new App({ person: 'World' });
// root.appendChild(app);

// //--------------------------------------------------------------------
// // With React, no JSX
// import React from 'react';
// import ReactDOM from 'react-dom';
//
// const App = ({ person }) => {
//   return React.createElement('div', null, `Hello ${person}`);
// };
//
// ReactDOM.render(
//   React.createElement(App, {person: 'World'}, null),
//   document.getElementById('root')
// );

// //--------------------------------------------------------------------
// // With React & JSX
// import React from 'react';
// import ReactDOM from 'react-dom';
//
// const App = () => {
//   return <div>Hello World</div>;
// };
//
// ReactDOM.render(<App />, document.getElementById('root'));
