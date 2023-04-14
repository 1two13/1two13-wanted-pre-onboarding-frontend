import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import createTodoApi from '../api/createTodoApi';
import getTodosApi from '../api/getTodosApi';
import deleteTodoApi from '../api/deleteTodoApi';
import updateTodoApi from '../api/updateTodoApi';
import TodoForm from '../components/common/TodoForm';
import { CREATE_TODO, ADD } from '../static/constants';

function TodoPage() {
  const access_token = localStorage.getItem('access_token');
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  const createTodo = () => {
    createTodoApi(todo)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setTodo('');
        setTodoList([...todoList, response]);
      });
  };

  const getTodos = () => {
    getTodosApi()
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (!(response.statusCode >= 400)) setTodoList(response);
      });
  };

  const deleteTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
    deleteTodoApi(id);
  };

  const updateTodo = (id, todo, isCompleted) => {
    setTodoList(
      todoList.map((el) => {
        if (el.id !== id) return el;
        return { ...el, todo, isCompleted };
      })
    );

    updateTodoApi(id, todo, isCompleted).then((response) => {
      return response.json();
    });
  };

  useEffect(() => {
    getTodos();
  }, []);

  if (!access_token) {
    return <Navigate to="/signin" />;
  }

  return (
    <div className="py-[3%] px-[5%]">
      <h1 className="mb-[3%] font-bold text-5xl">Todo</h1>
      <div className="mb-[1%]">
        <input
          data-testid="new-todo-input"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder={CREATE_TODO}
          className="px-[5px] mr-[10px] border-[1px]"
        />
        <button
          data-testid="new-todo-add-button"
          onClick={createTodo}
          className="px-[2px] border-[1px] bg-lightGray"
        >
          {ADD}
        </button>
      </div>
      <div>
        {todoList.length > 0
          ? todoList.map((el) => (
              <TodoForm key={el.id} el={el} updateTodo={updateTodo} deleteTodo={deleteTodo} />
            ))
          : ''}
      </div>
    </div>
  );
}

export default TodoPage;
