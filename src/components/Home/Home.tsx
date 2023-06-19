import { useState } from "react";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/reducers";
import { changePhoto, changeUserData } from "../../store/actions/userActions";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender);
  const [about, setAbout] = useState(user.about);
  const [photo, setPhoto] = useState(user.photo);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const userData = {
      name,
      age,
      gender,
      about,
    };

    dispatch(changeUserData(userData));
    setEditing(false);
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const photoDataUrl = reader.result as string;
      dispatch(changePhoto(photoDataUrl));
      setPhoto(photoDataUrl);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <Container>
      <Row className="my-4">
        <Col md={3}>
          <Image
            style={{ width: "200px", height: "200px", objectFit: "cover" }}
            src={photo || "/path/to/profile-image.jpg"}
            roundedCircle
          />
          <Form.Group className="mb-3">
            <Form.Label>Фото</Form.Label>
            <Form.Control type="file" onChange={handlePhotoChange} />
          </Form.Group>
        </Col>
        <Col md={9}>
          <h2>{user.name}</h2>
          <p>Вік: {user.age}</p>
          <p>Стать: {user.gender}</p>
          <p>{user.about}</p>
        </Col>
        <Button
          style={{ maxWidth: "200px" }}
          variant="primary"
          type="submit"
          onClick={() => setEditing(!editing)}
        >
          {editing ? "Закрити редагування" : "Редагувати"}
        </Button>
      </Row>

      {/* Форма для редагування даних */}
      {editing && (
        <Row className="my-4">
          <Col>
            <h3>Редагування даних</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Ім'я Прізвище</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Вік</Form.Label>
                <Form.Control
                  type="number"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Стать</Form.Label>
                <Form.Control
                  as="select"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="Чоловіча">Чоловіча</option>
                  <option value="Жіноча">Жіноча</option>
                </Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Про себе</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Зберегти
              </Button>
            </Form>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Home;
