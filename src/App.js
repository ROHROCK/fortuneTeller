<<<<<<< HEAD
import './App.css';
import Share from './Components/Share/share.component';
=======
import { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Loading from './Components/Loader/Loader';

const Home = lazy(() => import('./Pages/Home'));
const About = lazy(() => import('./Pages/About'));
const NotFound = lazy(() => import('./Pages/About'));
>>>>>>> main

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Share />
=======
          <BrowserRouter>
            <Routes/>
          </BrowserRouter>
>>>>>>> main
    </div>
  );
}

function Routes() {
  return (
          <Suspense fallback={<Loading/>}>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About} />
              <Route component={NotFound} />
            </Switch>
          </Suspense>
  );
}

export default App;
