import React, { useState } from "react";

function Todo({ todo, index, completeTodo, deleteTodo }) {
  return (
    <>
      <div
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
        className="todo"
      >
        {todo.text}
      </div>
      <div className="div">
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => deleteTodo(index)}>Delete</button>
      </div>
    </>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="addTodo..."
      />
    </form>
  );
}

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false
    },
    {
      text: "Build really cool todo app",
      isCompleted: false
    }
  ]);

  const addTodoo = text => {
    //   const NewTodos = [...todos, { text }];
    //   setTodos(newTodos);
    setTodos([...todos, { text }]);
  };

  const compeleteTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={compeleteTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
      <TodoForm addTodo={addTodoo} />
    </div>
  );
};

export default TodoList;
