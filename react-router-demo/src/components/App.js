import React from 'react';

import '../App.css';
import {Link,Route,Switch} from "react-router-dom";
import Home from '../pages/Home';
import Category from '../pages/Category';
import Products from '../pages/Products';

function App() {
  return (
    <div className="App">
      <h1>welcome to react router world</h1>

      <hr/>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <Link to="/">Home</Link>
          </div>
          <div className="col-sm">
            <Link to="/category">Category</Link>
          </div>
          <div className="col-sm">
            <Link to="/products">Products</Link>
          </div>
        </div>
      </div>

      <hr />

      <div className="panel">
        <div className="panel-body">
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/products" component={Products}/>
            <Route path="/category" component={Category}/>
            {/*<Route path="/products" render={ () => 1 < 2 ? <h2>dog</h2> : <h2>cat</h2>}/>*/}
          </Switch>


          {/*<Route path="/products/:id" render={()=><h2>haha</h2>}/>*/}
          {/*<Route path="/products" component={Products}/>*/}

          {/*<Route path="/category" component={Category}/>*/}
          {/*<Route path="/" component={Home}/>*/}

        </div>
      </div>
    </div>
  );
}

export default App;
