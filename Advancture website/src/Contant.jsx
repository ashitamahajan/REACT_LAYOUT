
const Hero = () => {
  return (
    <div className="flex flex-col h-full max-w-[1020px] mx-auto">
      <div
        className={`flex items-center justify-start flex-row xl:px-0 sm:px-16 px-6 py-[120px] gap-20`}
      >
        <div className="w-1/2">
          <h1 className="md:text-[48px] text-[30px] font-bold mb-6 leading-tight">
          UNRAVELING MAGIC.
            <span className="text-[rgb(133,90,225)]">ENDLESS ADVENTURE</span>
          </h1>

          <div className="max-w-[370px] font-normal">
            <p className="text-[18px] mb-6  font">
            “I travel because I become uncomfortable being too comfortable.”
            </p>
          </div>

          <button className="flex items-center gap-5 px-4 rounded-3xl py-2 bg-[hsl(138,100%,64%)]">
            <div>
              <p className="text-[14px] font-bold ">Let`s go</p>
            </div>
          </button>
        </div>

        <div className="w-1/2">
        <img src="https://images.unsplash.com/photo-1695196312518-b1223a8298b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=1000&q=60" alt="Image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
