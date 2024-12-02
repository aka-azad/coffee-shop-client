import { Outlet } from "react-router";
import Navbar from "./Components/Navbar";
const App = () => {
  return (
    <div>
      <Navbar />

      <div className="container mx-auto p-4 w-10/12">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
