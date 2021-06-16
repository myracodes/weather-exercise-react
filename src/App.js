import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Cold from './Components/Cold';
import Hot from './Components/Hot';
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Home/>
       <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cold" component={Cold} />
          <Route exact path="/hot" component={Hot} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
