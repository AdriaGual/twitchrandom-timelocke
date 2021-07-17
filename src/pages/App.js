import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Analytics from "react-router-ga";
import Main from "../components/Main/Main";
import TopBar from "../components/TopBar/TopBar";
import TopCut from "../components/TopCut/TopCut";
import Novedades from "../components/Novedades/Novedades";
import Colaboradores from "../components/Colaboradores/Colaboradores";

function App() {
  return (
    <Router>
      <Analytics id="UA-191815221-4">
        <Switch>
          <Route exact path="/">
            <Helmet>
              <meta charSet="utf-8" />
              <title>TwitchRandom TimeLocke</title>
              <meta
                name="description"
                content="Todos los equipos del TwitchRandom TimeLocke 2021."
              />
              <link rel="canonical" href="http://twitchrandom-timelocke.ga" />
            </Helmet>
            <TopBar></TopBar>
            <Main></Main>
          </Route>
          <Route exact path="/topCut">
            <Helmet>
              <meta charSet="utf-8" />
              <title>TwitchRandom TimeLocke</title>
              <meta
                name="description"
                content="Todos los equipos del TwitchRandom TimeLocke 2021."
              />
              <link rel="canonical" href="http://twitchrandom-timelocke.ga" />
            </Helmet>
            <TopBar></TopBar>
            <TopCut></TopCut>
          </Route>
          <Route exact path="/novedades">
            <Helmet>
              <meta charSet="utf-8" />
              <title>TwitchRandom TimeLocke</title>
              <meta
                name="description"
                content="Todos los equipos del TwitchRandom TimeLocke 2021."
              />
              <link rel="canonical" href="http://twitchrandom-timelocke.ga" />
            </Helmet>
            <TopBar></TopBar>
            <Novedades></Novedades>
          </Route>
          <Route exact path="/colaboradores">
            <Helmet>
              <meta charSet="utf-8" />
              <title>TwitchRandom TimeLocke</title>
              <meta
                name="description"
                content="Todos los equipos del TwitchRandom TimeLocke 2021."
              />
              <link rel="canonical" href="http://twitchrandom-timelocke.ga" />
            </Helmet>
            <TopBar></TopBar>
            <Colaboradores></Colaboradores>
          </Route>
        </Switch>
      </Analytics>
    </Router>
  );
}

export default App;
