import Button from "./Button";
const AddTodoForm = () => {
  return (
    <form>
      <h2 className="font-medium text-[#231d15]">Add a todo</h2>
      <input
        type="text"
        className="h-[45px] border px-[16px] border-black/[12px] rounded-[5px] my-[9px] text-[14px] block w-full"
      />
      <Button buttonType="primary">Add to List</Button>
    </form>
  );
};

export default AddTodoForm;