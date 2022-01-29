import './App.css';
import Nav from './components/Tweet/Nav';
import Home from './components/Tweet/Home';
import Tweet from './components/Tweet/Tweet'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


/**
 * We added a router that will direct to different pages.
 * It is as the name says acts as a url router;
 * @returns page taking us to tweets and home.
 */
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <Routes>
            <Route exact path="/api" element={ <Home /> }> </Route>
            <Route exact path="/api/tweets" element={ <Tweet /> }> </Route>
          </Routes>
        </header>
      </div>
    </Router >
  );
}

export default App;
