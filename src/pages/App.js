import topRight from "../assets/images/topright.png";
import TopBar from "../components/TopBar/TopBar";
function App() {
  return (
    <div>
      <TopBar></TopBar>
      <div
        className=" h-screen"
        style={{
          backgroundImage: `url(${topRight})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        dd
      </div>
    </div>
  );
}

export default App;
