import React from 'react';
import TodoListContainer from './components/TodoListsContainer';
import './App.css';

function App() {
  return (
    <div className='mainContainer'>
      <div className="topHeading">
        <h1>A Simple To-Do List App</h1>
      </div>
      <TodoListContainer />
    </div>
  );
}

export default App;
