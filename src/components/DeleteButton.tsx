const DeleteButton = ({ id, handleDeleteTodo }) => {
  return (
    <button
      onClick={(event) => {
        event.stopPropagation();
        handleDeleteTodo(id);
      }}
    >
      ❌
    </button>
  );
};

export default DeleteButton;
