import Otsikko from "../otsikko/otsikko";
import Navigointipalkki from "../navigointipalkki/navigointipalkki";
import "./lisaravinteet.css";
import superpumppi from "../media/superpumppi.jpg";
import hyperpomppu from "../media/hyperpomppu.jpg";

const Lisaravinteet = () => {
  return (
    <div>
      <Otsikko />
      <Navigointipalkki />
      <div className="container-fluid">
        <div className="row">
          <p>
            Meillä on tarjolla lisäravinteista kaksi tärkeintä eli superpumppi
            ja hyperpomppu. Superpumppi nopeuttaa tutkitusti lihaskasvua, ja
            superpumppi onkin oikea valinta kuntosaliharjoittelijalle, jonka
            ensisijaisena tavoitteena on kasvattaa lihasmassaa. Hyperpomppu
            puolestaan tutkitusti nopeuttaa voimatasojen kasvua, ja hyperpomppu
            sopii täydellisesti kuntosaliharjoittelijoille, joiden ensisijaisena
            tavoitteena on kasvattaa voimatasoja. Sekä superpumppi että
            hyperpomppulisäravinteet ovat suomalaisista raaka-aineista
            tuotettuja, joten ostamalla lisäravinteita meiltä, tuet samalla
            suomalaista työtä.
          </p>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="box">
              <img src={superpumppi} alt="Superpumppi" className="img-fluid" />
            </div>
          </div>
          <div className="col-6">
            <div className="box">
              <img src={hyperpomppu} alt="Hyperpomppu" className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="box">
              <h5>Superpumppi</h5>
            </div>
          </div>
          <div className="col-6">
            <div className="box">
              <h5>Hyperpomppu</h5>
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

export default Lisaravinteet;
