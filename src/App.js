import Topbaar from "./components/Topbaar/Topbaar";
import Home from "./pages/Guest/Home/Home";
import Login from "./pages/Guest/Login/Login";


function App() {
  return (
    <div className="bg-background w-[100vw] h-[100vh] overflow-hidden">
      <Topbaar/>
      {/* <Home/> */}
      <Login/>
    </div>
  );
}

export default App;
