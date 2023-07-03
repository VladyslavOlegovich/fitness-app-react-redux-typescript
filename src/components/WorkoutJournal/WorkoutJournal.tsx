import React, { useState } from "react";
import "./WorkoutJournal.css";

import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/reducers";
import {
  deleteWorkout,
  updateWorkouts,
} from "../../store/actions/workoutJournalActions";
import { WorkoutData } from "../../store/reducers/workoutJournalReducer";
import WorkoutJournalForm from "./WorkoutJournalForm/WorkoutJournalForm";
import WorkoutJournalCard from "./WorkoutJournalCard/WorkoutJournalCard";

const WorkoutJournal: React.FC = () => {
  const dispatch = useDispatch();

  const workoutState = useSelector((state: RootState) => state.workout);
  const workouts = workoutState.workouts;
  const [selectedWorkout, setSelectedWorkout] = useState<WorkoutData | null>(
    null
  );
  const [showModal, setShowModal] = useState(false);

  const handleDeleteWorkout = (workoutId: string) => {
    dispatch(deleteWorkout(workoutId));
  };

  const handleCardClick = (workout: WorkoutData) => {
    if (!workout.completed) {
      setSelectedWorkout(workout);
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    if (selectedWorkout) {
      const updatedWorkout: WorkoutData = {
        ...selectedWorkout,
        completed: true,
      };
      const updatedWorkouts: WorkoutData[] = workouts.map((workout) =>
        workout.id === updatedWorkout.id ? updatedWorkout : workout
      );
      dispatch(updateWorkouts(updatedWorkouts));
    }
    setSelectedWorkout(null);
    setShowModal(false);
  };

  return (
    <Container>
      <h1>Workout Journal</h1>

      <Row className="my-4">
        <Col>
          <WorkoutJournalForm />
        </Col>
      </Row>

      <Row>
        {workouts.map((workout, index) => (
          <WorkoutJournalCard
            key={workout.id}
            workout={workout}
            onDeleteWorkout={handleDeleteWorkout}
            onCardClick={handleCardClick}
            index={index}
          />
        ))}
      </Row>

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
