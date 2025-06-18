import { useState } from "react";
import { Button } from "@heroui/react";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Header />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Button color="primary" size="lg" type="reset" className="text-red-400 bg-red-400">
        Button
      </Button>
      <button className="text-red-400 bg-red-400">Button</button>
    </>
  );
}

export default App;
