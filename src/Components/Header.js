import { useState } from "react";
import { Link } from "react-router-dom";
import ModalW from "./ModalW";

const Header = () => {
  const [smShow, setSmShow] = useState(false);

  return (
    <div>
      <div className="container-fluid">
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid d-flex justify-content-evenly">
            <Link to="/">Home</Link>
            <Link to="/main">Главная</Link>
            <p className="navbar-brand mb-0   h1">Show filtering groups</p>
            <Link to="#" onClick={() => setSmShow(true)}>
              Добавить сотрудника
            </Link>
          </div>
        </nav>
        <ModalW smShow={smShow} setSmShow={setSmShow} />
      </div>
    </div>
  );
};

export default Header;
