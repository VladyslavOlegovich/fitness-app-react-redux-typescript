import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { addWorkout } from "../../../store/actions/workoutJournalActions";
import { v4 as uuidv4 } from "uuid";

const WorkoutJournalForm: React.FC = () => {
  const dispatch = useDispatch();

  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddWorkout = (e: React.FormEvent) => {
    e.preventDefault();

    const workoutData = {
      id: uuidv4(),
      date,
      title,
      description,
      completed: false,
    };

    dispatch(addWorkout(workoutData));

    setDate("");
    setTitle("");
    setDescription("");
  };
  return (
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
  );
};

export default WorkoutJournalForm;
