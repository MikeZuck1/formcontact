import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

const textArea = () => {
  return (
    <div className="mt-5">
      <Label htmlFor="message">
        Message <span className="text-greenMedium">*</span>
      </Label>
      <Textarea />
      <div className="flex gap-2 mt-10">
        <Checkbox />
        <p className="text-sm text-muted-foreground text-black">
          I consent to being contacted by the team{" "}
          <span className="text-greenMedium">*</span>
        </p>
      </div>
    </div>
  );
};

export default textArea;
