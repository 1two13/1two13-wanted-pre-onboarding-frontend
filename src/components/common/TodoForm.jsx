function TodoForm({ el, onChange, checked }) {
  return (
    <li>
      <label className="mr-[10px]">
        <input type="checkbox" onChange={onChange} checked={checked} className="mr-[10px]" />
        <span>{el.todo}</span>
      </label>
      <button data-testid="modify-button" className="m-[1px] border-[1px] bg-lightGray">
        수정
      </button>
      <button data-testid="delete-button" className="m-[1px] border-[1px] bg-lightGray">
        삭제
      </button>
    </li>
  );
}

export default TodoForm;
