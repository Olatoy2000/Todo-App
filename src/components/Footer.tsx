const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex justify-between w-[972px] items-center text-[11px] mt-[12px]">
      <small className="text-[11px]">
        &copy; {currentYear}. Copyright by Olatoy.
      </small>
      <p>
        Version <b>1.0</b>
      </p>
    </footer>
  );
};

export default Footer;
