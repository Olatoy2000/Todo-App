const DeletButton = ({ id, setTodos }) => {
  return (
    <button
      onClick={(event) => {
        event.stopPropagtion()
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
      }}
    >
      ❌
    </button>
  );
};

export default DeletButton;
