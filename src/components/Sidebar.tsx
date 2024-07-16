import AddTodoForm from "./AddTodoForm";
import Button from "./Button";

export const Sidebar = () => {
  return (
    <section className="flex flex-col px-[25px] pt-[18px] pb-[28px] col-[2/3] row-[2/3] bg-[#fffcf9] border-l border-black/[0.08]">
      <AddTodoForm />
      <div className="mt-auto space-y-2">
        <Button text="Log in" buttonType="secondary">
          Log in
        </Button>
        <Button text="Register" buttonType="secondary">
          Register
        </Button>
      </div>
    </section>
  );
};
