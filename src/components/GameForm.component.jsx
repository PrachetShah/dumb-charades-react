import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./GameForm.css";

function GameForm() {
  let defaultVal = { English: false, Hindi: false };

  const [year, setYear] = useState(0);

  const handleYear = (e) => {
    setYear(e.target.value);
    console.log(year);
  };

  const handleChange = (e) => {
    console.log("Handle Change Called");
    // console.log(e.target.checked);
    let lang = e.target.value;
    if (e.target.checked) {
      console.log(e.target);
      console.log(lang);
    }
    defaultVal[lang] = !defaultVal[lang];
  };

  const handleSubmit = (e) => {
    let mapping = { English: "en-US", Hindi: "hi-IN" };
    let url =
      "https://api.themoviedb.org/3/discover/movie?include_video=false&language=en-US%2Chi-IN&page=1&sort_by=popularity.desc&with_origin_country=US%2CIN";
  };

  const type = "checkbox";

  return (
    <div className="d-flex align-items-center justify-content-center">
      <Form className="pt-5">
        <Row className="bg-body-tertiary p-4">
          <Col>
            <h5 className="pe-2">Enter Year:</h5>
          </Col>
          <Col>
            <Form.Control placeholder="Optional" onChange={handleYear} />
          </Col>
        </Row>

        <Row className="bg-body-tertiary mt-4 p-4 fs-5">
          <h5 className="mt-3">Enter Language: </h5>
          {["English", "Hindi"].map((lang) => (
            <div key={`default-${lang}`} className="mb-1 pt-2" required>
              <Form.Check // prettier-ignore
                type={type}
                id={`default-${lang}`}
                label={lang}
                value={lang}
                onChange={handleChange}
              />
            </div>
          ))}
        </Row>

        <Row>
          <Button type="submit" className="mt-4" onClick={handleSubmit}>
            Generate a Movie
          </Button>
        </Row>
      </Form>
    </div>
  );
}

export default GameForm;
