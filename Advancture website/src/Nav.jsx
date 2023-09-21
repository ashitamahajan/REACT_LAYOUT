const Header = () => {
  return (
    <div className="flex flex-col h-full max-w-[1320px] mx-auto bg-fuchsia-800 px-10">
      <header className="flex justify-between items-center h-16 py-10">
        <h1 className="font-poppins font-semibold text-[24px]">
          Advanture world
        </h1>
        <button className=" items-center gap-10 px-4 flex py-2">
          <p className="text-[16px] font-bold">Home</p>
          <p className="text-[16px] font-bold">About</p>
          <p className="text-[16px] font-bold">Contact</p>
          <p className="text-[16px] font-bold p-2 rounded-3xl  bg-[hsl(138,100%,64%)]">Register / Login</p>
        </button>
      </header>
    </div>
  );
};

export default Header;
