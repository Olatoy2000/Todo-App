import DeleteButton from "./DeleteButton";

export const TodoList = ({ todos, handleToggleTodo, handleDeleteTodo }) => {
  return (
    <ul>
      {todos.length === 0 && (
        <li className="font-semibold flex h-full items-center justify-center">
          Start adding your todo here
        </li>
      )}
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center px-8 h-[50px] text-[14px] cursor-pointer border-b border-black/[8%]"
          onClick={() => {
            handleToggleTodo(todo.id);
          }}
        >
          <span
            className={`${todo.isCompleted ? "line-through text-[#ccc]" : " "}`}
          >
            {todo.text}
          </span>
          <DeleteButton id={todo.id} handleDeleteTodo={handleDeleteTodo} />
        </li>
      ))}
    </ul>
  );
};
