import './App.css';
import { Outlet } from "react-router-dom";
import NavBar from './components/NavBar';
// import { useNavigate } from "react-router-dom";

function App() {
  // let navigate = useNavigate();

  // const handleClick = (e) => {
  //   console.log("CLICKED!")
  //   navigate('/products')
  // };

  return (
    <div className="App">
      <NavBar />
      <Outlet/>
    </div>
  );
}

export default App;
