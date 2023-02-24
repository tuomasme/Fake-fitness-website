import Otsikko from "../otsikko/otsikko";
import Navigointipalkki from "../navigointipalkki/navigointipalkki";
import suuri from "../media/suuri.jpg";
import "./yhteystiedot.css";

const Yhteystiedot = () => {
  return (
    <div>
      <Otsikko />
      <Navigointipalkki />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div>
              <div className="box">
                <h5>Super Gym yhteystiedot:</h5>
              </div>
              <div className="box">
                <p>Sähköpostiosoite: supergym@gmail.com</p>
              </div>
              <div className="box">
                <p>Puhelinnumero: +358 50 123 4567</p>
              </div>
              <div className="box">
                <p>Super gym -kuntosalit:</p>
              </div>
              <div className="box">
                <p>Joensuu, Joensuuntie 1</p>
              </div>
              <div className="box">
                <p>Kuopio, Kuopiontie 1</p>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="box">
              <img src={suuri} alt="Suuri" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Yhteystiedot;
