import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Etusivu from "./components/etusivu/etusivu";
import Kuntosalit from "./components/kuntosalit/kuntosalit";
import Lisaravinteet from "./components/lisaravinteet/lisaravinteet";
import Valmennus from "./components/valmennus/valmennus";
import Yhteystiedot from "./components/yhteystiedot/yhteystiedot";
import JoensuunSali from "./components/joensuun_sali/joensuun_sali";
import KuopionSali from "./components/kuopion_sali/kuopion_sali";

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
          <Route path="/joensuunsali" element={<JoensuunSali />} />
          <Route path="/kuopionsali" element={<KuopionSali />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
