import React from "react";
import { BrowserRouter as Route, Router, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import NoMatch from "./pages/NoMatch";

import Nav from "./components/Nav";

// import { StoreProvider } from './utils/GlobalState';

// are we / should we be using a token
const client = new ApolloClient(
  { uri: '/graphql' }
  );
  
//   {
//   request: (operation) => {
//     const token = localStorage.getItem("id_token");
//     operation.setContext({
//       headers: {
//         authorization: token ? `Bearer ${token}` : "",
//       },
//     });
//   },
//   uri: "/graphql",
// });

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/" />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
