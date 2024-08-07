import Counter from "./Counter";
import Logo from "./Logo";

const Header = ({ todos }) => {
  return (
    <header className="flex justify-between items-center px-[28px] col-[1/3] row-[1/2] bg-[#fbf5ed] border border-black/[0.08]">
      <Logo />
      <Counter todos={todos} />
    </header>
  );
};

export default Header;
