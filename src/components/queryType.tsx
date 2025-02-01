import { useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

const QueryType = () => {
  const [selectedValue, setSelectedValue] = useState("comfortable");

  const handleChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <div className="grid mt-5 w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email" className="mb-1">
        Query Type <span className="text-greenMedium">*</span>
      </Label>
      <RadioGroup value={selectedValue} onValueChange={handleChange}>
        <div className="flex flex-row gap-5">
          <div
            className={`border border-primary rounded-lg w-[15.5rem] h-[2.3rem] p-1.5 ${
              selectedValue === "default" ? "bg-emerald-100" : ""
            }`}
          >
            <RadioGroupItem value="default" id="r1" className="cursor-pointer mr-2" />
            <Label htmlFor="r1">General Enquiry</Label>
          </div>
          <div
            className={`border border-primary rounded-lg w-[15.5rem] h-[2.3rem] p-1.5 ${
              selectedValue === "comfortable" ? "bg-emerald-100" : ""
            }`}
          >
            <RadioGroupItem value="comfortable" id="r2" className="cursor-pointer mr-2" />
            <Label htmlFor="r2">Support Request</Label>
          </div>
        </div>
      </RadioGroup>
    </div>
  );
};

export default QueryType;
