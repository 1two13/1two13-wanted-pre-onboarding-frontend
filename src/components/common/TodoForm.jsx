import { useState } from 'react';
import { SUBMIT, CANCEL, MODIFY, DELETE } from '../../static/constants';

function TodoForm({ el, updateTodo, deleteTodo }) {
  const [isModify, setIsModify] = useState(false);
  const [todo, setTodo] = useState(el.todo);

  const submitHandler = () => {
    setIsModify(false);
    updateTodo(el.id, todo, el.isCompleted);
  };

  return (
    <li>
      <input
        type="checkbox"
        onChange={() => updateTodo(el.id, el.todo, !el.isCompleted)}
        checked={el.isCompleted}
        className="mr-[10px]"
      />
      {isModify ? (
        <>
          <input
            data-testid="modify-input"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="mr-[10px] px-[5px] border-[1px]"
          />
          <button
            data-testid="submit-button"
            onClick={submitHandler}
            className="m-[1px] px-[5px] border-[1px] bg-lightGray"
          >
            {SUBMIT}
          </button>
          <button
            data-testid="cancel-button"
            onClick={() => setIsModify(false)}
            className="m-[1px] px-[5px] border-[1px] bg-lightGray"
          >
            {CANCEL}
          </button>
        </>
      ) : (
        <>
          <label className="mr-[10px]">
            <span>{el.todo}</span>
          </label>
          <button
            data-testid="modify-button"
            onClick={() => setIsModify(!isModify)}
            className="m-[1px] border-[1px] bg-lightGray"
          >
            {MODIFY}
          </button>
          <button
            data-testid="delete-button"
            onClick={() => deleteTodo(el.id)}
            className="m-[1px] border-[1px] bg-lightGray"
          >
            {DELETE}
          </button>
        </>
      )}
    </li>
  );
}

export default TodoForm;
