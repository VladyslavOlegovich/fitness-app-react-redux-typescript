import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Modal,
  Form,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/reducers";
import { addWorkout } from "../../store/actions/workoutJournalActions";
import { WorkoutData } from "../../store/reducers/workoutJournalReducer";

const WorkoutJournal: React.FC = () => {
  const dispatch = useDispatch();
  const workout = useSelector((state: RootState) => state.workout);

  const [workouts, setWorkouts] = useState<WorkoutData[]>([]);
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [date, setDate] = useState(workout.date);
  const [title, setTitle] = useState(workout.title);
  const [description, setDescription] = useState(workout.description);

  const handleAddWorkout = (e: React.FormEvent) => {
    e.preventDefault();
    const workoutData = {
      workouts,
      date,
      title,
      description,
    };

    dispatch(addWorkout(workoutData));
    console.log(workoutData);
    setWorkouts([...workouts, workoutData]);
    setDate("");
    setTitle("");
    setDescription("");
  };

  const handleCardClick = (workout) => {
    setSelectedWorkout(workout);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Container>
      <h1>Workout Journal</h1>

      {/* Форма додавання тренування */}
      <Row className="my-4">
        <Col>
          <Form onSubmit={handleAddWorkout}>
            <Form.Group controlId="formDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add Workout
            </Button>
          </Form>
        </Col>
      </Row>

      {/* Список карток-тренувань */}
      <Row>
        {workout.workouts.map((workout, index) => (
          <Col key={index} md={4} className="my-2">
            <Card onClick={() => handleCardClick(workout)}>
              <Card.Body>
                {workout.date} {workout.title} {workout.description}
              </Card.Body>
              <Button variant="link" className="text-danger">
                <FaTimes />
              </Button>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Модальне вікно для детальної інформації про тренування */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Workout Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>{/* Детальна інформація про тренування */}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default WorkoutJournal;
