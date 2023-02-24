import { Container, Nav } from "react-bootstrap";
import "./navigointipalkki.css";

const Navigointipalkki = () => {
  return (
    <Container>
      <Nav className="nav">
        <Nav.Link href="/">Etusivu</Nav.Link>
        <Nav.Link href="/kuntosalit">Kuntosalit</Nav.Link>
        <Nav.Link href="/valmennus">Valmennus</Nav.Link>
        <Nav.Link href="/lisaravinteet">Lisäravinteet</Nav.Link>
        <Nav.Link href="/yhteystiedot">Yhteystiedot</Nav.Link>
      </Nav>
    </Container>
  );
};

export default Navigointipalkki;
