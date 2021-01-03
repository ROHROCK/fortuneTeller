import { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Loading from "./Components/Loader/Loader";
import NumberPicker from "./Components/Number-Picker/number-picker.component";
import Navbar from "./Components/Navbar/Navbar";
import FortuneTeller from "./Components/Fortune-Teller/fortune-teller.component";
import Box from "./Components/Boxes/box.component";

const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const NotFound = lazy(() => import("./Pages/About"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
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
        <Route exact path="/about" component={About} />
        <Route exact path="/box" component={Box} />
        <Route exact path="/numberPicker" component={NumberPicker} />
        <Route exact path="/fortuneteller" component={FortuneTeller} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

export default App;
