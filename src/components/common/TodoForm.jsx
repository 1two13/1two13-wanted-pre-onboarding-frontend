function TodoForm({ el, onChange, checked }) {
  return (
    <li>
      <label>
        <input type="checkbox" onChange={onChange} checked={checked} className="mr-[10px]" />
        <span>{el.todo}</span>
      </label>
    </li>
  );
}

export default TodoForm;
