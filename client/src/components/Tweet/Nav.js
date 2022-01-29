import React from 'react'; //ES6 JS instead of cont react
import { Link } from 'react-router-dom';



/**
 * Navigation function to help us route to two links Home and tweets.
 * This is component-based routing that uses react-router-dom. 
 * @returns Nav components
 */


function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark top">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navMainMenu" aria-controls="navMainMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div id="navMainMenu" className="navbar-collapse collapse">
        <div className="navbar-nav ml-auto">
          <Link to='/api' className="nav-item nav-link active">Home</Link>
          <Link to='/api/tweets' className="nav-item nav-link">Tweets</Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;