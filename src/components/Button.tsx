const Button = ({ buttonType, children }: any) => {
  return (
    <button
      className={`h-[45px] bg-[#473a2b] cursor-pointer rounded-[5px] hover:bg-[#322618] text-center text-white w-full ${
        buttonType === "secondary" ? "opacity-[85%]" : ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
