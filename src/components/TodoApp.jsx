import { useEffect, useState } from "react";
import { getLocalStorage, updateLocalStorage } from "../utils/localStorage";
import Todo from "./parts/Todo";
import TodosForm from "./parts/TodosForm";

const TodoApp = () => {
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState(getLocalStorage());

  useEffect(() => {
    updateLocalStorage([...todoList]);
  }, [todoList]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const textTrim = text.trim();
    if (textTrim) {
      setTodoList((todoList) => [
        ...todoList,
        { text: textTrim, completed: false },
      ]);

      setText("");
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const setCheck = (id, isCompleted = false) => {
    let newArr = todoList.map((todo, index) => {
      if (index === id) {
        return { ...todo, completed: isCompleted };
      }
      return todo;
    });
    setTodoList([...newArr]);
  };
  const removeTodo = (id) => {
    let newArr = todoList.filter((todo, index) => index !== id);
    setTodoList([...newArr]);
  };

  const handles = { handleSubmit, handleChange };
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <div className="todo-container">
        <TodosForm {...handles} text={text} />
        <ul className="todos">
          {todoList.map((todo, index) => (
            <Todo
              key={index}
              id={index}
              isCompleted={todo.completed}
              text={todo.text}
              setCheck={setCheck}
              removeTodo={removeTodo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;
