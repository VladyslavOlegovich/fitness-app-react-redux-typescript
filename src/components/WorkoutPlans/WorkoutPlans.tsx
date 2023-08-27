// import { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./WorkoutPlans.css";
const WorkoutPlans = () => {
  // const [selectedPlan, setSelectedPlan] = useState("" || null);
  // const handlePlanSelect = (plan: string | null) => {
  //   setSelectedPlan(plan);
  // };

  return (
    <Container>
      <h1>Workout Plans</h1>
      <Row className="d-flex justify-content-center align-items-stretch">
        <Col md={4} className="mb-4">
          <Card className="workout-plan-card text-center green">
            <Card.Body>
              <Card.Title>Спалення жиру</Card.Title>
              <Card.Text>
                План тренувань для спалення жиру і поліпшення загальної фізичної
                форми.
              </Card.Text>
              <a
                href="#"
                className="btn btn-primary"
                // onClick={() => handlePlanSelect("Спалення жиру")}
              >
                Обрати
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="workout-plan-card red text-center">
            <Card.Body>
              <Card.Title>Набір м'язової маси</Card.Title>
              <Card.Text>
                План тренувань для набору м'язової маси і збільшення сили.
              </Card.Text>
              <a href="#" className="btn btn-primary">
                Обрати
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="workout-plan-card orange text-center">
            <Card.Body>
              <Card.Title>Витривалість</Card.Title>
              <Card.Text>
                План тренувань для покращення витривалості і виносливості.
              </Card.Text>
              <a href="#" className="btn btn-primary">
                Обрати
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default WorkoutPlans;
