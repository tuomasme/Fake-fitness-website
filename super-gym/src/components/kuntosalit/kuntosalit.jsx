import Otsikko from "../otsikko/otsikko";
import Navigointipalkki from "../navigointipalkki/navigointipalkki";
import "./kuntosalit.css";
import joensuu from "../media/joensuu.jpg";
import kuopio from "../media/kuopio.jpg";

const Kuntosalit = () => {
  return (
    <div>
      <Otsikko />
      <Navigointipalkki />
      <div className="container-fluid">
        <div className="row">
          <p>
            Super gym –kuntosalin löydät tällä hetkellä kahdelta paikkakunnalta
            Joensuusta ja Kuopiosta. Molempien kuntosalien tilat ovat
            ensiluokkaiset ja ne on varustettu laadukkailla
            harjoitteluvälineillä. Super gym –kuntosalit ovat
            ympärivuorokautisesti auki vuoden jokaisena päivänä, joten pääset
            treenaamaan tiloihimme silloin, kun sinulle sopii. Joensuun Super
            gym -kuntosalin löydät osoitteesta Joensuuntie 1 ja Kuopion Super
            gym –kuntosali löytyy puolestaan osoitteesta Kuopiontie 1.
          </p>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="box">
              <a href="/joensuunsali">
                <img src={joensuu} alt="Joensuu" className="img-fluid" />
              </a>
            </div>
          </div>
          <div className="col-6">
            <div className="box">
              <a href="/kuopionsali">
                <img src={kuopio} alt="Kuopio" className="img-fluid" />
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="box">
              <h5>Joensuun Super gym</h5>
            </div>
          </div>
          <div className="col-6">
            <div className="box">
              <h5>Kuopion Super gym</h5>
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

export default Kuntosalit;
