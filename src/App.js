import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Loading from "./Components/Loader/Loader";

const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const NotFound = lazy(() => import("./Pages/About"));
const Fortune = lazy(() =>
  import("./Components/Fortune-Teller/fortune-teller.component")
);

function App() {
  return (
    <div className="App">
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
        <Route path="/fortune" component={Fortune} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

export default App;
