import React from 'react';
import './App.css';
import Head from './Components/Head';
import Nav from './Components/Nav';
import AddTodo from './Components/AddTodo';

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <Head/>
      <Nav/>
      <AddTodo/>
    </div>
  );
}

export default App;
