import './App.css';
import { useNavigate } from "react-router-dom";

function App() {
  let navigate = useNavigate();

  const handleClick = (e) => {
    console.log(":CLICKED:!")
    navigate('products')
  };

  return (
    <div className="App">
      <div> App.js </div>
      <button onClick={(handleClick)}> Products </button>
    </div>
  );
}

export default App;
