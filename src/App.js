import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Loading from "./Components/Loader/Loader";
import NumberPicker from "./Components/Number-Picker/number-picker.component";
import NavbarComponent from "./Components/Navbar/navbar.component";

const Box = lazy(() => import("./Components/Boxes/box.component"));
const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const NotFound = lazy(() => import("./Pages/About"));
const FortuneTeller = lazy(() =>
  import("./Components/Fortune-Teller/fortune-teller.component")
);

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

function Routes() {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/numberPicker" component={NumberPicker} />
        <Route path="/fortune" component={Box} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

export default App;
