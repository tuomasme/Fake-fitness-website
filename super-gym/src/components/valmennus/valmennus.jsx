import Otsikko from "../otsikko/otsikko";
import Navigointipalkki from "../navigointipalkki/navigointipalkki";
import "./valmennus.css";
import matti from "../media/matti.jpg";
import maija from "../media/maija.jpg";

const Valmennus = () => {
  return (
    <div>
      <Otsikko />
      <Navigointipalkki />
      <div className="container-fluid">
        <div className="row">
          <p>
            Olitpa kuntosaliharjoittelun suhteen sitten aloittelija tai
            kilpatason kehonrakentaja, asiantuntevat personal trainerimme
            varmasti löytävät sinulle sopivimman treeniohjelman. Tällä hetkellä
            meillä on tarjota kaksi piinkovaa personal traineria: Maija
            Mehiläinen Joensuussa ja Matti Meikäläinen Kuopiossa. Molemmat
            personal trainerimme ovat penkkipunnerruksen SM-kultamitalisteja,
            joten personal trainerimme ovat alansa ammattilaisia, jotka osaavat
            opastaa niin kuntosaliharjoittelun perusteissa kuin
            kuntosaliharjoittelun optimoimisessa.
          </p>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="box">
              <img src={maija} alt="Maija" className="img-fluid" />
            </div>
          </div>
          <div className="col-6">
            <div className="box">
              <img src={matti} alt="Matti" className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="box">
              <h5>Maija Mehiläinen</h5>
            </div>
          </div>
          <div className="col-6">
            <div className="box">
              <h5>Matti Meikäläinen</h5>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="box">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="col-6">
            <div className="box">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Valmennus;
