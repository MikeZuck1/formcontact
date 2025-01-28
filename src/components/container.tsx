// import { Button } from "./ui/button";
// import { Label } from "./ui/label";
import { Input } from "./ui/input";
const container = () => {
  // const [name, setName] = useState(); 
  
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-5 w-[35rem] h-[35rem] rounded-xl bg-white shadow-lg">
        <h1 className="text-2xl text-greyDarker">Contact Us</h1>
        <div className="flex flex-row gap-5 mt-5">
          {/* Input First Name */}
          <div className="flex flex-col">
            <label htmlFor="" className="mb-1">
              First Name <span className="text-greenMedium">*</span>
            </label>
            <Input className="w-[15.5rem]" />
          </div>
          {/* Input Last Name */}
          <div className="flex flex-col">
            <label htmlFor="" className="mb-1">
              Last Name <span className="text-greenMedium">*</span>
            </label>
            <Input className="w-[15.5rem]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default container;
