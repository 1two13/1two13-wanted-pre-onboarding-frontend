import { useState, useEffect } from 'react';
import TodoForm from '../components/common/TodoForm';

function TodoPage() {
  const URL = 'https://www.pre-onboarding-selection-task.shop/todos';
  const access_token = localStorage.getItem('access_token');
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  const onChangeInputHandler = (e) => setTodo(e.target.value);

  const addTodoList = () => {
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
        if (!(response.statusCode >= 400)) {
          todoList.push(response);
          setTodo('');
        }
      });
  };

  useEffect(() => {
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
  }, []);

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
          onClick={addTodoList}
          className="px-[2px] border-[1px] bg-lightGray"
        >
          추가
        </button>
      </div>
      <div>
        {todoList.length > 0 ? todoList.map((el, i) => <TodoForm title={el.todo} key={i} />) : ''}
      </div>
    </div>
  );
}

export default TodoPage;
