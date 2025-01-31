import { Button } from "@/components/ui/button";
const button = () => {
  // const handleSubmit = (e) => {e.preventDefault()};  
  // onSubmit={handleSubmit}

  return (
    <div className="mt-8">
      <form action="">
        <Button
          variant="outline"
          className="w-full text-white bg-emerald-700 hover:bg-emerald-700 hover:text-white"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default button;
