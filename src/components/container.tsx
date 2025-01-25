const container = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-5 w-[35rem] h-[35rem] rounded-xl bg-white shadow-lg">
        <h1 className="text-2xl text-greyDarker">Contact Us</h1>
        <div className="flex flex-row gap-5 mt-5">
          {/* Input First Name */}
          <div className="flex flex-col">
            <label htmlFor="" className="mb-2">
              First Name <span className="text-[hsl(186,15%,59%)]">*</span>
            </label>
            <input
              type="text"
              name=""
              id=""
              className="w-[15rem] h-[2.2rem] rounded-sm border-[0.5px] border-[hsl(186,15%,59%)] text-black p-2"
            />
          </div>

          {/* Input Last Name */}
          <div className="flex flex-col">
            <label htmlFor="" className="mb-2">
              Last Name <span className="text-[hsl(186,15%,59%)]">*</span>
            </label>
            <input
              type="text"
              name=""
              id=""
              className="w-[15rem] h-[2.2rem] rounded-sm border-[0.5px] border-[hsl(186,15%,59%)] text-black p-2"
            />
          </div>
        </div>
      </div>
      {/* Input content */}
    </div>
  );
};

export default container;
