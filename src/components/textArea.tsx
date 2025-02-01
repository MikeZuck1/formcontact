import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

const textArea = () => {
  return (
    <div className="mt-5">
      <Label htmlFor="message">
        Message <span className="text-greenMedium">*</span>
      </Label>
      <Textarea className="hover:border-green-700" />
      <div className="flex gap-2 mt-10">
        <Checkbox className="hover:border-green-700 cursor-pointer" />
        <p className="text-sm text-black">
          I consent to being contacted by the team{" "}
          <span className="text-greenMedium">*</span>
        </p>
      </div>
    </div>
  );
};

export default textArea;
