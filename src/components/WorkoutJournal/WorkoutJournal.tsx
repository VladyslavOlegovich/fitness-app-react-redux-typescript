import React, { useState } from "react";
import { FaTimes, FaCheck } from "react-icons/fa";

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
import {
  addWorkout,
  deleteWorkout,
} from "../../store/actions/workoutJournalActions";
import { WorkoutData } from "../../store/reducers/workoutJournalReducer";
import { v4 as uuidv4 } from "uuid";
const WorkoutJournal: React.FC = () => {
  const dispatch = useDispatch();
  // const workout = useSelector((state: RootState) => state.workout);
  const workoutState = useSelector((state: RootState) => state.workout);
  const workouts = workoutState.workouts;

  const [workoutsList, setworkoutsList] = useState<WorkoutData[]>([]);
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleAddWorkout = (e: React.FormEvent) => {
    e.preventDefault();
    const workoutData = {
      id: uuidv4(),
      workouts,
      date,
      title,
      description,
      completed,
    };

    dispatch(addWorkout(workoutData));
    console.log(workoutData);
    setworkoutsList([...workouts, workoutData]);
    setDate("");
    setTitle("");
    setDescription("");
  };

  const handleDeleteWorkout = (e: React.FormEvent, workoutId: string) => {
    e.stopPropagation();
    dispatch(deleteWorkout(workoutId));
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
        {workouts.map((workout, index) => (
          <Col key={workout.id} md={4} className="mb-2">
            <Card onClick={() => handleCardClick(workout)}>
              <Card.Body>
                #{index + 1}: {workout.date} {workout.title}{" "}
                {workout.description}
              </Card.Body>
              <Card.Footer className="d-flex">
                <div className="d-flex justify-content-between align-items-center w-100">
                  <Form.Check
                    type="checkbox"
                    label="Completed"
                    checked={workout.completed}
                    onChange={(e) => {
                      // Оновити стан виконання тренування
                    }}
                  />
                  <Button
                    variant="link"
                    className="text-danger"
                    onClick={(e) => handleDeleteWorkout(e, workout.id)}
                  >
                    <FaTimes />
                  </Button>
                </div>
              </Card.Footer>
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
