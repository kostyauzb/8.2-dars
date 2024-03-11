import SignUpButton from "./SignUpButton";
function Navbar() {
  return (
    <header className="flex justify-between bg-[#FFFFFF] container items-center">
      <nav className="flex items-center gap-x-12">
        <img src="/assets/Shortly.svg" alt="" />
        <div>
          <nav>
            <ul className="flex gap-x-8 text-[#9E9AA8] font-bold text-[15px]">
              <li className="hover:text-[#34313D] transition cursor-pointer">
                Features
              </li>
              <li className="hover:text-[#34313D] transition cursor-pointer">
                Pricing
              </li>
              <li className="hover:text-[#34313D] transition cursor-pointer">
                Resources
              </li>
            </ul>
          </nav>
        </div>
      </nav>
      <nav>
        <ul className="flex gap-x-9 items-center">
          <li className="text-[#9E9AA8] font-bold text-[15px] hover:text-[#34313D] transition cursor-pointer">
            Login
          </li>
          <li>
            <SignUpButton text={"Sign Up"} />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
