import "./App.css";
import Name from "./components/name";
import Email from "@/components/email";
import QueryType from "@/components/queryType";
import TextArea from "./components/textArea";
import Button from "./components/button";

function App() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="p-5 w-[35rem] h-[35rem] rounded-xl bg-white shadow-lg">
          <Name />
          <Email />
          <QueryType />
          <TextArea />
          <Button />
        </div>
      </div>
    </>
  );
}

export default App;
