import Otsikko from "../otsikko/otsikko";
import Navigointipalkki from "../navigointipalkki/navigointipalkki";
import video from "../media/video.mp4";
import "./etusivu.css";

const Etusivu = () => {
  return (
    <div>
      <Otsikko />
      <Navigointipalkki />
      <div className="container">
        <div className="row">
          <p>
            Super Gym on valintasi, jos sinulle kelpaa vain paras. Super Gym
            –kuntosalit tarjoavat laadukkaat välineet ja tilat
            kuntosaliharjoitteluun. Tarjoamme kuntosalijäsenyyksiä ja personal
            trainer –palveluita edullisesti. Myymme myös tärkeimpiä
            lisäravinteita. Tilauksen tehdessäsi ota meihin yhteyttä
            sähköpostilla supergym@gmail.com tai puhelimitse +358 50 123 4567.
            Jos sinulla on mitään kysyttävää, tavoitat meidät sekä sähköpostitse
            että puhelimitse edellä mainittujen yhteystietojen kautta.
          </p>
        </div>
        <div className="row">
          <div className="videoWrapper">
            <iframe
              title="etusivunVideo"
              width="560"
              height="349"
              src={video}
              type="video/mp4"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Etusivu;
