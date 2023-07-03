import React, { useState } from "react";
import { Col, Card, Form, Button } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import { WorkoutData } from "../../../store/reducers/workoutJournalReducer";

interface WorkoutCardProps {
  workout: WorkoutData;
  onDeleteWorkout: (workoutId: string) => void;
  onCardClick: (workout: WorkoutData) => void;
  index: number;
}

const WorkoutJournalCard: React.FC<WorkoutCardProps> = ({
  workout,
  onDeleteWorkout,
  onCardClick,
  index,
}) => {
  const [completed, setCompleted] = useState(workout.completed);

  const handleCheckboxChange = () => {
    setCompleted(!completed);
  };

  const handleCardClick = () => {
    onCardClick(workout);
  };

  const handleDeleteWorkout = (e: React.FormEvent) => {
    e.stopPropagation();
    onDeleteWorkout(workout.id);
  };

  return (
    <Col md={4} className="mb-2">
      <Card
        className={`card ${completed ? "completed-workout" : ""}`}
        onClick={handleCardClick}
      >
        <Card.Body>
          <p>№ {index + 1}</p>
          <p>Дата: {workout.date}</p>
          <p>Заголовок: {workout.title}</p>
        </Card.Body>
        <Card.Footer className="d-flex">
          <div className="d-flex justify-content-between align-items-center w-100">
            <Form.Check
              type="checkbox"
              label="Completed"
              checked={completed}
              onChange={handleCheckboxChange}
              onClick={(e) => e.stopPropagation()}
            />
            <Button
              variant="link"
              className="text-danger"
              onClick={handleDeleteWorkout}
            >
              <FaTimes />
            </Button>
          </div>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default WorkoutJournalCard;
