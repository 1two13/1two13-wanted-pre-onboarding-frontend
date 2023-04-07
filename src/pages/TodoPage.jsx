function TodoPage() {
  return (
    <div className="py-[4%] px-[5%]">
      <li>
        <label>
          <input type="checkbox" className="mr-[10px]" />
          <span>TODO 1</span>
        </label>
      </li>
      <li>
        <label>
          <input type="checkbox" className="mr-[10px]" />
          <span>TODO 2</span>
        </label>
      </li>
    </div>
  );
}

export default TodoPage;
