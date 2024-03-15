import { Route, Routes } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import Foter from "./componentes/Foter";
import Home from "./componentes/Home";
import CardInfo from "./componentes/CardInfo";
import Context from "./componentes/context/Context";
import PruductDescription from "./componentes/pagesany/PruductDescription";
import Katalog from "./componentes/Katalog";
import Uslugi from "./componentes/Uslugi";
import ProfileSidebar from "./componentes/ProfilSaidbar";
import Aftarizatsiya from "./componentes/pagesany/Aftarizatsiya";
import Registaratsiya from "./componentes/pagesany/Registaratsiya";
import Hatolikuchun from "./componentes/pagesany/Hatolikuchun";
import Basket from "./componentes/Basket";
import Okomandi from "./componentes/pagesany/Okomandi";
import Ishlabchiqarish from "./componentes/pagesany/Ishlabchiqarish";
import Ish from "./componentes/pagesany/Ish";
import Bosibotganyillar from "./componentes/pagesany/Bosibotganyillar";
import Tezhavola from "./componentes/pagesany/Tezhavola";
import Yangiliklar from "./componentes/Yangiliklar";
import Zakas from "./componentes/pagesany/Zakas";
import Zakasta from "./componentes/pagesany/Zakasta";
import Add from "./componentes/Add";


function App() {

  return (
    <div className="App">
      <Context>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":id" element={<CardInfo />} >
            <Route path="*" element={<Hatolikuchun />} />
            <Route path="pruductdeskiription" element={<PruductDescription />} />
          </Route >
          <Route path="katalog" element={<Katalog />} />
          <Route path="uslugi" element={<Uslugi />} />
          <Route path="profil_status" element={<ProfileSidebar />} />
          <Route path="aftarizatsiya" element={<Aftarizatsiya />} />
          <Route path="/registratsiya" element={<Registaratsiya />} />
          <Route path="basket" element={<Basket />} />
          <Route path="okomandi" element={<Okomandi />} />
          <Route path="ishlab_chiqarish" element={<Ishlabchiqarish />} />
          <Route path="ish" element={<Ish />} />
          <Route path="otganyillar" element={<Bosibotganyillar />} />
          <Route path="havola" element={<Tezhavola />} />
          <Route path="yangilik" element={<Yangiliklar />} />
          <Route path="zakas" element={<Zakas />} />
          <Route path="zakasta" element={<Zakasta />} />
          <Route path="add" element={<Add />} />
        </Routes>
        <Foter />
      </Context>
    </div>

  );
}

export default App;