import { useState } from "react";
import Button from "./Button";
const AddTodoForm = (props: { handleAddTodo: (todoText: string) => void }) => {
  const [todoText, setTodoText] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.handleAddTodo(todoText);
        setTodoText("");
      }}
    >
      <h2 className="font-medium text-[#231d15]">Add a todo</h2>
      <input
        type="text"
        className="h-[45px] border px-[16px] border-black/[12px] rounded-[5px] my-[9px] text-[14px] block w-full"
        value={todoText}
        onChange={(event) => {
          setTodoText(event.target.value);
        }}
      />
      <Button buttonType="primary">Add to List</Button>
    </form>
  );
};

export default AddTodoForm;
