import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";
import Etusivu from "./components/etusivu/etusivu";
import Kuntosalit from "./components/kuntosalit/kuntosalit";
import Lisaravinteet from "./components/lisaravinteet/lisaravinteet";
import Valmennus from "./components/valmennus/valmennus";
import Yhteystiedot from "./components/yhteystiedot/yhteystiedot";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Etusivu />} />
          <Route path="/kuntosalit" element={<Kuntosalit />} />
          <Route path="/valmennus" element={<Valmennus />} />
          <Route path="/lisaravinteet" element={<Lisaravinteet />} />
          <Route path="/yhteystiedot" element={<Yhteystiedot />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
