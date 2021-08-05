import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import "./App.css";
import { Listarticle } from "./components/Listarticle";
import { Createarticle } from "./components/Createarticle";
import { Editarticle } from "./components/Editarticle";
import { Detailarticle } from "./components/Detailarticle";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <header className="text-center d-flex justify-content-between align-items-center p-3 bg-info mb-2">
        <h5 className="text-light">CRUD with Context API</h5>
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="white"
            class="bi bi-house-fill"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
            />
            <path
              fill-rule="evenodd"
              d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
            />
          </svg>
        </Link>
      </header>
      <div className="m-4"></div>
      <Switch>
        <Route path="/" component={Listarticle} exact />
        <Route path="/create" component={Createarticle} exact />
        <Route path="/edit/:id" component={Editarticle} exact />
        <Route path="/detail/:id" component={Detailarticle} exact />
      </Switch>
    </GlobalProvider>
  );
}

export default App;
