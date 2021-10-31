import React, { useState, useEffect } from 'react';

//Componentes
import Header from './components/Header.jsx';
import Loader from './components/Loader.jsx';
import Todo from './components/Todo.jsx';

//Styles
import "./styles/App.css";


const App = () => {
  
  //State
  const [todoList, setTodoList] = useState([]);
  const [todoFilter, setTodoFilter] = useState([]);

  //Effect
  useEffect(() =>{

    const handleTodoList = async () => {
      
      const response = await fetch("https://jsonplaceholder.typicode.com/todos")
      const result = await response.json();
      const resultTodoList = result.slice(0, 20);
      setTodoList(resultTodoList)
      setTodoFilter(resultTodoList)
      
    };
    
    handleTodoList();

  }, []);
  
  
  //Funciones
  const handleCompleteTodo = id => {
    
    setTodoList(todoList.map(todo => 
      todo.id === id ? {...todo, completed: !todo.completed} : todo 
      )
    );

    setTodoFilter(todoFilter.map(todo => 
      todo.id === id ? {...todo, completed: !todo.completed} : todo 
      )
    );

  };
  
  const handleFilterTrue = () => {
    
    setTodoList(todoFilter.filter(todo => todo.completed === true))
    
  }

  const handleFilterFalse = () => {

    setTodoList(todoFilter.filter(todo => todo.completed === false))
    

  }
  
  const handleAll = () => {
    
    setTodoList(todoFilter.filter(todo => todo))  

  }


  return (
    <div className="App">
      
      
      <Header 
        handleFilterTrue={handleFilterTrue}
        handleFilterFalse={handleFilterFalse}
        handleAll={handleAll}
        
      />
        
      
      <div className="todo-container">
        
        {todoList && todoList.length > 0 ? (
        todoList.map(singleTodo => (
          <Todo 
            key={singleTodo.id} 
            title={singleTodo.title} 
            status={singleTodo.completed}
            handleCompleteTodo={handleCompleteTodo}
            id={singleTodo.id}
          />
        ))
        
      ) : (
        <Loader />
      )}
      
      </div>
      

    </div>
  );
}

export default App;
