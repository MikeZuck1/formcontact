import { Label } from "./ui/label";
import { Input } from "./ui/input";
const email = () => {
  return (
    <div className="grid mt-5 w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email" className="mb-1">
        Email{" "}<span className="text-greenMedium">*</span>
      </Label>
      <Input type="email" id="email" className="w-[32.1rem] hover:border-green-700" />
    </div>
  );
};

export default email;
