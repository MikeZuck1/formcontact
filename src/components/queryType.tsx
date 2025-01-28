import { Input } from "./ui/input";
const queryType = () => {
  return (
    <>
      <div className="mt-5">
        Query Type <span className="text-greenMedium">*</span>
      </div>
      <div className="flex flex-row gap-5 mt-2">
        {/* Input First Name */}
        <div className="flex flex-col">
          <Input className="w-[15.5rem]" />
        </div>
        {/* Input Last Name */}
        <div className="flex flex-col">
          <Input className="w-[15.5rem]" />
        </div>
      </div>
    </>
  );
};

export default queryType;
