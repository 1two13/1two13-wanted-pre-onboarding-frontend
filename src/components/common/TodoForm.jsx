function TodoForm({ title }) {
  return (
    <li>
      <label>
        <input type="checkbox" className="mr-[10px]" />
        <span>{title}</span>
      </label>
    </li>
  );
}

export default TodoForm;
