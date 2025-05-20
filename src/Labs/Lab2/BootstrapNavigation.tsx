import { Container, Nav, Card, Button } from 'react-bootstrap';

export default function BootstrapNavigation() {
  return (
    <Container>

      <div id="wd-css-navigating-with-tabs">
        <h3>Tabs</h3>
        <Nav variant="tabs" defaultActiveKey="#/Labs/Lab2/Active">
          <Nav.Item>
            <Nav.Link href="#/Labs/Lab2/Active">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#/Labs/Lab2/Link1" eventKey="link-1">Link 1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#/Labs/Lab2/Link2" eventKey="link-2">Link 2</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#/Labs/Lab2/Disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <hr />


      <div id="wd-css-navigating-with-cards">
        <h3>Cards</h3>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="/images/stacked.jpg" />
          <Card.Body>
            <Card.Title>Stacking Starship</Card.Title>
            <Card.Text>
              Stacking the most powerful rocket in history. Mars or bust!
            </Card.Text>
            <Button variant="primary">Boldly Go</Button>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}