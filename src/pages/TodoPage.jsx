import { useState, useEffect } from 'react';
import TodoForm from '../components/common/TodoForm';

function TodoPage() {
  const URL = 'https://www.pre-onboarding-selection-task.shop/todos';
  const access_token = localStorage.getItem('access_token');
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const onChangeInputHandler = (e) => setTodo(e.target.value);

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
    }).then((response) => {
      setTodo('');
      getTodos();
      return response.json();
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

  useEffect(() => {
    getTodos();
  }, []);

  const updateTodo = (el) => {
    fetch(`${URL}/${el.id}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        todo: el.todo,
        isCompleted: el.isCompleted ? false : true,
      }),
    }).then((response) => {
      setIsChecked(el.isCompleted);
      getTodos();
      return response.json();
    });
  };

  const deleteTodo = (el) => {
    fetch(`${URL}/${el.id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }).then((response) => {
      getTodos();
      return response.json();
    });
  };

  return (
    <div className="py-[3%] px-[5%]">
      <h1 className="mb-[3%] font-bold text-5xl">Todo</h1>
      <div className="mb-[1%]">
        <input
          data-testid="new-todo-input"
          onChange={onChangeInputHandler}
          value={todo}
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
          ? todoList.map((el, i) => (
              <TodoForm
                key={i}
                el={el}
                onChange={() => updateTodo(el)}
                checked={el.isCompleted}
                deleteTodo={() => deleteTodo(el)}
              />
            ))
          : ''}
      </div>
    </div>
  );
}

export default TodoPage;
