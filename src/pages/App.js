import TopBar from "../components/TopBar/TopBar";
import TopCut from "../components/TopCut/TopCut";
import Main from "../components/Main/Main";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Analytics from "react-router-ga";

function App() {
  return (
    <Router>
      <Analytics id="UA-191815221-4">
        <Switch>
          <Route exact path="/">
            <Helmet>
              <meta charSet="utf-8" />
              <title>PokeRandom Tournament</title>
              <meta
                name="description"
                content="Todos los equipos del Pokerandom Tournament 2021."
              />
              <link rel="canonical" href="http://pokerandomTournament.ga" />
            </Helmet>
            <TopBar></TopBar>
            <Main></Main>
          </Route>
          <Route exact path="/topCut">
            <Helmet>
              <meta charSet="utf-8" />
              <title>PokeRandom Tournament</title>
              <meta
                name="description"
                content="Todos los equipos del Pokerandom Tournament 2021."
              />
              <link rel="canonical" href="http://pokerandomTournament.ga" />
            </Helmet>
            <TopBar></TopBar>
            <TopCut></TopCut>
          </Route>
        </Switch>
      </Analytics>
    </Router>
  );
}

export default App;
