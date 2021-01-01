import Loader from "./Components/Loader/Loader";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <button>Click Here to see your fortune !</button>
    </div>
  );
}

export default App;
