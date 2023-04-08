import { useState } from 'react';
import TodoForm from '../components/common/TodoForm';

function TodoPage() {
  const todo_list = localStorage.getItem('todo_list');
  const [todo, setTodo] = useState('');

  const onChangeInputHandler = (e) => setTodo(e.target.value);
  const addTodoList = () => {
    const URL = 'https://www.pre-onboarding-selection-task.shop/todos';
    const access_token = localStorage.getItem('access_token');
    let todoList = todo_list ? [...JSON.parse(todo_list)] : [];

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
        if (response.statusCode === 400) window.alert(response.message);
        else {
          todoList.push(response);
          setTodo('');
          localStorage.setItem('todo_list', JSON.stringify(todoList));
        }
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
        {todo_list
          ? JSON.parse(todo_list).map((el, i) => <TodoForm title={el.todo} key={i} />)
          : ''}
      </div>
    </div>
  );
}

export default TodoPage;
