import "./App.css";
import {useState} from "react";

function App(){

  const [count, setCount] = useState(0);

  function aumenta(){
    
    setCount(count +1);

  }
  
  function diminui(){
    setCount(count - 1);
    
  }

  function zerar(){
    setCount(0);
  }
  
  return (
    <div className="App">
      <button onClick={aumenta}>Increase</button>
      <button onClick={diminui}>Decrease</button>
      <button onClick={zerar}>Set to zero</button>
      {count}
    </div>
  );
}

export default App;