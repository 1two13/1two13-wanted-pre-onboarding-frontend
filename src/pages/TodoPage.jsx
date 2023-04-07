import TodoForm from '../components/common/TodoForm';

function TodoPage() {
  return (
    <div className="py-[3%] px-[5%]">
      <h1 className="mb-[3%] font-bold text-5xl">Todo</h1>
      <div className="mb-[1%]">
        <input data-testid="new-todo-input" className="px-[5px] mr-[10px] border-[1px]" />
        <button data-testid="new-todo-add-button" className="px-[2px] border-[1px] bg-lightGray">
          추가
        </button>
      </div>
      <div>
        <TodoForm title={'TODO 1'} />
      </div>
    </div>
  );
}

export default TodoPage;
