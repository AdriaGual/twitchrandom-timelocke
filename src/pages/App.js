import TopBar from "../components/TopBar/TopBar";
import Main from "../components/Main/Main";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Twitch Cup</title>
        <meta
          name="description"
          content="Todos los equipos de la Twitch Cup 2021."
        />
        <link rel="canonical" href="http://twitch-cup.ga" />
      </Helmet>
      <TopBar></TopBar>
      <Main></Main>
    </div>
  );
}

export default App;
