import uuid from "react-uuid";
import { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { NEW_PERSON } from "../redux/types";

const ModalW = (props) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [inputLastName, setInputLastName] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputGroup, setInputGroup] = useState("");
  const handleChangeLastName = (e) => {
    setInputLastName(e.target.value);
  };
  const handleChangeName = (e) => {
    setInputName(e.target.value);
  };
  const handleChangeGroup = (e) => {
    setInputGroup(e.target.value);
  };
  const handleSubmit = () => {
    if (inputName === "" || inputLastName === "" || inputGroup === "") {
      return setError("Заполните все поля, либо выйдите из формы ввода");
    }
    dispatch({
      type: NEW_PERSON,
      payload: {
        name: inputName,
        email: inputLastName,
        group: inputGroup,
        id: uuid(),
      },
    });
    setInputLastName("");
    setInputName("");
    setInputGroup("");
    props.setSmShow(false);
  };
  return (
    <Modal
      size="sm"
      show={props.smShow}
      onHide={() => [props.setSmShow(false), setError(null)]}
      aria-labelledby="example-modal-sizes-title-sm"
    >
      <Modal.Body>
        <Form>
          {error && <Form.Label style={{ color: "red" }}>{error}</Form.Label>}
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalLastName"
          >
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Введите Фамилию"
                onChange={handleChangeLastName}
                value={inputLastName}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Введите имя"
                onChange={handleChangeName}
                value={inputName}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
            <Col sm={10}>
              <select
                id="selectID"
                className="form-select"
                aria-label="Default select example"
                onChange={handleChangeGroup}
              >
                <option defaultValue="Выберите группу">Выберите группу</option>
                <option value="Бухгалтерия">Бухгалтерия</option>
                <option value="Отдел кадров">Отдел кадров</option>
                <option value="Производство">Производство</option>
                <option value="IT-отдел">IT-отдел</option>
                <option value="Прочее">Прочее</option>
              </select>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 1 }}>
              <Button onClick={() => handleSubmit()}>Зарегистрироваться</Button>
            </Col>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalW;
<select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>;
