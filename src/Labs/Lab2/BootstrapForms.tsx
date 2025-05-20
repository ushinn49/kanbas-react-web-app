import { Container, Form, InputGroup, Button, Row, Col} from 'react-bootstrap';

export default function BootstrapForms() {
  return (
    <Container>

      <div id="wd-css-styling-forms">
        <h2>Form</h2>
        <Form.Group className="mb-3" controlId="wd-email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="wd-textarea">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </div>
      <hr />

      <div id="wd-css-styling-dropdowns">
        <h3>Dropdowns</h3>
        <Form.Select aria-label="Default select example">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </div>
      <hr />

      <div id="wd-css-styling-switches">
        <h3>Switches</h3>
        <Form.Check type="switch" id="wd-switch-1" label="Unchecked switch checkbox input" />
        <Form.Check type="switch" id="wd-switch-2" label="Checked switch checkbox input" defaultChecked />
        <Form.Check type="switch" id="custom-switch-disabled-unchecked" label="Unchecked disabled switch checkbox input" disabled />
        <Form.Check type="switch" id="custom-switch-disabled-checked" label="Checked disabled switch checkbox input" defaultChecked disabled />
      </div>
      <hr />

      <div id="wd-css-styling-range-and-sliders">
        <h3>Range</h3>
        <Form.Group controlId="wd-range1">
          <Form.Label>Example range</Form.Label>
          <Form.Range min="0" max="5" step="0.5" />
        </Form.Group>
      </div>
      <hr />

      <div id="wd-css-styling-addons">
        <h3>Addons</h3>
        <InputGroup className="mb-3">
          <InputGroup.Text>$</InputGroup.Text>
          <InputGroup.Text>0.00</InputGroup.Text>
          <Form.Control aria-label="Dollar amount (with dot and two decimal places)" />
        </InputGroup>
        <InputGroup>
          <Form.Control aria-label="Dollar amount (with dot and two decimal places)" />
          <InputGroup.Text>$</InputGroup.Text>
          <InputGroup.Text>0.00</InputGroup.Text>
        </InputGroup>
      </div>
      <hr />

      <div id="wd-css-responsive-forms-1">
        <h3>Responsive Forms</h3>
        <Form.Group as={Row} className="mb-3" controlId="email1">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="email" defaultValue="email@example.com" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="password1">
          <Form.Label column sm={2}>
            Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="textarea2">
          <Form.Label column sm={2}>
            Bio
          </Form.Label>
          <Col sm={10}>
            <Form.Control as="textarea" style={{ height: "100px" }} />
          </Col>
        </Form.Group>
      </div>
      <hr />

      <div id="wd-css-responsive-forms-2">
        <h3>Responsive Forms</h3>
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}> Email </Form.Label>
            <Col sm={10}>
              <Form.Control type="email" placeholder="Email" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
            <Form.Label column sm={2}> Password </Form.Label>
            <Col sm={10}>
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Form.Group>
          <fieldset>
            <Form.Group as={Row} className="mb-3">
              <Form.Label as="legend" column sm={2}> Radios </Form.Label>
              <Col sm={10}>
                <Form.Check type="radio" label="first radio" name="formHorizontalRadios" id="formHorizontalRadios1" defaultChecked />
                <Form.Check type="radio" label="second radio" name="formHorizontalRadios" id="formHorizontalRadios2" />
                <Form.Check type="radio" label="third radio" name="formHorizontalRadios" id="formHorizontalRadios3" />
              </Col>
            </Form.Group>
          </fieldset>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
            <Col sm={{ span: 10, offset: 2 }}>
              <Form.Check label="Remember me" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit">Sign in</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    </Container>
  );
}