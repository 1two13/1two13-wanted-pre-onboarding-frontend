import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import TodoForm from '../components/common/TodoForm';

function TodoPage() {
  const URL = 'https://www.pre-onboarding-selection-task.shop/todos';
  const access_token = localStorage.getItem('access_token');
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  const createTodo = () => {
    fetch(URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        todo,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setTodo('');
        setTodoList([...todoList, response]);
      });
  };

  const getTodos = () => {
    fetch(URL, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (!(response.statusCode >= 400)) setTodoList(response);
      });
  };

  const deleteTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
    fetch(`${URL}/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  };

  const updateTodo = (id, todo, isCompleted) => {
    setTodoList(
      todoList.map((el) => {
        if (el.id !== id) return el;
        return { ...el, todo, isCompleted };
      })
    );

    fetch(`${URL}/${id}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        todo,
        isCompleted,
      }),
    }).then((response) => {
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
          placeholder={'할 일을 등록해 주세요.'}
          className="px-[5px] mr-[10px] border-[1px]"
        />
        <button
          data-testid="new-todo-add-button"
          onClick={createTodo}
          className="px-[2px] border-[1px] bg-lightGray"
        >
          추가
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
