import React, { useState } from "react";
import { FaTimes, FaCheck } from "react-icons/fa";
import "./WorkoutJournal.css";

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
  updateWorkouts,
} from "../../store/actions/workoutJournalActions";
import { WorkoutData } from "../../store/reducers/workoutJournalReducer";
import { v4 as uuidv4 } from "uuid";
import WorkoutJournalForm from "./WorkoutJournalForm/WorkoutJournalForm";
const WorkoutJournal: React.FC = () => {
  const dispatch = useDispatch();
  // const workout = useSelector((state: RootState) => state.workout);
  const workoutState = useSelector((state: RootState) => state.workout);
  const workouts = workoutState.workouts;

  const [workoutsList, setworkoutsList] = useState<WorkoutData[]>([]);
  const [selectedWorkout, setSelectedWorkout] = useState<WorkoutData | null>(
    null
  );
  const [showModal, setShowModal] = useState(false);

  const [completed, setCompleted] = useState(false);

  const handleDeleteWorkout = (e: React.FormEvent, workoutId: string) => {
    e.stopPropagation();
    dispatch(deleteWorkout(workoutId));
  };

  const handleCardClick = (workout: WorkoutData, e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target.classList.contains("form-check-input")) {
      setSelectedWorkout(workout);
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCheckboxChange = (e: React.FormEvent, workoutId: string) => {
    e.stopPropagation();

    const updatedWorkouts = workouts.map((workout) => {
      if (workoutId === workout.id) {
        return {
          ...workout,
          completed: !workout.completed,
        };
      }
      return workout;
    });
    dispatch(updateWorkouts(updatedWorkouts));
  };

  return (
    <Container>
      <h1>Workout Journal</h1>

      {/* Форма додавання тренування */}
      <Row className="my-4">
        <Col>
          <WorkoutJournalForm />
        </Col>
      </Row>

      {/* Список карток-тренувань */}
      <Row>
        {workouts.map((workout, index) => (
          <Col key={workout.id} md={4} className="mb-2">
            <Card
              onClick={(e) => handleCardClick(workout, e)}
              className={`card ${workout.completed ? "completed-workout" : ""}`}
            >
              <Card.Body>
                <p>№ {index + 1}</p>
                <p> Дата: {workout.date}</p>
                <p>Заголовок: {workout.title}</p>
              </Card.Body>
              <Card.Footer className="d-flex">
                <div className="d-flex justify-content-between align-items-center w-100">
                  <Form.Check
                    type="checkbox"
                    label="Completed"
                    checked={workout.completed}
                    onChange={(e) => handleCheckboxChange(e, workout.id)}
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
        <Modal.Body>
          {selectedWorkout && selectedWorkout.description}
        </Modal.Body>
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
